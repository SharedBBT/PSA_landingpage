import { User, Lightbulb, Bot } from "lucide-react";

export default function CombinedFeaturesSection() {
  const features = [
    {
      number: "1",
      icon: <Bot className="w-6 h-6 text-blue-600" />,
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
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
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
      icon: <User className="w-6 h-6 text-blue-600" />,
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
    <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            これは「研修」ではない<br />
            <span className="text-blue-600">「思考のジム」である</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            「学んで終わり」ではない。AIと共に、あなたの脳をアップデートする。
          </p>
        </div>

        {/* メインコンテンツ */}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              本プログラムが選ばれる
              <span className="text-blue-600">3つの理由</span>
            </h3>

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
                    <p className="text-blue-600 text-xs">{f.subtitle}</p>
                  </div>
                </div>

                {/* 比較ボックス */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-red-50 rounded-md p-2 text-xs border border-red-100">
                    <p className="text-red-700 font-semibold mb-1">従来の研修</p>
                    <p className="text-red-600">知識を覚えるだけ</p>
                  </div>
                  <div className="bg-blue-50 rounded-md p-2 text-xs border border-blue-200">
                    <p className="text-blue-700 font-semibold mb-1">本プログラム</p>
                    <p className="text-blue-600">思考と実践で身につける</p>
                  </div>
                </div>

                {/* ポイントリスト */}
                <ul className="space-y-1.5 mb-3 text-gray-700 text-sm">
                  {f.points.map((p, j) => (
                    <li key={j} className="flex items-start">
                      <i className="ri-check-line text-green-500 mr-2 mt-0.5 flex-shrink-0"></i>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                {/* 結果 */}
                <div className="pt-2 border-t border-blue-100 text-blue-700 font-semibold text-sm flex items-start">
                  <i className="ri-arrow-right-line mr-2 text-blue-500 mt-0.5 flex-shrink-0"></i>
                  <span>{f.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 下部：強調ボックス（全幅） */}
        <div className="mt-8 p-8 bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl shadow-2xl border border-blue-300/40 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="font-bold text-2xl mb-4 flex items-center justify-center">
              <i className="ri-trophy-line text-yellow-300 mr-3 text-3xl"></i>
              あなたが手にする「真の価値」
            </h4>
            <p className="text-lg leading-relaxed text-blue-100">
              「誰かの正解」ではなく、<strong className="text-yellow-300">「自ら導き出す最適解」を創る力</strong><br />
              AIを使いこなし、自分自身の"生きた課題"を解決に導く<br />
              それこそが、ここで得られる<strong className="text-yellow-300">唯一無二の資産</strong>です
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
