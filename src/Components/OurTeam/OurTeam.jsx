import authorsData from "../../data/posts.json";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function OurTeam() {
  const [authors, setAuthors] = useState(authorsData.posts)
  return (
    <>
      <section className="py-20 bg-[#0a0a0a] relative border-y border-[#262626]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4 top-badge">
              <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-[#f97316]">فريقنا</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              تعرف على كتابنا
            </h2>
            <p className="section-subtitle max-w-[672px] mx-auto">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author) => {
              return (
                <div key={author.id} className="group bg-[#161616] rounded-2xl flex flex-col justify-center items-center p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all duration-300">
                  <div className="relative mb-4">
                    <img
                      src={author.author.avatar}
                      alt={author.author.name}
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
                      <i className="fa-solid fa-check"></i>
                    </div>
                  </div>
                  <h3 className="font-bold text-white text-lg">
                    {author.author.name}
                  </h3>
                  <p className="text-orange-500 text-sm font-medium mb-4">
                    {author.author.role}
                  </p>
                  <div className="flex justify-center gap-3">
                    <Link
                      to="#"
                      className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors"
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </Link>
                    <Link
                      to="#"
                      className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white hover:text-white transition-colors"
                    >
                      <i className="fa-brands fa-github"></i>
                    </Link>
                    <Link
                      to="#"
                      className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <i className="fa-brands fa-square-linkedin"></i>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
