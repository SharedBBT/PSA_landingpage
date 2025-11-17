  export default function FeaturesSection() {
    const features = [
      {
        number: "1",
        title: "AIを「相棒」とする思考加速プロセス",
        subtitle: "理由1",
        points: [
          "AIを壁打ち相手に設定。",
          "思考スピードが何倍も深く、速くなる。",
          "多角的な視点と高速検証が可能。",
          "問題解決の再現性を獲得。"
        ],
        result: ""
      },
      {
        number: "2",
        title: "実戦比率3:7による知識の資産化",
        subtitle: "理由2",
        points: [
          "実戦比率、インプット3：アウトプット7。",
          "「知っている」を「使いこなせる資産」に変貌。",
          "理論は核だけ、即座に業務で実行。",
          "実践者となる強制力を持つ。"
        ],
        result: ""
      },
      {
        number: "3",
        title: "教材はあなたの「リアルな実務課題」",
        subtitle: "理由3",
        points: [
          "原則として、架空の事例研究は行わない。",
          "あなたの実務課題をそのまま教材に採用。",
          "「売上低迷」の解決をゴールに設定。",
          "学習と成果直結を最優先に設計。"
        ],
        result: ""
      }
    ];

    return (
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            本プログラムが選ばれる
            <span className="text-blue-600">3つの理由</span>
          </h2>
          <p className="text-gray-600 mb-12 text-sm md:text-base">
            あなたの思考と行動を確実に変える独自のメソッド
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition duration-300 text-left flex flex-col justify-between"
              >
                {/* Header */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-3">
                      {f.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                      <p className="text-blue-600 text-sm">{f.subtitle}</p>
                    </div>
                  </div>

                  {/* Comparison box - 削除 */}

                  {/* Bullet list */}
                  <ul className="space-y-2 mb-4 text-gray-700 text-sm">
                    {f.points.map((p, j) => (
                      <li key={j} className="flex items-start">
                        <i className="ri-check-line text-green-500 mr-2 mt-[2px]"></i>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Result - 空の場合は非表示 */}
                {f.result && (
                  <div className="mt-2 pt-2 border-t border-blue-100 text-blue-700 font-medium text-sm">
                    <i className="ri-arrow-right-line mr-1 text-red-500"></i>
                    {f.result}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 下部メッセージ */}
          <div className="mt-12">
            <p className="text-xl font-bold text-gray-900">
              これは「研修」ではない。「思考のジム」である
            </p>
          </div>
        </div>
      </section>
    );
  }