import React from "react";

export default function Header() {
  // 1. 在这里填入你的 Google Calendar 预约链接
  const CONSULTATION_URL = "https://calendar.app.google/MBs4MjWH1pdVyXaWA";
  
  const APPLY_URL =
    "https://www.bbt757.com/svlShop/cart.do?code=d619e6da0ec7067b3d829cee1e2c9cb819f0eb18fc28dd34b45ee0614ac37b0b";

  // 2. 修改处理函数：在新标签页打开预约链接
  const handleConsultation = () => {
    window.open(CONSULTATION_URL, '_blank', 'noopener,noreferrer');
  };

  const handleApply = () => {
    window.location.href = APPLY_URL;
  };

  return (
    <>
      {/* PC版 Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          {/* 左侧 LOGO + 标题区域 */}
          <div className="flex items-center w-full">
            
            {/* PC LOGO: 显示在左侧 */}
            <img
              src="https://aoba-bbt.com/wp-content/themes/bbt757-html/dist/assets/images/logo.png"
              alt="PSA Logo"
              className="h-7 w-auto mr-3 rounded-full hidden sm:block"
            />

            {/* Mobile LOGO: 显示在左侧 */}
            <img
              src="https://github.com/SharedBBT/psa-assets/blob/main/ChatGPT%20Image%202025%E5%B9%B411%E6%9C%8819%E6%97%A5%2014_03_27.png?raw=true"
              alt="PSA Logo Mobile"
              className="h-[67.2px] w-auto mr-3 rounded-full sm:hidden"
            />

            {/* 标题: 显示在图片的右侧 */}
            <h1 className="font-extrabold leading-tight tracking-tight whitespace-nowrap text-[22px] sm:text-4xl">
              {/* 修改说明：
                  添加了 sm:text-3xl 
                  这会让 AIx 在 PC 端比周围文字(2xl)大一号，
                  但在移动端仍然保持父级继承的大小。
              */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 sm:text-4xl">
                AIx
              </span>
              <span className="text-gray-800"> 問題解決</span>
              <span className="text-blue-600"> Bootcamp</span>
            </h1>
          </div>

          {/* PC: 按钮 */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={handleConsultation}
              className="px-6 py-2 text-sm font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all whitespace-nowrap"
            >
              無料相談
            </button>

            <button
              onClick={handleApply}
              className="px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg shadow-md transition-all whitespace-nowrap"
            >
              受講申込
            </button>
          </div>
        </div>
      </header>

      {/* Mobile版：底部按钮区 */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 px-4 pt-3 pb-4">
        <div className="flex justify-between gap-3">
          <button
            onClick={handleConsultation}
            className="flex-1 px-4 py-2 text-sm font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-lg shadow whitespace-nowrap"
          >
            無料相談
          </button>

          <button
            onClick={handleApply}
            className="flex-1 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow whitespace-nowrap"
          >
            受講申込
          </button>
        </div>
      </div>
    </>
  );
}