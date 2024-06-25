import { ReactNode } from "react";

export type MenuItemProps = {
	id: number;
	icon: ReactNode;
	title: string;
	to: string | (() => void);
};
