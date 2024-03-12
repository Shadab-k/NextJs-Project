"use client";
import Navbar from "@/components/Navbar";
// import Link from "next/link";
import "./page.module.css";

export default function Page() {
  return (
    <div>
        <Navbar />
        <h1 className="d-flex justify-content-center align-items-center">
          Entry point of the site
        </h1>
      </div>
  );
}
