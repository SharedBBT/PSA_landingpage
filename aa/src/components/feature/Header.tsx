import Button from '../base/Button';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* 左侧 Logo + 文字 */}
          <div className="flex items-center">
            <img
              src="https://aoba-bbt.com/wp-content/themes/bbt757-html/dist/assets/images/logo.png"
              alt="PSA Logo"
              className="h-10 w-auto mr-3 rounded-full"
            />
            <span
              className="text-2xl font-bold text-blue-600"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              AI x PSA Bootcamp
            </span>
          </div>

          {/* 导航菜单 */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">特徴</a>
            <a href="#program" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">プログラム</a>
            <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">効果</a>
            <a href="#schedule" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">スケジュール</a>
          </nav>

          {/* 按钮 */}
          <div className="flex items-center space-x-4">
            <Button size="sm">
              お申し込み
            </Button>
          </div>

        </div>
      </div>
    </header>
  );
}
