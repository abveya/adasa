import { Link } from "react-router-dom";
import privacyData from "../../data/privacy.json";
import { useState } from "react";
export default function Privacy() {
  // const privacy = privacyData.privacyPolicyData;
  const [privacy, setPrivacy] = useState(privacyData.privacyPolicyData)
  return (
    <>
      <header className="relative py-20 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px] opacity-30"></div>
        <div className="relative text-center max-w-4xl mx-auto">
          <div className="mb-8 flex items-center justify-center gap-2">
            <Link
              to={"/"}
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              الرئيسية
            </Link>
            <i class="text-sm fa-solid fa-chevron-left text-neutral-600"></i>
            <span className="text-sm text-orange-500 font-medium">
              سياسة الخصوصية
            </span>
          </div>

          <div className="w-16 h-16 bg-orange-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/30 mb-6 inline-flex justify-center items-center text-2xl">
            <i className="text-orange-500 fa-solid fa-lock"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            سياسة الخصوصية
          </h1>
          <p className="text-lg text-neutral-400">آخر تحديث: 15 يناير 2026</p>
        </div>
      </header>

      <section className="bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex gap-4 items-start bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 mb-12">
            <div>
              <i class="fa-solid fa-shield-halved text-orange-500"></i>
            </div>
            <div>
              <h3 className="font-semibold text-orange-500 mb-1">
                خصوصيتك تهمنا
              </h3>
              <p className="text-orange-300/80 text-sm">
                نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            {privacy.map((privacySection) => {
              return (
                <div key={privacySection.id} className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                      {privacySection.id}
                    </span>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                      {privacySection.title}
                    </h2>
                  </div>
                  <div className="pr-11">
                    {privacySection.content.map((content, index) => {
                      return privacySection.content.length > 1 ? (
                        <div
                          key={index}
                          className="flex items-center gap-3 text-neutral-400 mb-3"
                        >
                          <i className="text-orange-500 fa-solid fa-circle-check"></i>
                          {content.includes(":") ? (
                            <p className="text-neutral-400 leading-relaxed">
                              <strong className="text-white">
                                {content.split(":")[0]}:
                              </strong>
                              {content.split(":").slice(1).join(":")}
                            </p>
                          ) : (
                            <p className="text-neutral-400 leading-relaxed">
                              {content}
                            </p>
                          )}
                        </div>
                      ) : (
                        <p
                          key={index}
                          className="text-neutral-400 leading-relaxed mb-4"
                        >
                          {content}
                        </p>
                      );
                    })}
                    {privacySection.email && (
                      <div className="flex items-center gap-2">
                        <i className="fa-regular fa-envelope text-orange-500"></i>
                        <Link
                          to={`mailto:${privacySection.email}`}
                          className="text-orange-500 hover:text-orange-400 transition-colors"
                        >
                          {privacySection.email}
                        </Link>
                      </div>
                    )}
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
