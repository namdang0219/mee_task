import { DarkTheme, DefaultTheme } from "@react-navigation/native";

export const primaryColor: string = "#6250EF";
export const primaryColorDark: string = "#7463FF";

export const CustomLightTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: primaryColor,
		text: "#000",
		background: "#fff",
		bottomIconDefault: "#B7B7B7",
	},
};

export const CustomDarkTheme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		primary: primaryColorDark,
		text: "#F3F3F3",
		background: "#1F1F1F",
		bottomIconDefault: "#B7B7B7",
	},
};

export type Theme = typeof CustomDarkTheme;
