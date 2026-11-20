import React from "react";
import { Link } from "react-router-dom";
export default function ArticleCardList({ list, post }) {
      const fullDate =new Date(post.date).toLocaleDateString("ar-EG", {
    day:"2-digit",
    month:"long",
    year:"numeric"
  })
  return (
    <>
      <article
        key={post.id}
        className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
      >
        <Link to={`/blog/${post.slug}`} className="flex flex-col md:flex-row">
          <div
            className={`${list ? "w-full md:w-72 lg:w-80! h-52 md:h-auto! shrink-0 " : "h-72 md:h-100!"} relative overflow-hidden`}
          >
            <img
              className={`${list ? "group-hover:scale-105 duration-500" : " group-hover:scale-110 duration-700"}w-full h-full object-cover transition-transform  ease-out`}
              src={post.image}
              alt={post.title}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {list ? (
              ""
            ) : (
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                  <i className="fa-solid fa-star text-white"></i>
                  مميز
                </span>
              </div>
            )}
          </div>
          <div
            className={`${list ? "flex-1 p-6" : "p-8 md:p-10!"} flex flex-col justify-center`}
          >
            <div
              className={`${list ? "mb-3" : "mb-4"} flex items-center gap-3`}
            >
              <span className="top-badge mb-0 px-3 py-1 text-xs">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-neutral-500">
                <i className="fa-regular fa-clock"></i>
                {post.readTime}
              </span>
            </div>
            <h2
              className={`${list ? "text-xl lg:text-2xl!" : "text-2xl md:text-3xl!"} font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight`}
            >
              {post.title}
            </h2>
            <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                    src={post.author.avatar}
                    alt={post.author.name}
                  />
                  <span className="absolute bottom-0 left-0 w-4 h-4 bg-orange-500 rounded-full border border-[#161616]"></span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">
                    {post.author.name}
                  </span>
                  <span className="text-xs text-neutral-500">{fullDate}</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                اقرأ المقال
                <i className="fa-solid fa-arrow-left-long"></i>
              </div>
            </div>
          </div>
        </Link>
      </article>
    </>
  );
}
