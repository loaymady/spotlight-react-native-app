import { useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useMemo, useRef } from "react";

export default function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const lastNavigationRef = useRef<string | null>(null);

  // Memoize the auth screen check to prevent unnecessary re-calculations
  const inAuthScreen = useMemo(() => {
    return segments[0] === "(auth)";
  }, [segments]);

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

      // Add a small delay to prevent rapid successive navigations
      const timeoutId = setTimeout(() => {
        router.replace(targetRoute as any);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [isLoaded, isSignedIn, inAuthScreen, router]);

  if (!isLoaded) return null;

  return <RootNavigation />;
}

const RootNavigation = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
    </Stack>
  );
};
