import Rating from '../Rating/Rating'
import OurTeam from '../OurTeam/OurTeam'
import GetInTouch from '../GetInTouch/GetInTouch';
export default function About() {
  return (
    <>
      <section className="relative py-24 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px] opacity-30"></div>
        <div className='absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] opacity-30'></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="top-badge mb-6">
            <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full animate-pulse"></span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-sm font-medium text-[#f97316]">من نحن</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            مهمتنا هي{" "}
            <span className="inline-block bg-clip-text bg-linear-[135deg,#f97316,#fbbf24] text-transparent">
              الإعلام والإلهام
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
            ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
            المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-6 rounded-3xl flex flex-col items-center backdrop-blur-[20px] bg-[#161616cc] border border-[#262626]">
              <i className="fa-solid fa-users text-2xl text-orange-500 mb-1"></i>
              <span className=" md:text-3xl font-bold bg-clip-text text-transparent bg-linear-[135deg,#f97316,#fbbf24]">
                +2مليون
              </span>
              <p className="text-sm text-neutral-500">قارئ شهرياً</p>
            </div>
            <div className="p-6 rounded-3xl flex flex-col items-center backdrop-blur-[20px] bg-[#161616cc] border border-[#262626]">
              <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>
              <span className=" md:text-3xl font-bold bg-clip-text text-transparent bg-linear-[135deg,#f97316,#fbbf24]">
                +500
              </span>
              <p className="text-sm text-neutral-500">مقالة منشورة</p>
            </div>
            <div className="p-6 rounded-3xl flex flex-col items-center backdrop-blur-[20px] bg-[#161616cc] border border-[#262626]">
              <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1"></i>
              <span className="md:text-3xl font-bold bg-clip-text text-transparent bg-linear-[135deg,#f97316,#fbbf24]">
                +50
              </span>
              <p className="text-sm text-neutral-500">كاتب خبير</p>
            </div>
            <div className="p-6 rounded-3xl flex flex-col items-center backdrop-blur-[20px] bg-[#161616cc] border border-[#262626]">
              <i className="fa-solid fa-book-open text-2xl text-orange-500 mb-1"></i>
              <span className=" md:text-3xl font-bold bg-clip-text text-transparent bg-linear-[135deg,#f97316,#fbbf24]">
                +15
              </span>
              <p className="text-sm text-neutral-500">تصنيف</p>
            </div>
          </div>
        </div>
      </section>
      <Rating/>
      <OurTeam/>
      <GetInTouch/>
    </>
  );
}
