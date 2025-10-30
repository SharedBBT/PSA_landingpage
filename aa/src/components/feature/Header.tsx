import React, { useState } from "react";
import Button from "../base/Button";

export default function Header() {
  // ✅ 定义一个状态保存用户输入的名字
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || "Anonymous", // 👈 如果没输入，就用 Anonymous
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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* 左侧 */}
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

        {/* 右侧：输入 + 按钮 */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="お名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button size="sm" onClick={handleSubmit}>
            お申し込み
          </Button>
        </div>
      </div>
    </header>
  );
}
