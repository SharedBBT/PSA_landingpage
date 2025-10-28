
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-2xl font-bold text-blue-400 font-pacifico mb-4">
              AI x PSA Bootcamp
            </div>
            <p className="text-gray-300 mb-6">
              AIを活用した問題解決プロフェッショナル養成プログラム。<br />
              あなたの実際の課題を解決しながら、最強の思考スキルを習得。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-twitter-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-linkedin-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-facebook-line"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">プログラム</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">現場課題解決編</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">事業戦略構築編</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">変革リーダーシップ編</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">学習サイクル</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">サポート</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">よくある質問</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">お問い合わせ</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">資料ダウンロード</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">無料説明会</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 AI x 問題解決プロフェッショナル Bootcamp. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">プライバシーポリシー</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">利用規約</a>
            <a href="https://readdy.ai/?origin=logo" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Powered by Readdy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
