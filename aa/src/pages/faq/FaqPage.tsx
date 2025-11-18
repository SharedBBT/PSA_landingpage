import { useState } from "react";

const faqSlides = [
  {
    title: "FAQ",
    faqs: [
      {
        question: "Q1. 生成AIは何を使えばよい？",
        answer: `ChatGPT／Gemini などどれでも可。それぞれ個性があるため、使い比べて相性のよい方をお選びください。
推奨:学習向けモード(例:ChatGPTは「ツール:あらゆる学びをサポート」、Geminiは「ガイド付き学習」）
運用コツ：同一スレッドで継続／役割を指示（例「あなたは戦略コンサル」）等。詳細コツは本編で案内）`,
      },
      {
        question: "Q2. 生成AI使用時の注意点は？",
        answer: `有料版の利用を推奨（自社・クライアントの課題を扱うため）。あわせて以下を徹底してください。
• 機微情報は最小化・匿名化（社名・個人名・価格条件などは伏せる／ダミー化）
• 事実と推測を明確化（出典・根拠を分離）
• 同意・規程の順守（社内ルール／法務・個人情報の観点を確認）`,
      },
      {
        question: "Q3. 1日30分で終わるのか？",
        answer: `設計は1ミッション=30分(Input10分:Output20分＝1:2)がベース。より深めれば時間は伸びますが、仮説思考＋タイムボックス(Input10分/Output20分)で「止めどころ」を決め、毎日継続できる運用にしてください。`,
      },
      {
        question: "Q4. 修了条件は？",
        answer: `各StageにつきWeek1／Week2／Week3の課題提出が必須。Week3は統合課題（問題解決提案書）です。これらを総合評価し、修了認定を行います。`,
      },
    ],
  },
  {
    title: "FAQ",
    faqs: [
      {
        question: "Q5. フィードバックはもらえる？",
        answer: "AIとの対話で即時フィードバックを得ながら進めます。加えて、学習アドバイザーがポイントでレビューするハイブリッド体制です。",
      },
      {
        question: "Q6. ライブ授業はありますか？",
        answer: "必須のライブ授業はありません。希望者向けoomに月1回、第3木曜 12:10–13:00に「BLT（ビジネスランチトーク）」を開催予定（オンラインZoom）。交流・質疑にご活用ください。",
      },
      {
        question: "Q7. 業務多忙で学習が遅れた場合は？",
        answer: "Week1-3はそれぞれ「7日間学習＋フィードバック・特典映像視聴・復習」の10日間サイクルで学習を進めていただきます。遅れた場合は、次のWeek開始までの3日間で遅れを取り戻したり、時には少しまとめて学習を進めるなどし、「各Week10日間／各Stage1か月間」を意識してお取り組みください。",
      },
      {
        question: "Q8. 機密情報は守られますか？",
        answer: "はい、ご発言や提出物は本講座内限となりますので、ご安心ください。是非ご自身の業務やクライアント課題でお取り組みください。リアルな課題での取り組みが難しい場合は、仮想課題でも問題ございません。（Q2につきましてはご注意ください）",
      },
    ],
  },
];

export default function FaqPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => setCurrentSlide((s) => Math.max(s - 1, 0));
  const nextSlide = () => setCurrentSlide((s) => Math.min(s + 1, faqSlides.length - 1));

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      {faqSlides.map((slide, index) => (
        <div
          key={index}
          className={`w-full max-w-6xl bg-white rounded-xl shadow-lg p-8 mb-10 transition-all duration-300 ${
            currentSlide === index ? "block" : "hidden"
          }`}
        >
          <div className="w-full h-10 bg-gradient-to-r from-green-400 via-blue-500 to-yellow-400 rounded-t-md mb-6"></div>
          <h1 className="text-5xl font-bold text-center mb-6">{slide.title}</h1>

          <table className="w-full border-collapse">
            <tbody>
              {slide.faqs.map((faq, idx) => (
                <tr key={idx} className="border-b border-gray-200">
                  <td className="py-4 align-top">
                    <p className="font-bold text-2xl text-blue-800 mb-2">{faq.question}</p>
                    <p className="text-xl text-gray-700 whitespace-pre-line">{faq.answer}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-right mt-4 text-gray-500 text-lg">
            {currentSlide + 1} / {faqSlides.length}
          </div>
        </div>
      ))}

      <div className="flex space-x-4">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="px-4 py-2 bg-white rounded shadow hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === faqSlides.length - 1}
          className="px-4 py-2 bg-white rounded shadow hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
