import { Link } from "react-router-dom";
import posts from "../../data/posts.json";
import ArticleCardList from "../ArticleCardList/ArticleCardList";
export default function UniqueBlog() {
  const uniquePost = posts.posts;
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
                <span className="text-sm font-medium text-[#f97316]">مميز</span>
              </div>
              <h2 className="section-title text-white">مقالات مختارة</h2>
              <p className="section-subtitle max-w-lg">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>
            <div>
              <Link
                to="/blog"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                عرض الكل
                <i className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180 fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {uniquePost.slice(0, 3).map((post) => {
              return (
                <ArticleCardList key={post.id} post={post}/>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
