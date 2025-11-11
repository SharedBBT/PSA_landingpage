export default function TransformationSection() {
  return (
    <section
      id="benefits"
      className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            あなたが手に入れるもの
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            3ヶ月後、あなたは組織で最も頼られる{" "}
            <span className="font-semibold text-blue-600">
              「問題解決のプロフェッショナル」
            </span>
            へ
          </p>
        </div>

        {/* Before / After */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-16">
          {/* Before */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-red-600 mb-5 flex items-center">
              <i className="ri-emotion-sad-line mr-2 text-3xl"></i>
              Before（研修前）
            </h3>
            <ul className="space-y-3 text-gray-700">
              {[
                "問題に直面すると混乱する",
                "解決策が思い浮かばない",
                "一人で抱え込んでしまう",
              ].map((text, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <i className="ri-close-circle-line text-red-500 mt-0.5 flex-shrink-0"></i>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-blue-600 mb-5 flex items-center">
              <i className="ri-emotion-happy-line mr-2 text-3xl"></i>
              After（研修後）
            </h3>
            <ul className="space-y-3 text-gray-700">
              {[
                "どんな問題も冷静に分析できる",
                "効果的な解決策を素早く発見",
                "AIと協働して最適解を導き出す",
              ].map((text, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <i className="ri-check-circle-line text-blue-500 mt-0.5 flex-shrink-0"></i>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Result（深蓝玻璃质感 + 立体阴影） */}
{/* Result（高品质磨砂玻璃风） */}{/* Result（无玻璃质感版，高级深蓝风） */}
<div className="text-center relative">
  <div
    className="
      relative overflow-hidden
      inline-block max-w-4xl
      rounded-3xl px-12 py-12
      bg-gradient-to-br from-blue-700 to-blue-900
      border border-blue-300/40
      shadow-[0_8px_40px_rgba(30,64,175,0.3)]
      transition-all duration-500 hover:shadow-[0_10px_50px_rgba(30,64,175,0.45)]
      hover:-translate-y-1
    "
  >
    <div className="relative z-10">
      <div className="flex items-center justify-center mb-5">
        <i className="ri-trophy-line text-4xl mr-3 text-yellow-300 drop-shadow-lg"></i>
        <h3 className="text-2xl font-bold tracking-wide text-white drop-shadow-sm">
          結果として...
        </h3>
      </div>

      <p className="text-base mb-2 text-blue-100/90">
        あなたは単なる「問題解決の知識を持つ人」ではなく、
      </p>

      <p className="text-2xl font-bold leading-relaxed mb-4 text-white drop-shadow-sm">
        組織で最も頼られる{" "}
        <span className="text-yellow-300">「問題解決のプロフェッショナル」</span>
        へと変貌を遂げます。
      </p>

      <div className="mt-4 text-blue-100/90 text-sm leading-relaxed">
        <p>
          これが、マーケティング・営業・経営企画・開発・人事...
          あらゆる部門のトップが共通して使う
        </p>
        <p className="font-semibold text-white mt-1">
          「脳のキラーアプリ」— PSA の真の価値です。
        </p>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
