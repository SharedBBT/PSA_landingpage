
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
        "サプライチェーン途絶"
      ],
      color: "blue",
      level: "守り"
    },
    {
      number: "2", 
      type: "課題発見型",
      title: "事業戦略構築編",
      description: "3C分析等を踏まえた企業・事業部単位での戦略的課題解決力を習得",
      examples: [
        "既存事業の売上微減傾向",
        "顧客層の世代交代への備え",
        "海外市場での価格競争激化予兆",
        "新しいテクノロジーの出現",
        "中期経営計画策定"
      ],
      color: "indigo",
      level: "攻守"
    },
    {
      number: "3",
      type: "変革推進型", 
      title: "変革リーダーシップ編",
      description: "人と組織の意識や行動を変革し、持続的成長を実現",
      examples: [
        "部門ビジョン策定と実行計画",
        "部署横断の業務プロセス改革",
        "グローバルプロジェクトでの文化統合",
        "働き方改革の推進",
        "社内対立解消を伴う全社改革"
      ],
      color: "purple",
      level: "攻め"
    }
  ];

  return (
    <section id="program" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            問題解決の3つの型
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            発生型・発見型・変革型へのアプローチと典型事例<br />
            3ヶ月間で1ヶ月ごとに1つの事例を扱います
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-20 h-20 bg-${stage.color}-100 rounded-full -mr-10 -mt-10`}></div>
              <div className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-${stage.color}-100 text-${stage.color}-700`}>
                {stage.level}
              </div>
              
              <div className="relative">
                <div className={`w-16 h-16 bg-${stage.color}-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mb-6`}>
                  {stage.number}
                </div>
                
                <div className={`text-sm font-semibold text-${stage.color}-600 mb-2`}>
                  {stage.type}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {stage.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {stage.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">典型事例</h4>
                  <ul className="space-y-2">
                    {stage.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <i className={`ri-arrow-right-s-line text-${stage.color}-500 mr-1 mt-0.5 flex-shrink-0`}></i>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gray-50 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">プロブレムソルビング・アプローチ（PSA）</h3>
            <p className="text-gray-600 mb-4">
              戦略コンサルティングファームで「秘伝のタレ」として磨き上げられた思考技術。
              複雑なカオスの中から「解くべき真の問い（Key Issue）」を特定し、ファクトとロジックで本質を貫く。
            </p>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full inline-block font-semibold">
              マーケティング・営業・経営企画・開発・人事...あらゆる部門の壁を越えた「脳のキラーアプリ」
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
