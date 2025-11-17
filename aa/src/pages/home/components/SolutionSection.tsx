import { User, Lightbulb, Bot } from "lucide-react";

export default function CombinedFeaturesSection() {
  const features = [
    {
      number: "1",
      icon: <Bot className="w-6 h-6 text-blue-600" />,
      title: "AIを「相棒」とする思考加速プロセス",
      points: [
        "AIを壁打ち相手に設定。",
        "思考スピードが何倍も深く、速くなる。",
        "多角的な視点と高速検証が可能。",
        "問題解決の再現性を獲得。"
      ]
    },
    {
      number: "2",
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
      title: "実戦比率3:7による知識の資産化",
      points: [
        "実戦比率、インプット3：アウトプット7。",
        "「知っている」を**「使いこなせる資産」**に変貌。",
        "理論は核だけ、即座に業務で実行。",
        "実践者となる強制力を持つ。"
      ]
    },
    {
      number: "3",
      icon: <User className="w-6 h-6 text-blue-600" />,
      title: "教材はあなたの「リアルな実務課題」",
      points: [
        "原則として、架空の事例研究は行わない。",
        "あなたの実務課題をそのまま教材に採用。",
        "「売上低迷」の解決をゴールに設定。",
        "学習と成果直結を最優先に設計。"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            選ばれる3つの理由<br />
            <span className="text-blue-600">あなたの思考と行動を確実に変える独自のメソッド</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start mb-12">
          {/* 左：画像エリア (2カラム分) */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <img
                src="https://github.com/SharedBBT/psa-assets/blob/main/shutterstock_369899225.jpg?raw=true"
                alt="AI協働による問題解決"
                className="w-full rounded-2xl shadow-2xl object-cover border border-blue-100"
              />

              {/* 画像下の補足テキスト */}
              <div className="mt-6 p-5 bg-white rounded-xl shadow-md border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <i className="ri-lightbulb-flash-line text-yellow-500 mr-2 text-xl"></i>
                  AIと人間の協働
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  一人で考えるよりも、AIと対話しながら思考を深める。それが現代の問題解決スタイルです。
                </p>

                {/* 新しい挿入画像 */}
                <div className="mt-6 w-full h-auto rounded-2xl overflow-hidden shadow-md border border-blue-100">
                  <img
                    src="https://github.com/SharedBBT/psa-assets/blob/main/iStock-998338578.jpg?raw=true"
                    alt="挿入画像"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 右：3つの理由エリア (3カラム分) */}
          <div className="lg:col-span-3 space-y-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="rounded-xl p-5 bg-white border border-gray-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300"
              >
                {/* ヘッダー */}
                <div className="flex items-start mb-3">
                  <div className="w-11 h-11 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 shadow-sm">
                    {f.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <div className="w-6 h-6 border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs mr-2">
                        {f.number}
                      </div>
                      <h4 className="text-base font-bold text-gray-900">{f.title}</h4>
                    </div>
                  </div>
                </div>

                {/* ポイントリスト */}
                <ul className="space-y-1.5 mb-3 text-gray-700 text-sm list-disc list-inside">
                  {f.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
