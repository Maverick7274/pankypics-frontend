import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/libs/utils";
import { afacad, raleway } from "@/libs/fonts";
import Link from "next/link";
import Provider from "@/libs/Providers";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(afacad, raleway, "antialiased")}>
				<div>
					<Link href="/">Home</Link>
					<Link href="/admin">Admin Panel</Link>
					<Link href="/admin/login">Login Page</Link>
				</div>
				<Provider>
					<div>{children}</div>
				</Provider>
			</body>
		</html>
	);
}
