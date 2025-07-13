import { TokenCache } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

let accessCount = 0;

const createTokenCache = (): TokenCache => {
  return {
    getToken: async (key: string) => {
      try {
        const item = await SecureStore.getItemAsync(key);
        if (__DEV__ && item) {
          accessCount++;
          console.log(`🔐 Token access #${accessCount}: ${key}`);
        }
        return item;
      } catch (error) {
        console.error("secure store get item error: ", error);
        await SecureStore.deleteItemAsync(key);
        return null;
      }
    },
    saveToken: async (key: string, token: string) => {
      try {
        if (__DEV__) {
          console.log(`💾 Token saved: ${key}`);
        }
        return await SecureStore.setItemAsync(key, token);
      } catch (error) {
        console.error("secure store save token error: ", error);
        throw error;
      }
    },
  };
};

// Create the cache once and reuse it - SecureStore is not supported on the web
export const tokenCache =
  Platform.OS !== "web" ? createTokenCache() : undefined;
