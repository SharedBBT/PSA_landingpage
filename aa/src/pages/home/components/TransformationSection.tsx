import { motion } from "framer-motion";

export default function TransformationSection() {
  return (
    <section
      id="benefits"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            あなたが手に入れる変化
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            AIx 問題解決 Bootcamp は、単なるスキル研修ではありません。
            これは、あなたの「考え方」と「行動パターン」を根本から変える
            <span className="font-semibold text-blue-700">トランスフォーメーションプログラム</span>
            です。
          </motion.p>
        </div>

        {/* Before / After */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-20">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-red-600 mb-5 flex items-center">
              <i className="ri-emotion-sad-line mr-2 text-3xl"></i>
              Before（受講前）：あなたの「今」の課題
            </h3>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              {[
                "AIがうまく問題解決に活かせない。",
                "解決の道筋が立てられず議論が迷走。",
                "ロジック不足で関係者を説得できない",
                "努力が成果に結びつかず、焦る",
              ].map((text, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <i className="ri-close-circle-line text-red-500 mt-0.5 flex-shrink-0"></i>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-5 flex items-center">
              <i className="ri-emotion-happy-line mr-2 text-3xl"></i>
              After （受講後）：修了後のあなた
            </h3>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              {[
                "最適な解決策を自力で導き出せる。",
                "AIを「参謀」にして問題解決できる。",
                "ロジックで関係者を確実に動かせる。",
                "問題発見・解決を通じ真のリーダーに。",
              ].map((text, i) => (
                <li key={i} className="flex items-start space-x-2">
  <i className="ri-checkbox-circle-line text-blue-500 mt-0.5 flex-shrink-0"></i>
  <span>{text}</span>
</li>

              ))}
            </ul>
          </motion.div>
        </div>

        {/* Result */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative"
        >
          <div
            className="
              relative overflow-hidden
              inline-block max-w-4xl
              rounded-3xl px-10 sm:px-16 py-14
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

              <p className="text-lg mb-3 text-blue-100/90 leading-relaxed">
                あなたは「知識を持つ人」ではなく、
                <br />
                組織を動かす「考えるリーダー」へと進化します。
              </p>

              <p className="text-2xl font-bold leading-relaxed mb-5 text-white drop-shadow-sm">
                現場で即戦力として輝く
                <span className="text-yellow-300">問題解決のプロフェッショナル</span>へ。
              </p>

           <p className="text-blue-100/80 text-sm leading-relaxed max-w-2xl mx-auto">
  あなたが考え方を変えることで、チーム・顧客・会社に変革が起きます。
  <br />
  単なるスキル習得ではなく、考え方を変え
<span className="text-yellow-300 font-semibold">「成果を出す思考力」</span>を手に入れます。

</p>


              <div className="mt-8">
                <motion.a
                  href="#apply"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block bg-yellow-400 text-blue-900 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-yellow-300 transition"
                >
                  無料説明会に参加する →
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
