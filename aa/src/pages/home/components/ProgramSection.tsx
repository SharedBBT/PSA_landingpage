export default function ProgramSection() {
  const stages = [
    {
      number: "1",
      type: "問題発生型",
      title: "現場課題解決編",
      description: "最も基本の型。チームや部レベルで発生する課題を効果的に解決する力。",
      examples: [
        "売上の急激な低下への対応",
        "主要顧客からのクレーム",
        "品質不良による出荷停止",
        "人材の退職増",
        "サプライチェーン途絶",
      ],
      color: "#2563eb", // blue-600
      accentBg: "#dbeafe", // blue-100
      level: "守り",
    },
    {
      number: "2",
      type: "課題発見型",
      title: "事業戦略構築編",
      description: "3C分析等を踏まえた企業・事業部単位での戦略的課題解決力を習得。",
      examples: [
        "既存事業の売上微減傾向",
        "顧客層の世代交代への備え",
        "海外市場での価格競争激化予兆",
        "新しいテクノロジーの出現",
        "中期経営計画策定",
      ],
      color: "#4f46e5", // indigo-600
      accentBg: "#e0e7ff", // indigo-100
      level: "攻守",
    },
    {
      number: "3",
      type: "変革推進型",
      title: "変革リーダーシップ編",
      description: "人と組織の意識や行動を変革し、持続的成長を実現。",
      examples: [
        "部門ビジョン策定と実行計画",
        "部署横断の業務プロセス改革",
        "グローバルプロジェクトでの文化統合",
        "働き方改革の推進",
        "社内対立解消を伴う全社改革",
      ],
      color: "#9333ea", // purple-600
      accentBg: "#f3e8ff", // purple-100
      level: "攻め",
    },
  ];

  return (
    <section id="program" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            問題解決の3つの型
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            発生型・発見型・変革型の3アプローチを体系的に習得。<br />
            3ヶ月間で1ヶ月ごとに1つの事例を深く実践します。
          </p>
        </div>

        {/* Stages */}
        <div className="grid lg:grid-cols-3 gap-6">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Level Badge */}
              <div
                className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  backgroundColor: stage.accentBg,
                  color: stage.color,
                }}
              >
                {stage.level}
              </div>

              {/* Number Circle */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-2xl mb-4 text-white"
                style={{ backgroundColor: stage.color }}
              >
                {stage.number}
              </div>

              {/* Type */}
              <div
                className="text-sm font-semibold mb-1"
                style={{ color: stage.color }}
              >
                {stage.type}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {stage.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                {stage.description}
              </p>

              {/* Examples */}
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-2">
                  典型事例
                </h4>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  {stage.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start">
                      <i
                        className="ri-arrow-right-s-line mr-1.5 mt-0.5 flex-shrink-0"
                        style={{ color: stage.color }}
                      ></i>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl max-w-4xl mx-auto shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              プロブレムソルビング・アプローチ（PSA）
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              戦略コンサルティングファームで磨き上げられた思考技術。
              複雑なカオスの中から「解くべき真の問い（Key Issue）」を特定し、
              ファクトとロジックで本質を貫く。
            </p>
            <div className="bg-gradient-to-r from-blue-600 to-red-500 text-white px-6 py-3 rounded-full inline-block font-semibold text-sm shadow-md">
              マーケティング・営業・経営企画・開発・人事...  
              あらゆる部門を貫く「脳のキラーアプリ」
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
