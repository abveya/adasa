import { Link } from "react-router-dom";
import UniqueBlog from "../UniqueBlog/UniqueBlog";
import Categories from "../Categories/Categories";
import LatestArticles from "../LatestArticles/LatestArticles";
import Subscription from "../Subscription/Subscription";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 blur-3xl bg-orange-500/10 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 blur-3xl bg-yellow-500/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-1/2 w-125 h-125 blur-3xl bg-orange-500/5 rounded-full"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="top-badge">
              <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full animate-pulse"></span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-medium text-neutral-300">
                مرحباً بك في عدسة
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl! font-bold text-white mb-6 leading-tight tracking-tight">
              اكتشف{" "}
              <span className="inline-block bg-clip-text bg-linear-[135deg,#f97316,#fbbf24] text-transparent">
                فن
              </span>
              <br />
              التصوير الفوتوغرافي
            </h1>
            <p className=" md:text-2xl text-neutral-400 mb-10 max-w-[672px] mx-auto leading-relaxed">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link
                to={"/blog"}
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                <span>استكشف المقالات</span>
                <i className="fa-solid fa-arrow-right w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"></i>
              </Link>
              <Link
                to="/about"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-circle-exclamation"></i>
                <span>اعرف المزيد</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="rounded-3xl flex flex-col items-center bg-[#161616cc] border border-[#262626] p-4 hover:scale-105 transition-transform duration-300">
                <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>
                <span className=" md:text-3xl font-bold bg-clip-text text-transparent bg-linear-[135deg,#f97316,#fbbf24]">
                  +50
                </span>
                <p className="text-sm text-neutral-500">مقالة</p>
              </div>
              <div className="rounded-3xl flex flex-col items-center bg-[#161616cc] border border-[#262626] p-4 hover:scale-105 transition-transform duration-300">
                <i className="fa-solid fa-users text-2xl text-orange-500 mb-1"></i>
                <span className=" md:text-3xl font-bold bg-clip-text text-transparent bg-linear-[135deg,#f97316,#fbbf24]">
                  +10ألف
                </span>
                <p className="text-sm text-neutral-500">قارئ</p>
              </div>
              <div className="rounded-3xl flex flex-col items-center bg-[#161616cc] border border-[#262626] p-4 hover:scale-105 transition-transform duration-300">
                <i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1"></i>
                <span className=" md:text-3xl font-bold bg-clip-text text-transparent bg-linear-[135deg,#f97316,#fbbf24]">
                  6
                </span>
                <p className="text-sm text-neutral-500">تصنيفات</p>
              </div>
              <div className="rounded-3xl flex flex-col items-center bg-[#161616cc] border border-[#262626] p-4 hover:scale-105 transition-transform duration-300">
                <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1"></i>
                <span className="md:text-3xl font-bold bg-clip-text text-transparent bg-linear-[135deg,#f97316,#fbbf24]">
                  4
                </span>
                <p className="text-sm text-neutral-500">كاتب</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <UniqueBlog />
      <Categories />
      <LatestArticles />
      <Subscription />
    </>
  );
}
