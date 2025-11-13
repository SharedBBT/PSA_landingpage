import { motion } from "framer-motion";

export default function LearningCycleSection() {
  const weeklySchedule = [
    {
      week: "Module 1",
      title: "問題の全体像把握と問題定義",
      subtitle: "What & Where",
      desc: "曖昧な問題を“構造化”し、正しく定義する力を養います。課題の本質を見抜く最初の一歩。",
    },
    {
      week: "Module 2",
      title: "原因分析と本質的課題特定",
      subtitle: "Why & So what?",
      desc: "事象の裏にある根本要因を分析。再発しないための“本質的思考”を習得します。",
    },
    {
      week: "Module 3",
      title: "解決策立案と実行",
      subtitle: "How & Why not yet?",
      desc: "創造的かつ現実的な解決策を立て、行動計画に落とし込みます。AIを活用して仮説を高速検証。",
    },
  ];

  const features = [
    {
      icon: "ri-task-line",
      title: "リアルな仕事を教材化",
      description:
        "あなた自身の業務課題をテーマに進めるから、学びが“そのまま成果”につながる。学ぶ時間が、そのままキャリアへの投資に変わります。",
    },
    {
      icon: "ri-repeat-line",
      title: "Simulation × 実践の二重サイクル",
      description:
        "AIシミュレーションで思考を鍛え、現場で試し、振り返る。思考→行動→改善のスパイラルを3週間で体得します。",
    },
    {
      icon: "ri-robot-line",
      title: "AIを伴走者に",
      description:
        "ChatGPTなどの生成AIを“思考の壁打ち相手”として活用。自分のアイデアを即座に検証できるため、学びが加速します。",
    },
  ];

  return (
    <section
      id="schedule"
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10 opacity-15 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background-learning.jpg')" }}
      ></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            学びを習慣化し、思考をOS化する
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            AI × PSA Bootcamp では、週単位のテーマと日々の実践を組み合わせた
            <span className="font-semibold text-blue-700">
              「学習サイクル設計」
            </span>
            を採用。一時的な学びではなく、脳の思考プロセスそのものを書き換えます。
          </motion.p>
        </div>

        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-2xl font-bold text-center text-gray-900 mb-10"
          >
            3週間で定着する “思考の習慣”
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeklySchedule.map((schedule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border-t-4 border-blue-500 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-blue-100">
                  <span className="font-bold text-lg text-blue-600">{index + 1}</span>
                </div>
                <h4 className="font-bold mb-1 text-blue-700">{schedule.week}</h4>
                <p className="font-semibold text-gray-900 text-sm mb-1">{schedule.title}</p>
                <p className="text-xs font-medium text-blue-700 mb-2">{schedule.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{schedule.desc}</p>

                <div className="rounded-xl overflow-hidden shadow-sm">
                  <img
                    src={`/images/week-${index + 1}.jpg`}
                    alt={`${schedule.title} イメージ`}
                    className="object-cover w-full h-32 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center mt-10"
          >
            <div className="inline-block max-w-4xl rounded-3xl px-12 py-10 bg-gradient-to-br from-blue-700 to-indigo-900 text-blue-100 border border-blue-300/40 shadow-[0_8px_40px_rgba(30,64,175,0.3)]">
              <p className="text-sm leading-relaxed">
                <strong className="text-white">1日30分 </strong>
                忙しいビジネスパーソンでも無理なく続けられるよう、
                “短時間 × 高密度 × 継続”の3要素で構成されています。
                各週の振り返りで確実に定着を図ります。
              </p>
            </div>
          </motion.div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center text-gray-900 mb-12"
          >
            現場で成果を出すための3つの仕組み
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl border-t-4 border-blue-500 text-center transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <i className={`${feature.icon} text-3xl text-blue-600`}></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-block max-w-4xl rounded-3xl px-12 py-12 bg-gradient-to-br from-blue-700 to-indigo-900 border border-blue-300/40 shadow-[0_8px_40px_rgba(30,64,175,0.3)] hover:shadow-[0_10px_50px_rgba(30,64,175,0.45)] hover:-translate-y-1 transition-all duration-500">
            <div className="flex items-center justify-center mb-4">
              <i className="ri-lightbulb-flash-line text-4xl mr-3 text-yellow-300 drop-shadow-lg"></i>
              <h3 className="text-2xl font-bold text-white">だから、成果が“続く”</h3>
            </div>
            <p className="text-blue-100 text-base leading-relaxed mb-3">
              学びが一過性で終わらず、現場で再現できる。
              それが「AI × PSA Bootcamp」が提供する最大の価値です。
            </p>
            <p className="text-white text-xl font-semibold">
              思考の習慣が変われば、キャリアの未来が変わる。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
