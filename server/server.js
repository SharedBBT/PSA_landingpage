// ✅ 1. 导入 express 和 cors 模块
const express = require("express");
const cors = require("cors");

// ✅ 2. 创建一个 Express 应用
const app = express();

// ✅ 3. 使用中间件：允许跨域访问（前端 localhost:5173 才能访问）
app.use(cors());

// ✅ 4. 让 Express 自动解析 JSON 数据
app.use(express.json());

// ✅ 5. 定义一个 POST 路由，接收前端发送的数据
app.post("/api/submit", (req, res) => {
  // 从请求体中取出前端发送的数据
  const { name, course } = req.body;

  // 在服务器的控制台打印出来，方便确认
  console.log("📩 受け取ったデータ:", { name, course });

  // ✅ 6. 生成一个个性化的回复
  const message = `${name || "ゲスト"}さん、「${course}」へのお申し込みありがとうございます！🎉`;

  // ✅ 7. 返回 JSON 格式的响应给前端
  res.json({ success: true, message });
});

// ✅ 8. 服务器监听在 5000 端口
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
