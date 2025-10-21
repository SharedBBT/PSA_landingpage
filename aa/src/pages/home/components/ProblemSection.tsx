
export default function ProblemSection() {
  const problems = [
    {
      icon: "ri-book-line",
      title: "理論ばかりで実践できない",
      description: "フレームワークを覚えても、実際の現場で使えない"
    },
    {
      icon: "ri-time-line", 
      title: "学んでも現場で使えない",
      description: "研修は良かったが、翌日には元通りになってしまう"
    },
    {
      icon: "ri-user-line",
      title: "一人で考える限界がある",
      description: "複雑な問題に直面すると、思考が行き詰まってしまう"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            なぜ多くの問題解決研修は<br />
            <span className="text-red-600">「現場で使えない」</span>のか？
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            従来の研修が「フレームワークを教える」ことが中心だから。ケーススタディで学ぶ知識は、
            いざ自分の問題に直面したとき、すぐに応用が効かないことも少なくありません。
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${problem.icon} text-2xl text-red-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">
            このBootcampは、そのアンチテーゼとして設計されました
          </div>
        </div>
      </div>
    </section>
  );
}
