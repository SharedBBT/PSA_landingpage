import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* 左侧主要内容：保持占据 2 列 */}
          <div className="col-span-2">
            <h1 className="text-xl sm:text-2xl font-extrabold leading-tight tracking-tight mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
                AIx
              </span>
              <span className="text-gray-100"> 問題解決</span>
              <span className="text-blue-400"> Bootcamp</span>
            </h1>
            <p className="text-gray-300 mb-6">
              AIを活用した問題解決プロフェッショナル養成プログラム。<br />
              あなたの実際の課題を解決しながら、最強の思考スキルを習得。
            </p>
          </div>

          {/* ✅ 修改位置：
             添加了 `md:col-start-4`。
             原本它会自动排在第3列，现在强制让它位于第4列（最右侧），从而向右平移。
          */}
          <div className="md:col-start-4">
            <h3 className="font-semibold mb-4">サポート</h3>
            <ul className="space-y-2 text-gray-300">
              {/* 🔽 修改为 Link 跳转 FAQ 页面 */}
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">お問い合わせ</a></li>

              {/* ✅ 資料ダウンロード 保留原样 */}
              <li>
                <a
                  href="/material.pdf"
                  download
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  資料ダウンロード
                </a>
              </li>

              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">無料説明会</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © Aoba-BBT, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* ✅ 修改链接：隐私政策 */}
            <a 
              href="https://aoba-bbt.com/privacy/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
            >
              プライバシーポリシー
            </a>
            
            {/* ✅ 修改链接：利用规约 */}
            <a 
              href="https://aoba-bbt.com/agreement/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
            >
              利用規約
            </a>
            
            {/* ✅ 修改链接：会社概要 */}
            <a 
              href="https://aoba-bbt.com/aoba-bbt/#section03" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
            >
              会社概要
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}