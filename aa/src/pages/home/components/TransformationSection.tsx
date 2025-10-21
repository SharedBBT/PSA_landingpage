
export default function TransformationSection() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            あなたが手に入れるもの
          </h2>
          <p className="text-lg text-gray-600">
            3ヶ月後、あなたは組織で最も頼られる「問題解決のプロフェッショナル」へ
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
              <i className="ri-emotion-sad-line mr-3"></i>
              Before（研修前）
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="ri-close-circle-line text-red-500 mt-1"></i>
                <span className="text-gray-700">問題に直面すると混乱する</span>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-close-circle-line text-red-500 mt-1"></i>
                <span className="text-gray-700">解決策が思い浮かばない</span>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-close-circle-line text-red-500 mt-1"></i>
                <span className="text-gray-700">一人で抱え込んでしまう</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <i className="ri-emotion-happy-line mr-3"></i>
              After（研修後）
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="ri-check-circle-line text-green-500 mt-1"></i>
                <span className="text-gray-700">どんな問題も冷静に分析できる</span>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-check-circle-line text-green-500 mt-1"></i>
                <span className="text-gray-700">効果的な解決策を素早く発見</span>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-check-circle-line text-green-500 mt-1"></i>
                <span className="text-gray-700">AIと協働して最適解を導き出す</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-2xl max-w-4xl">
            <div className="flex items-center justify-center mb-4">
              <i className="ri-trophy-line text-4xl mr-4"></i>
              <h3 className="text-2xl font-bold">結果として...</h3>
            </div>
            <p className="text-lg mb-4">
              あなたは単なる「問題解決の知識を持つ人」ではなく、
            </p>
            <p className="text-2xl font-bold">
              組織で最も頼られる「問題解決のプロフェッショナル」へと変貌を遂げます。
            </p>
            <div className="mt-6 text-blue-200">
              <p>これが、マーケティング・営業・経営企画・開発・人事...あらゆる部門のトップが共通して使う</p>
              <p className="font-semibold">「脳のキラーアプリ」—PSAの真の価値です。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
