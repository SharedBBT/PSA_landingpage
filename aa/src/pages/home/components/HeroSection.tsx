import Button from '../../../components/base/Button';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover opacity-10"
        style={{
          backgroundImage: `url('https://static.readdy.ai/image/e8216cecf713b6d5b5ce383a692a8f69/6270620fde8ec409a4acab59adca9407.png')`,
          backgroundPosition: 'center 30%'
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 革新的な問題解決プログラム
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI x 問題解決<br />
              <span className="text-blue-600">プロフェッショナル</span><br />
              Bootcamp
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              理論ではなく<strong>実践</strong>。あなたの実際の課題を解決しながら、AIと共に最強の問題解決スキルを習得する3ヶ月間の集中プログラム
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="flex items-center justify-center">
                <i className="ri-play-circle-line mr-2"></i>
                無料説明会に参加
              </Button>
              <Button variant="outline" size="lg" className="flex items-center justify-center">
                <i className="ri-download-line mr-2"></i>
                詳細資料をダウンロード
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <i className="ri-time-line mr-1 text-blue-600"></i>
                毎日30分から
              </div>
              <div className="flex items-center">
                <i className="ri-robot-line mr-1 text-blue-600"></i>
                AI活用
              </div>
              <div className="flex items-center">
                <i className="ri-trophy-line mr-1 text-blue-600"></i>
                実践重視
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20Japanese%20business%20consultant%20working%20with%20AI%20technology%2C%20analyzing%20complex%20problem-solving%20frameworks%20and%20data%20visualization%2C%20modern%20clean%20office%20environment%2C%20collaboration%20between%20human%20and%20artificial%20intelligence%2C%20strategic%20thinking%20process%2C%20professional%20development%20and%20learning%2C%20innovative%20education%20technology%2C%20blue%20and%20white%20color%20scheme%2C%20Asian%20professional%20in%20business%20attire&width=600&height=600&seq=hero-main-jp&orientation=squarish"
              alt="AI問題解決プロフェッショナル"
              className="w-full rounded-2xl shadow-2xl object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-green-600 text-xl"></i>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">実際の課題解決</div>
                  <div className="text-sm text-gray-600">学習と成果が直結</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
