import { Link } from "react-router-dom";
export default function ArticleCard({ article, details }) {
  // const article = article;
    const fullDate =new Date(article.date).toLocaleDateString("ar-EG", {
    day:"2-digit",
    month:"long",
    year:"numeric"
  })

  return (
    <>
      <article key={article.id} className={`${details?'relative bg-[#111111] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500':'card'} group overflow-hidden`}>
        <Link className="block" to={`/blog/${article.slug}`}>
          <div className={`${details? 'h-48':'h-52'} relative overflow-hidden`}>
            <img
              className={`${details? '':' ease-out'} w-full h-full object-cover group-hover:scale-110 transition-transform duration-700`}
              src={article.image}
              alt={article.title}
            />
            <div
              className={`${details ? "bg-linear-to-t from-[#111111] to-transparent" : "bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"} absolute inset-0 `}
            ></div>
            <div className="absolute top-4 right-4">
              <span
                className={`${details ? "bg-orange-500 text-white font-bold " : "bg-[#0a0a0a]/80 backdrop-blur-sm text-white font-semibold border border-[#333333]"} text-xs px-3 py-1 rounded-full`}
              >
                {article.category}
              </span>
            </div>
          </div>
          {details ? (
            <div className="p-5">
              <h2 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                {article.title}
              </h2>
              <div className="flex items-center justify-between text-sm text-neutral-500">
                <div className="flex items-center gap-2">
                  <img
                    src={article.author.avatar}
                    className="w-6 h-6 rounded-full"
                    alt={article.author.name}
                  />
                  <p>{article.author.name}</p>
                </div>
                <p>{article.readTime}</p>
              </div>
            </div>
          ) : (
            <div className="p-6">
              <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                <span className="flex items-center gap-1">
                  <i className="fa-regular fa-clock"></i>
                  {article.readTime}
                </span>
                <div className="w-1 h-1 bg-neutral-600 rounded-full"></div>
                <span>{fullDate}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                {article.title}
              </h3>
              <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                <div className="flex items-center gap-3">
                  <img
                    src={article.author.avatar}
                    className="w-9 h-9 ring-2 ring-[#262626] object-cover rounded-full border"
                    alt={article.author.name}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">
                      {article.author.name}
                    </span>
                    <span className="text-xs text-neutral-500">
                      {article.author.role}
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                  <i className="fa-solid fa-angle-right text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"></i>
                </div>
              </div>
            </div>
          )}
        </Link>
      </article>
    </>
  );
}
