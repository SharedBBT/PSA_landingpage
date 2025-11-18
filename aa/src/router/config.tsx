import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import FaqPage from "../pages/faq/FaqPage"; // ← 新增 FAQ 页面

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/faq",
    element: <FaqPage />, // ← 添加 FAQ 路由
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
