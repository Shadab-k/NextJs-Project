"use client";
import { Inter } from "next/font/google";
// import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/src/components/BootstrapClient";
// import { Provider } from "./Provider";
import store from "@/redux/store/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <body className={inter.className}>
          <Provider store = {store}>
            {children}
            <BootstrapClient />
          </Provider>
        </body>
     
    </html>
  );
}
