import { useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useMemo, useRef, useState } from "react";

export default function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const lastNavigationRef = useRef<string | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  // Memoize the auth screen check to prevent unnecessary re-calculations
  const inAuthScreen = useMemo(() => {
    return segments[0] === "(auth)";
  }, [segments]);

  // Check if user should have access to current route
  const hasValidAccess = useMemo(() => {
    if (!isLoaded) return false;

    // If in auth screen, allow access regardless of sign-in status
    if (inAuthScreen) return true;

    // If not in auth screen, only allow access if signed in
    return isSignedIn;
  }, [isLoaded, isSignedIn, inAuthScreen]);

  useEffect(() => {
    if (!isLoaded) return;

    const targetRoute =
      !isSignedIn && !inAuthScreen
        ? "/(auth)/login"
        : isSignedIn && inAuthScreen
          ? "/(tabs)"
          : null;

    // Prevent redundant navigation to the same route
    if (targetRoute && targetRoute !== lastNavigationRef.current) {
      lastNavigationRef.current = targetRoute;
      setIsNavigating(true);

      // Add a small delay to prevent rapid successive navigations
      const timeoutId = setTimeout(() => {
        router.replace(targetRoute as any);
        setIsNavigating(false);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        setIsNavigating(false);
      };
    }
  }, [isLoaded, isSignedIn, inAuthScreen, router]);

  // Don't render anything if not loaded, navigating, or user doesn't have valid access
  if (!isLoaded || isNavigating || !hasValidAccess) return null;

  return <RootNavigation />;
}

const RootNavigation = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="user" />
    </Stack>
  );
};
