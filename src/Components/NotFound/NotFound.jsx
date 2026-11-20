import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] animate-[float_6s_ease-in-out_infinite] opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite_1s] opacity-40"></div>
        <div className="relative text-center px-4 max-w-lg mx-auto">
          <h1 className="text-[140px] md:text-[180px] font-black text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-yellow-500 to-orange-500 leading-none select-none">
            404
          </h1>
          <div className="relative w-28 h-28 mx-auto mb-8">
            <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 to-yellow-500/20 rounded-full border border-orange-500/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <i class="fa-regular fa-face-frown text-orange-500 text-5xl"></i>
            </div>
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-lg rotate-12 animate-bounce"></div>
            <div className="absolute -bottom-1 -left-3 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            عفواً! الصفحة غير موجودة
          </h2>
          <p className="text-neutral-400 mb-8 text-lg">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
            الصحيح.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 ">
            <Link
              to={"/"}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-house text-white"></i>
              الذهاب للرئيسية
            </Link>
            <Link
              to={"/blog"}
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <i class="fa-solid fa-newspaper text-white"></i>
              تصفح المقالات
            </Link>
          </div>
          <div className="pt-3">
            <p className="text-sm text-neutral-500 mb-4">قد تجد هذه مفيدة:</p>
            <div className="flex items-center justify-center mb-7 gap-4 text-sm flex-wrap">
              <Link
                className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
                to={"/blog"}
              >
                المدونة
              </Link>
              <span class="text-neutral-600">•</span>
              <Link
                className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
                to={"/about"}
              >
                من نحن
              </Link>
              <span class="text-neutral-600">•</span>
              <Link
                className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
                to={"/privacy"}
              >
                الخصوصية
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
