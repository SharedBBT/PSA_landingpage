import Button from '../../../components/base/Button';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 overflow-hidden">
      {/* 背景淡色纹理（放大+右移） */}
      <div 
        className="absolute inset-0 opacity-10 bg-no-repeat"
        style={{
          backgroundImage: `url('https://github.com/SharedBBT/psa-assets/blob/main/pixta_38930656_XL.jpg?raw=true')`,
          backgroundPosition: '70% center', // ✅ 向右偏移25%
          backgroundSize: '80%',            // ✅ 放大30%
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* 左侧文字区 */}
          <div className="text-left">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 「学んだつもり」で、止まっていませんか？
            </div>

            {/* ✅ 改进后的标题区（行距压缩 + 紧凑布局） */}
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              <span className="block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
                  AI x
                </span>{' '}
                問題解決
              </span>
              <span className="block text-gray-800">プロフェッショナル</span>
              <span className="block text-blue-600 -mt-2">Bootcamp</span>
            </h1>

            <p className="text-l text-gray-600 mb-8 leading-relaxed">
              <strong>「また対症療法で終わってしまった…」</strong>
              そんな自分から卒業しませんか?AIを最強の相棒に「問題の真因」を特定し、
              根本解決策を導き出す。3ヶ月で、あなたの脳と思考をアップデートする実践型プログラム
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

            {/* 特徴アイコン列表 */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
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
              <div className="flex items-center">
                <i className="ri-timer-line mr-1 text-blue-600"></i>
                三ヶ月集中
              </div>
            </div>
          </div>

          {/* 右侧图片保留 */}
          <div className="relative -mt-10">
            <div className="overflow-hidden rounded-2xl shadow-2xl group transition-all duration-500 ease-out hover:shadow-3xl">
              <div className="w-[120%] -ml-[10%] transition-transform duration-500 ease-out group-hover:scale-105">
                <img
                  src="https://github.com/SharedBBT/psa-assets/blob/main/backgroundimg.jpg?raw=true"
                  alt="AI問題解決プロフェッショナル"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
