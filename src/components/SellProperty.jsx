import houseImage from '../assets/house-3d.png';

export default function SellProperty() {
    return (
        <section className="py-8 md:py-12 lg:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl md:rounded-3xl overflow-hidden relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                        {/* Левая часть - Текст и кнопка */}
                        <div className="text-white p-6 md:p-10 lg:p-14 relative z-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-tight max-w-full lg:max-w-lg">
                                Хотите выгодно продать свою недвижимость?
                            </h2>
                            <p className="text-sm md:text-base text-blue-100 mb-5 md:mb-6 max-w-full lg:max-w-lg">
                                Наши специалисты обеспечат честную оценку, грамотную презентацию и быстрый результат
                            </p>
                            <button className="bg-blue-700 hover:bg-blue-600 text-white w-full md:w-[350px] lg:w-[400px] py-3 md:py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg text-sm md:text-base">
                                Предложить
                            </button>
                        </div>

                        {/* Правая часть - Изображение */}
                        <div className="relative h-48 md:h-64 lg:h-full flex items-end justify-center lg:justify-end lg:absolute lg:right-0 lg:bottom-0 lg:top-0">
                            <img 
                                src={houseImage} 
                                alt="Современный дом"
                                className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain lg:object-right-bottom h-full opacity-80 lg:opacity-100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}