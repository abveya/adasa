import { useSearchParams } from "react-router-dom";
import categories from "../../data/categories.json";
import postData from "../../data/posts.json";
import { useState } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import ArticleCardList from "../ArticleCardList/ArticleCardList";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
export default function Blog() {
  const [categoriesTitle, setCategoriesTitle] = useState(categories.categories);
  const [posts, setPosts] = useState(postData.posts);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";
  const [list, setList] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPost = posts.filter((post) => {
    const categoryArticle = category === "all" || post.category === category;
    const matchedSearch =
      post.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      post.excerpt.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
    return matchedSearch && categoryArticle;
  });

  const [currentPage, setCurrentPage] = useState(1);

  const [numOfCard, setnumOfCard] = useState(6);

  const lastIndex = currentPage * numOfCard;
  const firstIndex = lastIndex - numOfCard;

  const postsSlice = filteredPost.slice(firstIndex, lastIndex);
  const totalPage = Math.ceil(filteredPost.length / numOfCard);
  console.log(totalPage, currentPage);
  let arr = [];
  for (let i = 0; i < totalPage; i++) {
    arr.push(i + 1);
  }
  console.log(arr);
  return (
    <>
      <ScrollToTop currentPage={currentPage} />
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl "></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="top-badge mb-6">
              <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full animate-pulse"></span>
              <i className="fa-regular fa-newspaper text-[#f97316]"></i>
              <span className="text-sm font-medium text-[#f97316]">
                مدونتنا
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl! font-bold text-white mb-6">
              استكشف{" "}
              <span className="inline-block bg-clip-text bg-linear-[135deg,#f97316,#fbbf24] text-transparent">
                مقالاتنا
              </span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-[672px] mx-auto">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </div>
      </section>

      <section className=" bg-[#0a0a0a]">
        <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:w-80!">
                <input
                  placeholder="ابحث في المقالات..."
                  className="bg-[#161616] border border-[#262626] transition-all duration-300 ease-in-out outline-0 rounded-base text-white w-full px-5 py-3 pr-12"
                  type="text"
                  value={searchTerm}
                  onChange={({ target }) => setSearchTerm(target.value)}
                />
                <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"></i>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  className={`cursor-pointer px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    category === "all"
                      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                  }`}
                  onClick={() => setSearchParams({})}
                >
                  جميع المقالات
                </button>
                {categoriesTitle.map((categories, index) => {
                  return (
                    <button
                      key={index}
                      className={`cursor-pointer px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        category === categories.name
                          ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                          : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                      }`}
                      onClick={() => {
                        return (
                          setSearchParams({ category: categories.name }),
                          setCurrentPage(1)
                        );
                      }}
                    >
                      {categories.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-400">
              {category === "all" ? (
                `عرض ${filteredPost.length} مقالات`
              ) : (
                <span>
                  عرض {filteredPost.length} مقالات{" "}
                  <span className="text-orange-500">{category}</span>
                </span>
              )}{" "}
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                <button
                  onClick={() => setList(false)}
                  className={` cursor-pointer p-2 rounded-lg transition-all duration-300
                    ${
                      list
                        ? "text-neutral-400 hover:text-white"
                        : "bg-orange-500 text-white"
                    }`}
                  title="عرض شبكي"
                >
                  <i className="fa-solid fa-border-all"></i>
                </button>
                <button
                  onClick={() => setList(true)}
                  className={`cursor-pointer p-2 rounded-lg transition-all duration-300
                    ${
                      list
                        ? "bg-orange-500 text-white"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  title="عرض قائمه"
                >
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
              {category != "all" || searchTerm != "" ? (
                <button
                  onClick={() => {
                    setSearchParams({});
                    setSearchTerm("");
                  }}
                  className=" cursor-pointer text-sm text-neutral-500 hover:text-orange-500 flex items-center gap-1 transition-colors"
                >
                  <i className="fa-solid fa-xmark"></i>
                  <span>مسح الفلاتر</span>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          {list ? (
            <div className="flex flex-col gap-6">
              {postsSlice.map((post) => {
                return (
                  <ArticleCardList key={post.id} list={list} post={post} />
                );
              })}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postsSlice.map((article) => {
                return <ArticleCard key={article.id} article={article} />;
              })}
            </div>
          )}

          {totalPage == 0 ? (
            ""
          ) : (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                disabled={currentPage === 1}
                className={` ${currentPage === 1 ? "text-neutral-600 cursor-not-allowed" : "cursor-pointer text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"} sm:p-3! p-1.5 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626]`}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <i class="fa-solid fa-angle-right"></i>
              </button>
              {arr.map((array, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(array)}
                    className={`${currentPage === array ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"} cursor-pointer sm:min-w-[44px] sm:h-11 min-w-[30px] h-[30px] rounded-xl text-sm font-medium transition-all duration-300 `}
                  >
                    {array}
                  </button>
                );
              })}
              <button
                disabled={totalPage === currentPage}
                className={` ${totalPage === currentPage ? "text-neutral-600 cursor-not-allowed" : "cursor-pointer text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"} sm:p-3! p-1.5 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626]`}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <i class="fa-solid fa-angle-left"></i>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
