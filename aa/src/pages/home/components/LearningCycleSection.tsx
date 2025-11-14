export default function LearningCycleSection() {
  const weeklySchedule = [
    {
      week: "Module 1",
      title: "問題の全体像把握と問題定義",
      subtitle: "What & Where",
      desc: '曖昧な問題を"構造化"し、正しく定義する力を養います。課題の本質を見抜く最初の一歩。',
    },
    {
      week: "Module 2",
      title: "原因分析と本質的課題特定",
      subtitle: "Why & So what?",
      desc: '事象の裏にある根本要因を分析。再発しないための"本質的思考"を習得します。',
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

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
            3週間で定着する "思考の習慣"
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeklySchedule.map((schedule, index) => {
              const images = [
                'https://github.com/SharedBBT/psa-assets/blob/main/12.png?raw=true',
                'https://github.com/SharedBBT/psa-assets/blob/main/14.png?raw=true',
                'https://github.com/SharedBBT/psa-assets/blob/main/16.png?raw=true'
              ];
              
              return (
                <div
                  key={index}
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
                      src={images[index]} 
                      alt={`${schedule.title} イメージ`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <div className="inline-block max-w-4xl rounded-3xl px-12 py-10 bg-gradient-to-br from-blue-700 to-indigo-900 text-blue-100 border border-blue-300/40 shadow-[0_8px_40px_rgba(30,64,175,0.3)]">
              <p className="text-sm leading-relaxed">
                <strong className="text-white">1日30分 </strong>
                忙しいビジネスパーソンでも無理なく続けられるよう、
                "短時間 × 高密度 × 継続"の3要素で構成されています。
                各週の振り返りで確実に定着を図ります。
              </p>
            </div>
          </div>
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
                  学びが一過性で終わらず、<strong className="text-yellow-300">現場で再現できる</strong>。<br/>
                  それが「AI × PSA Bootcamp」が提供する最大の価値です。
                </p>

                <p className="text-lg leading-relaxed font-semibold text-center">
                  このスキルは、マーケティング、営業、製造、人事...<br/>
                  <span className="text-yellow-300 text-xl">あらゆるキャリアで通用する永続資産</span>となる。
                </p>
              </div>

              {/* 強調メッセージ */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6 mb-8 border border-white/30 max-w-4xl mx-auto">
                <p className="text-white text-xl lg:text-2xl font-bold leading-relaxed text-center">
                  思考の習慣が変われば、<br/>
                  <span className="text-yellow-300">キャリアの未来が変わる。</span>
                </p>
              </div>

              {/* CTAボタン */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-10 py-5 text-lg font-bold text-purple-700 bg-white rounded-full shadow-2xl hover:bg-yellow-300 hover:text-purple-900 hover:scale-105 transition-all duration-300 flex items-center">
                  <i className="ri-calendar-check-line mr-2 text-2xl"></i>
                  今すぐ無料説明会に参加する
                </button>
                
                <button className="px-8 py-4 text-base font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-purple-700 transition-all duration-300">
                  詳しい資料をダウンロード
                </button>
              </div>

              <p className="text-sm text-white/80 mt-6 text-center">
                ※ 参加無料 | 強引な勧誘一切なし | 30日間全額返金保証
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}