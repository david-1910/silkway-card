import propertyImg from '../assets/property-sample.png'; 
import heartIcon from '../assets/heart.svg';

export default function PropertyDetail() {
    const properties = [
        {
            id: 1,
            price: "50 000 у.е",
            rooms: 2,
            area: 58,
            floor: "2/6",
            address: "Ташкент, Юнусабадский район, массив Юнусабад, 5-й квартал",
            image: propertyImg,
            mortgage: true
        },
        {
            id: 2,
            price: "50 000 у.е",
            rooms: 2,
            area: 58,
            floor: "2/6",
            address: "Ташкент, Юнусабадский район, массив Юнусабад, 5-й квартал",
            image: propertyImg,
            mortgage: true
        },
        {
            id: 3,
            price: "50 000 у.е",
            rooms: 2,
            area: 58,
            floor: "2/6",
            address: "Ташкент, Юнусабадский район, массив Юнусабад, 5-й квартал",
            image: propertyImg,
            mortgage: true
        },
        {
            id: 4,
            price: "50 000 у.е",
            rooms: 2,
            area: 58,
            floor: "2/6",
            address: "Ташкент, Юнусабадский район, массив Юнусабад, 5-й квартал",
            image: propertyImg,
            mortgage: true
        },
        {
            id: 5,
            price: "50 000 у.е",
            rooms: 2,
            area: 58,
            floor: "2/6",
            address: "Ташкент, Юнусабадский район, массив Юнусабад, 5-й квартал",
            image: propertyImg,
            mortgage: true
        },
        {
            id: 6,
            price: "50 000 у.е",
            rooms: 2,
            area: 58,
            floor: "2/6",
            address: "Ташкент, Юнусабадский район, массив Юнусабад, 5-й квартал",
            image: propertyImg,
            mortgage: true
        }
    ];

    return (
        <section className="py-8 md:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Заголовок */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
                        Лучшие предложения месяца
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg px-4">
                        Подборка самых актуальных и выгодных предложений
                    </p>
                </div>

                {/* Карточки объектов */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {properties.map((property) => (
                        <div 
                            key={property.id} 
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Изображение */}
                            <div className="relative h-48 md:h-56 lg:h-64">
                                <img 
                                    src={property.image} 
                                    alt="Недвижимость" 
                                    className="w-full h-full object-cover"
                                />
                                {/* Кнопка избранного */}
                                <button className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/60 transition-all duration-200">
                                    <img 
                                        src={heartIcon} 
                                        alt="Избранное" 
                                        className="w-4 h-4 md:w-5 md:h-5"
                                    />
                                </button>
                            </div>

                            {/* Информация */}
                            <div className="p-4 md:p-6">
                                {/* Бейдж ипотеки */}
                                {property.mortgage && (
                                    <span className="inline-block bg-green-400 text-white text-xs md:text-sm px-3 md:px-4 py-1 rounded-full mb-3 md:mb-4">
                                        Возможна ипотека
                                    </span>
                                )}

                                {/* Цена */}
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                    {property.price}
                                </h3>

                                {/* Характеристики */}
                                <p className="text-sm md:text-base text-gray-600 mb-2 md:mb-3">
                                    {property.rooms} комн. кв | {property.area} м2 | {property.floor} этаж
                                </p>

                                {/* Адрес */}
                                <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 line-clamp-2">
                                    {property.address}
                                </p>

                                {/* Кнопка */}
                                <button className="w-full bg-blue-900 text-white py-2.5 md:py-3 rounded-xl hover:bg-blue-800 transition-all duration-200 font-medium text-sm md:text-base">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}