import { SignOutButton } from "@/components/SignOutButton";
import { useUser } from "@clerk/clerk-expo";
import { useMemo } from "react";
import { Text, View } from "react-native";

export default function Profile() {
  const { user } = useUser();

  // Memoize the email extraction to prevent unnecessary re-renders
  const userEmail = useMemo(() => {
    return user?.emailAddresses[0]?.emailAddress || null;
  }, [user?.emailAddresses]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Text style={{ color: "#fff", fontSize: 24, marginBottom: 20 }}>
        Profile
      </Text>
      {userEmail && (
        <Text style={{ color: "#fff", marginBottom: 20 }}>
          Welcome, {userEmail}
        </Text>
      )}
      <SignOutButton />
    </View>
  );
}
