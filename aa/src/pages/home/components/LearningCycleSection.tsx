export default function LearningCycleSection() {
  const weeklySchedule = [
    {
      week: "Week 1",
      title: "問題の全体像把握と問題定義",
      subtitle: "What & Where",
      color: "blue",
    },
    {
      week: "Week 2",
      title: "原因分析と本質的課題特定",
      subtitle: "Why & So what?",
      color: "indigo",
    },
    {
      week: "Week 3",
      title: "解決策立案と実行",
      subtitle: "How & Why not yet?",
      color: "purple",
    },
    {
      week: "Week 4",
      title: "フィードバックのリフレクション",
      subtitle: "講師映像講義＆キャッチアップ期間",
      color: "green",
    },
  ];

  const features = [
    {
      icon: "ri-task-line",
      title: "リアルな仕事を教材化",
      description:
        "自分の業務課題を題材にするので、「学ぶこと」と「成果を出すこと」が直結します。",
      color: "red",
    },
    {
      icon: "ri-repeat-line",
      title: "Simulation × 実践の学習サイクル",
      description:
        "ストーリー仕立てのシミュレーションで安全に練習し、現場で実際に試し、振り返って改善。",
      color: "blue",
    },
    {
      icon: "ri-robot-line",
      title: "AIを伴走者に",
      description:
        "生成AIを壁打ち相手に使うことで、自分の考えをすぐに形にし、即時フィードバックを獲得。",
      color: "indigo",
    },
  ];

  return (
    <section id="schedule" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            学習の習慣化
          </h2>
          <p className="text-base text-gray-600">
            Weekly & Dailyサイクルで思考のOSを定着させる
          </p>
        </div>

        {/* Weekly Cycle */}
        <div className="mb-14">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Weeklyサイクル
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {weeklySchedule.map((schedule, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow-md text-center border-t-4"
                style={{
                  borderColor: `var(--tw-color-${schedule.color}-500, #3b82f6)`,
                }}
              >
                <div
                  className={`mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full bg-opacity-10`}
                  style={{
                    backgroundColor: `var(--tw-color-${schedule.color}-500, #3b82f6)`,
                  }}
                >
                  <span
                    className="font-bold text-lg"
                    style={{
                      color: `var(--tw-color-${schedule.color}-600, #2563eb)`,
                    }}
                  >
                    {index + 1}
                  </span>
                </div>
                <h4
                  className="font-bold mb-1"
                  style={{
                    color: `var(--tw-color-${schedule.color}-600, #2563eb)`,
                  }}
                >
                  {schedule.week}
                </h4>
                <p className="font-semibold text-gray-900 text-sm mb-1">
                  {schedule.title}
                </p>
                <p
                  className="text-xs font-medium"
                  style={{
                    color: `var(--tw-color-${schedule.color}-700, #1e40af)`,
                  }}
                >
                  {schedule.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Info Box - 使用内联样式确保显示 */}
          <div className="text-center mt-6">
            <div
              className="relative overflow-hidden inline-block max-w-4xl rounded-3xl px-12 py-10 transition-all duration-500"
              style={{
                background: 'linear-gradient(to bottom right, #1d4ed8, #1e3a8a)',
                border: '1px solid rgba(147, 197, 253, 0.4)',
                boxShadow: '0 8px 40px rgba(30, 64, 175, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 50px rgba(30, 64, 175, 0.45)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(30, 64, 175, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="relative z-10 text-sm font-medium leading-relaxed" style={{ color: 'rgba(219, 234, 254, 0.9)' }}>
                <strong style={{ color: '#ffffff' }}>21日分のメニュー</strong>で、1日30分ずつ進められます。<br />
                忙しい時期があっても、Week 4で必ずキャッチアップできる設計です。
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
            学習と現場での成果創出を同時実現
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-md border-t-4 border-${feature.color}-500 text-center`}
              >
                <div
                  className={`w-14 h-14 rounded-full bg-${feature.color}-100 flex items-center justify-center mx-auto mb-4`}
                >
                  <i
                    className={`${feature.icon} text-2xl text-${feature.color}-600`}
                  ></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion - 使用内联样式确保显示 */}
        <div className="text-center mt-12 relative">
          <div
            className="relative overflow-hidden inline-block max-w-4xl rounded-3xl px-12 py-12 transition-all duration-500"
            style={{
              background: 'linear-gradient(to bottom right, #1d4ed8, #1e3a8a)',
              border: '1px solid rgba(147, 197, 253, 0.4)',
              boxShadow: '0 8px 40px rgba(30, 64, 175, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 50px rgba(30, 64, 175, 0.45)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 40px rgba(30, 64, 175, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-5">
                <i className="ri-trophy-line text-4xl mr-3" style={{ color: '#fde047', filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}></i>
                <h3 className="text-2xl font-bold tracking-wide" style={{ color: '#ffffff', filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))' }}>
                  だからこそ
                </h3>
              </div>

              <p className="text-base mb-2" style={{ color: 'rgba(219, 234, 254, 0.9)' }}>
                「学んだことがすぐ使える」
              </p>

              <p className="text-2xl font-bold leading-relaxed mb-4" style={{ color: '#ffffff', filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))' }}>
                「成果が見える」{" "}
                <span style={{ color: '#fde047' }}></span>
                ——
              </p>

              <div className="mt-4 text-sm leading-relaxed" style={{ color: 'rgba(219, 234, 254, 0.9)' }}>
                <p>
                  それが、
                </p>
                <p className="font-semibold mt-1" style={{ color: '#ffffff' }}>
                  このプログラム最大の価値です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}