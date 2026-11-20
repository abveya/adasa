import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import PostData from "../../data/posts.json";
import ArticleCard from "../ArticleCard/ArticleCard";
import NotFound from "../NotFound/NotFound";
export default function ArticleDetails() {
  const { title } = useParams();
  const [posts, setPosts] = useState(PostData.posts);
  const article = posts.find((item) => item.slug === title);
  if (!article) {
    return <NotFound />;
  }
  const date = new Date(article.date).toLocaleDateString("ar-EG", {
    day: "2-digit",
    month: "long",
  });

  const fullDate = new Date(article.date).toLocaleDateString("ar-EG", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  let newArticle = posts.filter((post) => post.id !== article.id);
  let details = true;
  let num = Math.floor(Math.random() * (newArticle.length - 2));

  return (
    <>
      <article className="bg-[#0a0a0a] min-h-screen">
        <div className="min-h-[500px] h-[60vh] overflow-hidden relative">
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a]/30 to-transparent"></div>
          <div className="absolute mt-8 mx-8">
            <div className="flex items-center bg-black/30 px-4 py-2 rounded-full text-sm border border-white/10 backdrop-blur-md gap-2">
              <Link
                className="text-white/70 hover:text-white transition-colors"
                to="/"
              >
                <i className="fa-solid fa-house"></i>
              </Link>
              <i className="fa-solid fa-angle-left text-white/30 text-xs"></i>
              <Link
                to="/blog"
                className="text-white/70 hover:text-white transition-colors"
              >
                المدونة
              </Link>
              <i className="fa-solid fa-angle-left text-white/30 text-xs"></i>
              <span className="text-orange-400 font-medium truncate max-w-[200px]">
                {article.category}
              </span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap gap-3 mb-6 items-center">
                <Link
                  className="cursor-pointer px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-colors"
                  to={`/blog?category=${encodeURIComponent(article.category)}`}
                >
                  {" "}
                  {article.category}{" "}
                </Link>
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <span className="flex items-center gap-2">
                    <i className="fa-regular fa-calendar"></i>
                    {fullDate.split("/").join("-")}
                  </span>
                  <span className="flex items-center gap-2">
                    <i className="fa-regular fa-clock"></i>
                    {article.readTime}
                  </span>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl! font-bold text-white mb-6 leading-tight max-w-4xl">
                {article.title}
              </h1>
              <div className="inline-flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="w-14 h-14 rounded-full ring-2 ring-orange-500/50">
                  <img
                    className="rounded-full object-cover w-full h-full"
                    src={article.author.avatar}
                    alt={article.author.name}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-white">{article.author.name}</p>
                  <p className="text-sm text-white/60">{article.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            <div className="order-2 lg:order-1">
              <p className="text-lg text-neutral-200 leading-relaxed italic p-6 bg-linear-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
                "{article.excerpt}"
              </p>
              <div>
                <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                  {article.intro}
                </p>
                {article.sections.map((section) => {
                  return (
                    <>
                      <h2
                        id={`section-${section.id}`}
                        key={section.id}
                        className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                      >
                        <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                          <i className="fa-solid fa-camera text-orange-500"></i>
                        </span>
                        {section.title}
                      </h2>
                      <p
                        key={section.id}
                        className="text-neutral-300 leading-relaxed mb-6 text-lg"
                      >
                        {section.content}
                      </p>
                    </>
                  );
                })}
              </div>
              <div className="mt-14 p-6 rounded-2xl border border-[#262626] bg-[#111111]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                    <i className="fa-solid fa-tags text-orange-500"></i>
                  </span>
                  <h3 className="font-bold text-white">الوسوم</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer"
                    >{`#${tag}`}</span>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-6 rounded-2xl border border-[#262626] bg-[#111111]">
                <div className="flex items-center justify-between gap-4 ">
                  <div className="gap-3 flex items-center">
                    <span className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <i className="fa-solid fa-share-nodes text-orange-500"></i>
                    </span>
                    <h3 className="font-bold text-white">شارك المقال</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      to={"https://x.com/"}
                      className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white hover:border-transparent transition-all duration-300"
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </Link>
                    <Link
                      to={"https://www.linkedin.com/"}
                      className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white hover:border-transparent transition-all duration-300"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link
                      to={"https://web.whatsapp.com/"}
                      className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white hover:border-transparent transition-all duration-300"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                    </Link>
                    <Link
                      to={"https://app.link.com/"}
                      className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white hover:border-transparent transition-all duration-300"
                    >
                      <i className="fa-solid fa-link"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-8 bg-linear-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-24 h-24 rounded-2xl ring-4 ring-orange-500/20">
                    <img
                      className="object-cover w-full h-full rounded-2xl"
                      src={article.author.avatar}
                      alt={article.author.name}
                    />
                  </div>
                  <div className="text-center sm:text-right! flex-1">
                    <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                      كاتب المقال
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {article.author.name}
                    </h3>
                    <h4 className="text-neutral-500 text-sm mb-3">
                      {article.author.role}
                    </h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                      الفوتوغرافي.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <i className="fa-solid fa-list text-orange-500"></i>
                    </span>
                    <h3 className="text-white font-bold">محتويات المقال</h3>
                  </div>
                  <div>
                    {article.sections.map((sectionTitle) => {
                      return (
                        <HashLink
                          smooth
                          to={`#section-${sectionTitle.id}`}
                          key={sectionTitle.id}
                          className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                        >
                          <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                            {sectionTitle.id}
                          </span>
                          <span className="text-sm">{sectionTitle.title}</span>
                        </HashLink>
                      );
                    })}
                  </div>
                </div>
                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                      <i className="fa-regular fa-clock text-orange-500 text-xl mb-2"></i>
                      <p className="text-white font-bold">{article.readTime}</p>
                      <p className="text-neutral-500 text-xs">وقت القراءة</p>
                    </div>
                    <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                      <i className="fa-regular fa-calendar text-orange-500 text-xl mb-2"></i>
                      <p className="text-white font-bold">{date}</p>
                      <p className="text-neutral-500 text-xs">وقت القراءة</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-linear-to-br text-center from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">
                  <span className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-envelope text-orange-500 text-xl"></i>
                  </span>
                  <h3 className="font-bold text-white mb-2">لا تفوّت جديدنا</h3>
                  <p className="text-neutral-400 text-sm mb-4">
                    اشترك للحصول على أحدث المقالات
                  </p>
                  <Link
                    to={"/blog"}
                    className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center"
                  >
                    تصفح المزيد
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-[#262626]">
            <div className="flex justify-between items-center mb-10">
              <div className="flex gap-4 items-center">
                <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
                  <i className="fa-solid fa-images text-orange-500 text-xl"></i>
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    مقالات قد تعجبك
                  </h2>
                  <p className="text-neutral-500 text-sm">
                    استكشف المزيد من المحتوى المميز
                  </p>
                </div>
              </div>
              <Link
                to={"/blog"}
                className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors group"
              >
                عرض الكل
                <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newArticle.slice(num, num + 3).map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  details={details}
                />
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
