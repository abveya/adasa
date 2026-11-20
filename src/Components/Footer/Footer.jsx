import { Link } from "react-router-dom";
import siteInfo from "../../data/siteInfo.json";
import categoryData from "../../data/categories.json";
import { useState } from "react";
export default function Footer() {
  const [info, setInfo] = useState(siteInfo.siteInfo);
  const [category, setCategory] = useState(categoryData.categories);
  return (
    <>
      <footer className="relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 group mb-6">
                <div
                  className="w-11 h-11 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300"
                  style={{ boxShadow: "rgba(249, 115, 22, 0.3) 0px 4px 20px" }}
                >
                  <span className="text-xl font-bold text-white">
                    {info.name.split("").slice(0, 1).join("")}
                  </span>
                </div>
                <span className="text-xl font-bold text-white">
                  {info.name}
                </span>
              </Link>
              <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                {info.description}
              </p>
              <div className="flex gap-2">
                <Link
                  to={info.social.twitter}
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {" "}
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
                <Link
                  to={info.social.github}
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <i className="fa-brands fa-github"></i>
                </Link>
                <Link
                  to={info.social.linkedin}
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <i className="fa-brands fa-square-linkedin"></i>
                </Link>
                <Link
                  to={info.social.youtube}
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <i className="fa-brands fa-youtube"></i>
                </Link>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                <h3 className="text-white font-semibold">استكشف</h3>
              </div>
              <ul className="space-y-4">
                <li>
                  <Link
                    to=""
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i className="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180 pointer-events-none"></i>
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i className="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180 pointer-events-none"></i>
                    المدونة
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i className="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180 pointer-events-none"></i>
                    من نحن
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                <h3 className="text-white font-semibold">التصنيفات</h3>
              </div>
              <ul className="space-y-4">
                {category.slice(0,4).map((categoryName) => {
                 return(
                   <li>
                    <Link
                      to={`/blog?category=${encodeURIComponent(categoryName.name)}`}
                      className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <i className="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180 pointer-events-none"></i>
                      {categoryName.name}
                    </Link>
                  </li>
                 )
                })}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                <h3 className="text-white font-semibold">ابقى على اطلاع</h3>
              </div>
              <p className="text-sm text-neutral-500 mb-4">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>
              <form className="space-y-3">
                <input
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full mb-3 px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600"
                  type="email"
                />
                <button type="submit" className="w-full btn-primary text-sm">
                  اشترك
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-[#262626] w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center flex-col md:flex-row gap-4">
              <p className="text-sm text-neutral-600">
                © 2026 عدسة. صنع بكل{" "}
                <i className="fa-solid fa-heart text-orange-500"></i> جميع
                الحقوق محفوظة.
              </p>
              <div className="flex gap-6">
                <Link
                  to="privacy"
                  className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
                >
                  سياسة الخصوصية
                </Link>
                <Link
                  to="terms"
                  className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
                >
                  شروط الخدمة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
