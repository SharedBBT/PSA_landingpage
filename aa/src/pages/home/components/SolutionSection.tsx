import { motion } from "framer-motion";
import { User, Lightbulb, Bot } from "lucide-react";

export default function SolutionSection() {
  const features = [
    {
      icon: <User className="w-5 h-5 text-blue-600" />,
      title: "あなたは「受講者」ではなく「実践者」",
      description: (
        <>
          理論は「核」だけを学び、即アウトプットへ<br />
          インプット3割：
          <strong>アウトプット7割</strong>の「実戦比率」で、「知っている」を「使いこなせる」に変える
        </>
      ),
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-blue-600" />,
      title: "あなた自身の「リアルな課題」が教材",
      description:
        "架空の事例研究はしない。今あなたが直面する「売上低迷」や「組織の軋轢」こそが最高の教材。だから、学ぶと成果を出すが100%直結する",
    },
    {
      icon: <Bot className="w-5 h-5 text-blue-600" />,
      title: "AIは「ツール」ではなく「相棒」である",
      description: (
        <>
          一人では見落とす視点。仮説の高速検証。
          <strong>AIを「壁打ち相手」に、あなたの“問題解決思考”を何倍も深く、速くする</strong>
        </>
      ),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左：图片动画 */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="https://github.com/SharedBBT/psa-assets/blob/main/shutterstock_369899225.jpg?raw=true"
              alt="AI協働による問題解決"
              className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover border border-blue-100"
            />
          </motion.div>

          {/* 右：文本区块 */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              これは「研修」ではない<br />
              <span className="text-blue-600">「思考のジム」である</span><br />
            </h2>

            {/* 特徴リスト */}
            <div className="space-y-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {f.title}
                    </h3>
                    <p className="text-gray-600">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 强调语 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-10 p-6 bg-blue-100/60 rounded-xl border border-blue-200 shadow-inner"
            >
              <h4 className="font-semibold text-blue-900 mb-2">
                「あなたが手にする「真の価値」
              </h4>
              <p className="text-blue-800 leading-relaxed">
                「誰かの正解」ではなく、「自ら導き出す最適解」を創る力<br />
                AIを使いこなし、自分自身の“生きた課題”を解決に導く<br />
                それこそが、ここで得られる唯一無二の資産です
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
