export default function LearningCycleSection() {
  const features = [
    {
      icon: "ri-task-line",
      title: "リアルな仕事を教材化",
      description:
        'あなた自身の業務課題をテーマに進めるから、学びが"そのまま成果"につながる。学ぶ時間が、そのままキャリアへの投資に変わります。',
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
        'ChatGPTなどの生成AIを"思考の壁打ち相手"として活用。自分のアイデアを即座に検証できるため、学びが加速します。',
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
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            学びを習慣化し、思考をOS化する
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            AI × PSA Bootcamp では、週単位のテーマと日々の実践を組み合わせた
            <span className="font-semibold text-blue-700">
              「学習サイクル設計」
            </span>
            を採用。一時的な学びではなく、脳の思考プロセスそのものを書き換えます。
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            現場で成果を出すための3つの仕組み
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl border-t-4 border-blue-500 text-center transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <i className={`${feature.icon} text-3xl text-blue-600`}></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 最終CTA - 超宽容器 */}
        <div className="mt-20 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="relative rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-8 sm:px-12 lg:px-20 py-16 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 border border-purple-300/40 shadow-[0_12px_60px_rgba(79,70,229,0.4)] hover:shadow-[0_16px_80px_rgba(79,70,229,0.5)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            
            {/* 装飾的な背景要素 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-300/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              {/* メインヘッドライン */}
              <div className="flex items-center justify-center mb-6">
                <i className="ri-flashlight-line text-5xl mr-3 text-yellow-300 drop-shadow-lg animate-pulse"></i>
                <h3 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-md">
                  迷いは今日で終わり。
                </h3>
              </div>

              <p className="text-2xl lg:text-3xl font-bold text-yellow-300 mb-8 drop-shadow-sm text-center">
                あなたは「問題解決者」として生きる。
              </p>

              {/* 本文 */}
              <div className="space-y-4 mb-8 text-white/95 max-w-5xl mx-auto">
                <p className="text-lg leading-relaxed text-center">
                  <strong className="text-yellow-300">モヤモヤ、迷う人生は今日で終わりです。</strong><br/>
                  あなたの未来は、今日、あなたが取る行動によって決まります。
                </p>

                <p className="text-lg leading-relaxed text-center">
                  
                </p>

                <p className="text-lg leading-relaxed font-semibold text-center">
                  このスキルは、マーケティング、営業、製造、人事...<br/>
                  
                </p>
              </div>

              {/* 強調メッセージ */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6 mb-8 border border-white/30 max-w-4xl mx-auto">
                <p className="text-white text-xl lg:text-2xl font-bold leading-relaxed text-center">
                  あらゆるキャリアで通用する<br/>
                  <span className="text-yellow-300">永続資産</span>となる
                </p>
              </div>

            {/* CTAボタン */}
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  <button className="px-10 py-5 text-lg font-bold text-purple-700 bg-white rounded-full shadow-2xl hover:bg-yellow-300 hover:text-purple-900 hover:scale-105 transition-all duration-300 flex items-center">
    <i className="ri-calendar-check-line mr-2 text-2xl"></i>
    今すぐ無料説明会に参加する
  </button>

  {/* 🔽 修改后的下载按钮 */}
  <a
    href="/material.pdf"
    download
    className="px-8 py-4 text-base font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-purple-700 transition-all duration-300 flex items-center justify-center"
  >
    詳しい資料をダウンロード
  </a>
</div>


              <p className="text-sm text-white/80 mt-6 text-center">
               
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}