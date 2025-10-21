
import Button from '../../../components/base/Button';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20success%20and%20achievement%20in%20modern%20business%20environment%2C%20team%20collaboration%20and%20leadership%20development%2C%20strategic%20thinking%20and%20problem-solving%20success%2C%20corporate%20training%20and%20professional%20growth%2C%20inspiring%20workplace%20transformation%2C%20blue%20and%20purple%20gradient%20lighting&width=1920&height=1080&seq=cta-bg&orientation=landscape')`
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          「問題に悩む人」から<br />
          <span className="text-yellow-300">「問題を解決する人」</span>へ
        </h2>
        <p className="text-xl lg:text-2xl mb-8 opacity-90">
          知識を入れて満足する「学習者」で終わらないでください。<br />
          上司や周囲も舌を巻く「プロブレムソルバー」として行動する、その第一歩を踏み出しましょう。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl">
            <i className="ri-phone-line mr-2"></i>
            無料説明会に参加する
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
            <i className="ri-download-cloud-line mr-2"></i>
            詳細資料をダウンロード
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">3</div>
            <div className="text-yellow-300">ヶ月間の集中プログラム</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">30</div>
            <div className="text-yellow-300">分/日から始められる</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-yellow-300">実践重視のカリキュラム</div>
          </div>
        </div>
        
        <div className="mt-12 bg-white/10 backdrop-blur-sm p-6 rounded-2xl max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">このコースが、日々の問題発見・解決のための</h3>
          <p className="text-lg">
            <span className="text-yellow-300 font-bold">信頼できる相棒</span>となることを願っています。
          </p>
        </div>
      </div>
    </section>
  );
}
