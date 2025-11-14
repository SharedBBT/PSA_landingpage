import React from "react";

export default function Header() {
  const handleConsultation = () => {
    alert("無料相談のお申し込みページへ移動します");
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Anonymous",
          course: "AI × PSA Bootcamp",
        }),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert("申し込みに失敗しました 😢");
      console.error(error);
    }
  };

  return (
    <>
      {/* ======================= */}
      {/* PC版（原位置保持） */}
      {/* ======================= */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          {/* 左侧 LOGO */}
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

          {/* PC: 按钮（sm 以上显示） */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={handleConsultation}
              className="px-4 py-2 text-sm font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all"
            >
              無料相談
            </button>

            <button
              onClick={handleSubmit}
              className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg shadow-md transition-all"
            >
              受講申込
            </button>
          </div>
        </div>
      </header>

      {/* ======================= */}
      {/* Mobile版：右侧悬浮按钮 */}
      {/* ======================= */}
      <div className="sm:hidden fixed right-4 bottom-24 z-50 flex flex-col space-y-3">
        <button
          onClick={handleConsultation}
          className="px-4 py-2 text-sm font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-lg shadow-md"
        >
          無料相談
        </button>

        <button
          onClick={handleSubmit}
          className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-md"
        >
          受講申込
        </button>
      </div>
    </>
  );
}
