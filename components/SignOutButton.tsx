import { useClerk } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { memo, useCallback } from "react";
import { Text, TouchableOpacity } from "react-native";

export const SignOutButton = memo(() => {
  const { signOut } = useClerk();

  const handleSignOut = useCallback(async () => {
    try {
      await signOut();
      // Redirect to your desired page
      Linking.openURL(Linking.createURL("/"));
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error("Sign out error:", JSON.stringify(err, null, 2));
    }
  }, [signOut]);

  return (
    <TouchableOpacity onPress={handleSignOut}>
      <Text>Sign out</Text>
    </TouchableOpacity>
  );
});
