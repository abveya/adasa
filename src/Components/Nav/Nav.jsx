import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import siteInfo from "../../data/siteInfo.json"
import { useState } from "react";
export default function Nav() {
    // const info = siteInfo.siteInfo;
    const [info, setInfo] = useState(siteInfo.siteInfo)
  return (
    <>
      <nav className="bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-transparent fixed inset-s-0 inset-e-0 top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between h-20">
            <Link
              to="/"
              className="flex items-center gap-3 group"
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                <img
                  src={Logo}
                  className="w-full h-full object-cover"
                  alt="Logo"
                />
              </div>
              <div className=" flex flex-col">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-neutral-300">
               {info.name}
              </span>
              <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">{info.tagline}</span>
              </div>
            </Link>
            <div className="md:order-2 hidden md:flex items-center gap-3">
              <button
                type="button"
                className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
              >
               <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <Link to={'/blog'} className="btn-primary text-sm">ابدأ القراءة</Link>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <div className="hidden md:flex items-center">
                <div className="p-1.5 flex items-center rounded-full bg-[#161616] border border-[#262626]">
                  <NavLink
                    to="/"
                    className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"
                    aria-current="page"
                  >
                    الرئيسية
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"
                  >
                    المدونة
                  </NavLink>

                  <NavLink
                    to="/about"
                    className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"
                  >
                    من نحن
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
