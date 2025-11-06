import { motion } from "framer-motion";
import { User, Lightbulb, Bot } from "lucide-react";

export default function SolutionSection() {
  const features = [
    {
      icon: <User className="w-5 h-5 text-blue-600" />,
      title: "あなたは「受講者」ではなく「実践者」",
      description:
        "インプットするのではなく、アウトプットを通じて「できる」スキルを掴み取る",
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-blue-600" />,
      title: "あなた自身のリアルな課題が教材",
      description:
        "架空のケーススタディではなく、今まさに直面している実際の課題で学習",
    },
    {
      icon: <Bot className="w-5 h-5 text-blue-600" />,
      title: "AIという「最強の思考パートナー」",
      description: "1日30分、継続的に課題解決の全プロセスを実践",
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
              src="https://www.knowledgewing.com/kcc/share/images/single16_02.jpg"
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
              私たちが提供するのは<br />
              <span className="text-blue-600">思考のトレーニング</span><br />
              Bootcamp
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
                あなたが手に入れるもの
              </h4>
              <p className="text-blue-800 leading-relaxed">
                「自らの問題で、AIを活用し、自ら解を導き出す力」<br />
                それこそが、あなたがこのコースで得られる価値です。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
