import { Link } from "react-router-dom";
import latest from "../../data/posts.json";
import ArticleCard from "../ArticleCard/ArticleCard";
import { useState } from "react";

export default function LatestArticles() {
  const [latestArticle, setLatestArticle] = useState(latest.posts)
  return (
    <>
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <div className="top-badge mb-4">
                <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full animate-pulse"></span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-sm font-medium text-[#f97316]">
                  الأحدث
                </span>
              </div>
              <h2 className="section-title text-white">أحدث المقالات</h2>
              <p className="section-subtitle max-w-lg">
                محتوى جديد طازج من المطبعة
              </p>
            </div>
            <div>
              <Link
                to="/blog"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                عرض جميع المقالات
                <i className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180 fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticle.slice(3, 6).map((article) => {
              return (
                <ArticleCard key={article.id} article ={article} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
