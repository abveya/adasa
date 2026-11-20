import { Link } from "react-router-dom";
import categories from "../../data/categories.json";
export default function Categories() {
  const categoriesPost = categories.categories;
  return (
    <>
      <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-4 top-badge">
              <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full animate-pulse"></span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-medium text-[#f97316]">
                التصنيفات
              </span>
            </div>
            <h2 className="section-title text-white">استكشف حسب الموضوع</h2>
            <p className="section-subtitle max-w-lg mx-auto">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categoriesPost.map((categoriesPosts, index) => {
              return (
                <Link key={index} to={`/blog?category=${encodeURIComponent(categoriesPosts.name)}`} className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                      <i className={`fa-solid ${categoriesPosts.icon} text-xl text-orange-500 group-hover:text-white transition-colors duration-300`}></i>
                    </div>
                    <h3 className="font-bold text-start text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                      {categoriesPosts.name}
                    </h3>
                    <p className="text-sm text-start text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                      {categoriesPosts.count} مقالة
                    </p>
                    <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                      <i className="fa-solid fa-angle-right text-white rotate-180"></i>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
