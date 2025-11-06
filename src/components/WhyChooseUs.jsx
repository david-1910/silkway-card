import globeIcon from '../assets/global.png';
import shieldIcon from '../assets/shield.png';
import peopleIcon from '../assets/people.png';
import buildingIcon from '../assets/building.png';

export default function WhyChooseUs() {
    const features = [
        {
            id: 1,
            icon: globeIcon,
            title: "Международный уровень сервиса",
        },
        {
            id: 2,
            icon: shieldIcon,
            title: "Юридическая защита и доверие",
        },
        {
            id: 3,
            icon: peopleIcon,
            title: "Команда экспертов с опытом 20+ лет",
        },
        {
            id: 4,
            icon: buildingIcon,
            title: "Доступ к эксклюзивным объектам",
        }
    ];

    return (
        <section className="py-8 md:py-12 lg:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="p-6 md:p-8 lg:p-12">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3 md:mb-4">
                            Почему выбирают нас!
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 max-w-xl md:max-w-2xl mx-auto px-4">
                            Мы предлагаем полный цикл услуг — от подбора и оценки объектов до сопровождения иностранных инвестиций и юридической поддержки
                        </p>
                    </div>

                    {/* Сетка преимуществ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="bg-blue-900 rounded-2xl p-4 md:p-5 mb-3 md:mb-4">
                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className="w-6 h-6 md:w-8 md:h-8"
                                    />
                                </div>
                                <h3 className="text-base md:text-lg font-medium text-gray-900 max-w-[200px] md:max-w-[220px] leading-snug px-2">
                                    {feature.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}