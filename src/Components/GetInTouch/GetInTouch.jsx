import { Link } from "react-router-dom";
import emailInfo from "../../data/siteInfo.json";
export default function GetInTouch() {
  const email = emailInfo.siteInfo.email;
  return (
    <>
      <section className="py-20 bg-linear-to-br from-orange-600 via-orange-500 to-yellow-500 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            لديك أسئلة؟ دعنا نتحدث!
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-[672px] mx-auto">
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
            أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5"
            >
              <i className="fa-regular fa-envelope"></i>
              تواصل معنا
            </Link>
            <Link
              to={"/blog"}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
            >تصفح المقالات</Link>
          </div>
        </div>
      </section>
    </>
  );
}
