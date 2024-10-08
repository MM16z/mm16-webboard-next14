import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'

import '@/styles/homepage/homepage.css'
import '@/styles/(pages)/user-dashboard/user-dashboard.css'
import '@/styles/navbar/navbar.css'
import '@/styles/post-box/comment-box.css'
import '@/styles/post-box/post-box.css'
import '@/styles/heart-btn/heart-btn.css'
import '@/styles/mobile-menu/mobile-menu.css'
import '@/styles/auth-form/auth-form.css'

import Navbar from "@/components/navbar/Navbar";
import StoreProvider from "@/redux/providerComponent/storeProvider";
import AuthGuard from "@/services/AuthGuard";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
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
      <StoreProvider>
        <body className={inter.className}>
          <AuthGuard>
            <Navbar />
            {children}
          </AuthGuard>
          {/* <div className="absolute bottom-0">GIT LOGO IMG</div> */}
        </body>
      </StoreProvider>
    </html>
  );
}


