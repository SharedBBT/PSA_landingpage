// src/pages/home/components/ProblemSection.tsx
import { motion } from "framer-motion";
import { BookOpen, Clock, Users } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: <BookOpen className="w-12 h-9 text-blue-700" />,
      title: "フレームワーク中心で実践できない",
      description: "フレームワークを覚えても、実際の現場で使えない。"
    },
    {
      icon: <Clock className="w-8 h-9 text-blue-700" />,
      title: "学んでも忘れてしまう",
      description: "自分事でない学びなので、現場で使う前に忘却曲線、元通りに"
    },
    {
      icon: <Users className="w-8 h-9 text-blue-700" />,
      title: "自身と関係ないケース学習が多い",
      description: "「私が今直面している問題の解決」にすぐつながらない"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-blue-50">
      {/* 容器变宽 */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* セクション見出し */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6 leading-snug"
        >
          なぜ、あなたの問題解決力は
          <br />
          <span className="bg-gradient-to-r from-blue-700 to-indigo-500 bg-clip-text text-transparent">
            「現場で発揮されない」
          </span>
          のか？
        </motion.h2>

        {/* 段落部分 - 间距调整 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          「ロジカルシンキング研修も受けた。本も読んだ。なのに、なぜ…」
          <br />
          多くのリーダーが同じ壁にぶつかっています。
        </motion.p>

        {/* 問題カード - 调宽、减少间距 */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-blue-100 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow min-h-[260px]"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 whitespace-normal">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer - 完全に置き換え */}
        <div className="mt-12 text-center">
          <div
            className="
              relative inline-block max-w-4xl
              bg-gradient-to-br from-blue-700 to-blue-900
              text-white px-10 py-10
              rounded-3xl shadow-[0_8px_40px_rgba(30,64,175,0.3)]
              border border-blue-300/40
              hover:shadow-[0_10px_50px_rgba(30,64,175,0.45)]
              hover:-translate-y-1
              transition-all duration-500
            "
          >
            <h3 className="text-xl font-bold mb-3 text-white drop-shadow-sm">
              プロブレムソルビング・アプローチ（PSA）
            </h3>
            <p className="text-blue-100 text-sm mb-4 leading-relaxed">
              問題解決 - PSA（プロブレムソルビング・アプローチ）とは<br />
              AI時代においてテクノロジーには代替できない「本質」を見抜き、
              ファクトとロジックで自ら解を創り出す<br/>
              21世紀のビジネスパーソン必須の「思考OS」。
            
            </p>
            <div className="bg-white/10 text-yellow-300 px-6 py-3 rounded-full inline-block font-semibold text-sm shadow-md border border-blue-300/30">
              マーケティング・営業・経営企画・開発・人事...  
              あらゆる部門を貫く「脳のキラーアプリ」
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}