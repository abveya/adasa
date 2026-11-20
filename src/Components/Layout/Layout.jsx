import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

export default function Layout() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <ScrollToTop/>
        <Nav />
        <main className="grow pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
