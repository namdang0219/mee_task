import { initializeApp,  } from "firebase/app";
// @ts-ignore
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
	apiKey: process.env.EXPO_PUBLIC_FIREBASE,
	authDomain: "mee-task.firebaseapp.com",
	projectId: "mee-task",
	storageBucket: "mee-task.appspot.com",
	messagingSenderId: "230260425155",
	appId: "1:230260425155:web:66ab331b78ac04d6117d76",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
