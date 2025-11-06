// src/pages/home/components/ProblemSection.tsx
import { motion } from "framer-motion";
import { BookOpen, Clock, Users } from "lucide-react";

export default function ProblemSection() {
  // 問題リスト（アイコンは lucide-react のシンプル線アイコンに変更）
  const problems = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-700" />,
      title: "理論ばかりで実践できない",
      description: "フレームワークを覚えても、実際の現場で使えない。"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-700" />,
      title: "学んでも現場で使えない",
      description: "研修は良かったが、翌日には元通りになってしまう。"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-700" />,
      title: "一人で考える限界がある",
      description: "複雑な問題に直面すると、思考が行き詰まってしまう。"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* セクション見出し */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6 leading-snug"
        >
          なぜ多くの問題解決研修は
          <br />
          <span className="bg-gradient-to-r from-blue-700 to-indigo-500 bg-clip-text text-transparent">
            「現場で使えない」
          </span>
          のか？
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-16"
        >
          従来の研修が「フレームワークを教える」ことを中心としているため。
          ケーススタディで学んだ知識は、いざ自分の問題に直面したとき、
          すぐに応用できないことが多いのです。
        </motion.p>

        {/* 問題カード */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-blue-100 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 結論バナー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 inline-block bg-gradient-to-r from-blue-700 to-indigo-500 text-white px-8 py-4 rounded-full font-semibold shadow-md"
        >
          このBootcampは、そのアンチテーゼとして設計されました
        </motion.div>
      </div>
    </section>
  );
}
