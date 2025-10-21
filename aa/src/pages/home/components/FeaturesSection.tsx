
export default function FeaturesSection() {
  const features = [
    {
      number: "1",
      title: "AIがあなたの思考パートナーに",
      subtitle: "一人で悩む時代は終わりました",
      before: "人間の思考力だけに頼る",
      after: "AIと一緒に考える",
      benefits: [
        "膨大な情報を瞬時に整理",
        "見落としがちな視点を発見", 
        "仮説を素早く検証"
      ],
      result: "一人では到達できない深い洞察を獲得",
      image: "https://readdy.ai/api/search-image?query=Professional%20Japanese%20business%20person%20working%20with%20AI%20assistant%20for%20data%20analysis%20and%20strategic%20thinking%2C%20modern%20digital%20workspace%20with%20advanced%20analytics%20tools%2C%20human-AI%20collaboration%20in%20problem%20solving%2C%20innovative%20technology%20interface%2C%20clean%20professional%20environment%20with%20blue%20lighting%2C%20futuristic%20yet%20approachable%20design%2C%20Asian%20professional%20in%20business%20attire&width=500&height=400&seq=ai-partner-jp&orientation=landscape"
    },
    {
      number: "2", 
      title: "あなたの実際の課題が解決される",
      subtitle: "教科書の事例ではなく、リアルな成果を",
      before: "架空のケーススタディで練習",
      after: "あなたの実際の課題で実践",
      benefits: [
        "学習中に実際の問題が解決",
        "「知っている」が「できる」に変わる",
        "研修終了時には具体的な成果を実感"
      ],
      result: "即座に職場で活用できる実力を獲得",
      image: "https://readdy.ai/api/search-image?query=Japanese%20business%20professional%20successfully%20solving%20real%20workplace%20challenges%2C%20celebrating%20achievement%20with%20visible%20results%20and%20analytics%20on%20screens%2C%20modern%20office%20environment%20with%20charts%20showing%20improvement%2C%20practical%20problem-solving%20in%20action%2C%20professional%20success%20and%20growth%20visualization%2C%20Asian%20professional%20in%20business%20suit&width=500&height=400&seq=real-results-jp&orientation=landscape"
    },
    {
      number: "3",
      title: "プロの思考法が習慣になる", 
      subtitle: "一時的なスキルではなく、一生モノの能力に",
      before: "一度きりの学習で終了",
      after: "継続的な習慣として定着",
      benefits: [
        "What → Where → Why → So what? → How → Why not yet?",
        "毎日30分のMissionで習慣化",
        "Weekly & Dailyサイクルで定着"
      ],
      result: "生涯にわたって成長し続ける思考力を獲得",
      image: "https://readdy.ai/api/search-image?query=Japanese%20professional%20developing%20consistent%20daily%20habits%20for%20strategic%20thinking%20and%20problem%20solving%2C%20calendar%20with%20structured%20learning%20schedule%2C%20growth%20mindset%20visualization%2C%20continuous%20improvement%20process%2C%20professional%20development%20journey%2C%20organized%20workspace%20with%20learning%20materials%2C%20Asian%20business%20person%20in%20professional%20attire&width=500&height=400&seq=habit-formation-jp&orientation=landscape"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            本プログラムが選ばれる<br />
            <span className="text-blue-600">3つの理由</span>
          </h2>
        </div>
        
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    {feature.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-blue-600 font-medium">{feature.subtitle}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 mb-2">従来の研修</h4>
                    <p className="text-red-600 text-sm">{feature.before}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">本プログラム</h4>
                    <p className="text-blue-600 text-sm">{feature.after}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <i className="ri-star-line text-yellow-500 mr-2"></i>
                    こんなことができるように
                  </h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-arrow-right-line mr-2"></i>
                    <span className="font-semibold">{feature.result}</span>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full rounded-2xl shadow-xl object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
