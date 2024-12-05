import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import {Toaster} from "@/components/ui/sonner";
import {Outfit} from "next/font/google";
import {TaskProvider} from "@/context/task-context";

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Task Manager',
    description: 'A modern task management interface',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased overflow-x-hidden`}
      >
      <TaskProvider>
          {children}
      </TaskProvider>
        <Toaster />
      </body>
    </html>
  );
}
