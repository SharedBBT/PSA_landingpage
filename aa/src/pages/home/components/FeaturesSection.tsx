export default function FeaturesSection() {
  const features = [
    {
      number: "1",
      title: "AIがあなたの思考パートナーに",
      subtitle: "AIと共に考える新しい時代へ",
      points: [
        "膨大な情報を瞬時に整理",
        "見落としがちな視点を発見",
        "仮説を素早く検証"
      ],
      result: "一人では到達できない深い洞察を獲得"
    },
    {
      number: "2",
      title: "あなたの実際の課題が解決される",
      subtitle: "学びがそのまま成果に直結",
      points: [
        "架空の事例ではなく、実際の課題で実践",
        "「知っている」から「できる」へ",
        "学びながら現場課題を解決"
      ],
      result: "即座に活用できる実践力を獲得"
    },
    {
      number: "3",
      title: "プロの思考法が習慣になる",
      subtitle: "一過性ではなく継続する成長を",
      points: [
        "What→Why→How の思考プロセスを定着",
        "毎日30分のMissionで習慣化",
        "自走する学習サイクルを構築"
      ],
      result: "生涯にわたって成長し続ける力を獲得"
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
          「学んで終わり」ではない。AIと共に、あなたの脳をアップデートする。
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

                {/* Comparison box */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-red-50 rounded-md p-3 text-xs">
                    <p className="text-red-700 font-semibold mb-1">従来の研修</p>
                    <p className="text-red-600">知識を覚えるだけ</p>
                  </div>
                  <div className="bg-blue-50 rounded-md p-3 text-xs">
                    <p className="text-blue-700 font-semibold mb-1">本プログラム</p>
                    <p className="text-blue-600">思考と実践で身につける</p>
                  </div>
                </div>

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

              {/* Result */}
              <div className="mt-2 pt-2 border-t border-blue-100 text-blue-700 font-medium text-sm">
                <i className="ri-arrow-right-line mr-1 text-red-500"></i>
                {f.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
