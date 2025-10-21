
export default function LearningCycleSection() {
  const weeklySchedule = [
    {
      week: "Week 1",
      title: "問題の全体像把握と問題定義",
      subtitle: "What & Where",
      color: "blue"
    },
    {
      week: "Week 2", 
      title: "原因分析と本質的課題特定",
      subtitle: "Why & So what?",
      color: "indigo"
    },
    {
      week: "Week 3",
      title: "解決策立案と実行",
      subtitle: "How & Why not yet?",
      color: "purple"
    },
    {
      week: "Week 4",
      title: "フィードバックのリフレクション",
      subtitle: "一流講師陣の映像講義視聴、及びキャッチアップ期間",
      color: "green"
    }
  ];

  const features = [
    {
      icon: "ri-task-line",
      title: "リアルな仕事を教材化",
      description: "自分の業務課題を題材にするので、「学ぶこと」と「成果を出すこと」が直結"
    },
    {
      icon: "ri-repeat-line",
      title: "Simulation × 実践の学習サイクル",
      description: "ストーリー仕立てのシミュレーションで安全に練習し、現場で実際に試し、振り返って改善"
    },
    {
      icon: "ri-robot-line",
      title: "AIを伴走者に",
      description: "生成AIを壁打ち相手に使うことで、自分の考えをすぐに形にし、即時フィードバックを獲得"
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            学習の習慣化
          </h2>
          <p className="text-lg text-gray-600">
            Weekly & Dailyサイクルで思考のOSを定着させる
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Weeklyサイクル</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weeklySchedule.map((schedule, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className={`w-16 h-16 bg-${schedule.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-2xl font-bold text-${schedule.color}-600`}>{index + 1}</span>
                </div>
                <h4 className={`font-bold text-${schedule.color}-600 mb-2`}>{schedule.week}</h4>
                <h5 className="font-semibold text-gray-900 mb-2 text-sm">{schedule.title}</h5>
                <p className={`text-xs text-${schedule.color}-700 font-medium`}>{schedule.subtitle}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="bg-blue-50 p-6 rounded-xl inline-block">
              <p className="text-blue-800">
                <strong>21日分全てのメニュー</strong>があります。毎日30分〜、コンスタントに学ぶ場合は3週間で終了。<br />
                業務多忙時期等もあると思いますが、そのような場合はWeek 4で必ずキャッチアップしましょう。
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">学習と現場での成果創出を同時実現</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${feature.icon} text-2xl text-blue-600`}></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-4">だからこそ</h4>
            <p className="text-xl">
              「学んだことがすぐ使える」「成果が見える」という実感を得られるはずです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
