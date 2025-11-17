export default function IntroductionSection() {
  return (
    <section id="introduction" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            受講概要
          </h2>
        </div>

        {/* メインコンテンツ */}
        <div className="max-w-6xl mx-auto">
          <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg rounded-lg overflow-hidden">
            <tbody>
              {/* 対象者 */}
              <tr className="border-b border-gray-300">
                <td className="w-1/4 font-bold text-gray-700 p-4 bg-cyan-50 border-r border-gray-300 align-middle text-lg">
                  対象者
                </td>
                <td className="p-4 text-gray-800 text-base leading-relaxed">
                  <p className="mb-2">●守りの火消しから攻めの創造的問題解決まで、問題解決能力を向上させたい方</p>
                  <p className="mb-2">●仮説思考力・分析力・創造力・組織変革力を高めたいリーダー</p>
                  <p className="mb-0">●生成AIを日々の問題解決にフル活用したい方</p>
                </td>
              </tr>

              {/* 対象階層 */}
              <tr className="border-b border-gray-300">
                <td className="font-bold text-gray-700 p-4 bg-cyan-50 border-r border-gray-300 align-middle text-lg">
                  対象階層
                </td>
                <td className="p-4 text-gray-800 text-base">
                  中堅(現場リーダー)、管理職(組織リーダー)
                </td>
              </tr>

              {/* 受講期間 */}
              <tr className="border-b border-gray-300">
                <td className="font-bold text-gray-700 p-4 bg-cyan-50 border-r border-gray-300 align-middle text-lg">
                  受講期間
                </td>
                <td className="p-4 text-gray-800 text-base">
                  3か月
                </td>
              </tr>

              {/* 開講月 */}
              <tr className="border-b border-gray-300">
                <td className="font-bold text-gray-700 p-4 bg-cyan-50 border-r border-gray-300 align-middle text-lg">
                  開講月
                </td>
                <td className="p-4 text-gray-800 text-base">
                  随時開講（1日.11日.21日） ※各10日前締切
                </td>
              </tr>

              {/* 受講形式 */}
              <tr className="border-b border-gray-300">
                <td className="font-bold text-gray-700 p-4 bg-cyan-50 border-r border-gray-300 align-middle text-lg">
                  受講形式
                </td>
                <td className="p-4 text-gray-800 text-base">
                  オンデマンド×セルフペース／月1回「BLT」無料参加（参加自由 / オンラインZoom）
                </td>
              </tr>

              {/* アウトプット */}
              <tr className="border-b border-gray-300">
                <td className="font-bold text-gray-700 p-4 bg-cyan-50 border-r border-gray-300 align-middle text-lg">
                  アウトプット
                </td>
                <td className="p-4 text-gray-800 text-base">
                  毎月レポート2回、提案書1回提出。計9回。
                </td>
              </tr>

              {/* フィードバック */}
              <tr className="border-b border-gray-300">
                <td className="font-bold text-gray-700 p-4 bg-cyan-50 border-r border-gray-300 align-middle text-lg">
                  フィードバック
                </td>
                <td className="p-4 text-gray-800 text-base">
                  AI&問題解決ラーニングアドバイザーのハイブリッドフィードバック
                </td>
              </tr>

              {/* 修了条件 */}
              <tr className="border-b border-gray-300">
                <td className="font-bold text-gray-700 p-4 bg-cyan-50 border-r border-gray-300 align-middle text-lg">
                  修了条件
                </td>
                <td className="p-4 text-gray-800 text-base">
                  有
                </td>
              </tr>

              {/* 修了証 */}
              <tr className="border-b border-gray-300">
                <td className="font-bold text-gray-700 p-4 bg-cyan-50 border-r border-gray-300 align-middle text-lg">
                  修了証
                </td>
                <td className="p-4 text-gray-800 text-base">
                  有
                </td>
              </tr>

              {/* 想定学習時間 */}
              <tr className="border-b border-gray-300">
                <td className="font-bold text-gray-700 p-4 bg-cyan-50 border-r border-gray-300 align-middle text-lg">
                  想定学習時間
                </td>
                <td className="p-4 text-gray-800 text-base">
                  約50-70時間 週平均4-6時間x12週
                </td>
              </tr>

              {/* 受講料 */}
              <tr>
                <td className="font-bold text-gray-700 p-4 bg-cyan-50 border-r border-gray-300 align-middle text-lg">
                  受講料
                </td>
                <td className="p-4 text-gray-800 text-base">
                  250,000円 (税込275,000円)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}