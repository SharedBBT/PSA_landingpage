
export default function SolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Japanese%20business%20professional%20collaborating%20with%20AI%20technology%20for%20problem%20solving%2C%20modern%20workspace%20with%20digital%20tools%20and%20analytics%2C%20person%20engaged%20in%20strategic%20thinking%20and%20analysis%2C%20innovative%20learning%20environment%2C%20professional%20development%20through%20technology%2C%20clean%20modern%20design%20with%20blue%20accents%2C%20Asian%20professional%20in%20business%20attire&width=600&height=500&seq=solution-img-jp&orientation=landscape"
              alt="AI協働による問題解決"
              className="w-full rounded-2xl shadow-xl object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              私たちが提供するのは<br />
              <span className="text-blue-600">思考のトレーニング</span><br />
              Bootcamp
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-user-star-line text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">あなたは「受講者」ではなく「実践者」</h3>
                  <p className="text-gray-600">インプットするのではなく、アウトプットを通じて「できる」スキルを掴み取る</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-lightbulb-line text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">あなた自身のリアルな課題が教材</h3>
                  <p className="text-gray-600">架空のケーススタディではなく、今まさに直面している実際の課題で学習</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-robot-line text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">AIという「最強の思考パートナー」</h3>
                  <p className="text-gray-600">1日30分、継続的に課題解決の全プロセスを実践</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-2">あなたが手に入れるもの</h4>
              <p className="text-blue-800">
                「自らの問題で、AIを活用し、自ら解を導き出す力」<br />
                それこそが、あなたがこのコースで得られる価値です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
