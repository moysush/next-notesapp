import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthSessionProvider from "./components/SessionProvider";
import NavBar from "./components/NavBar";
import { NotificationProvider } from "./components/NotificationContext";
import Notification from "./components/Notification";

export const metadata: Metadata = {
  title: "Notes App",
  description: "A simple notes application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthSessionProvider>
          <NotificationProvider>
            <NavBar />
            <Notification />
            {children}
          </NotificationProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
