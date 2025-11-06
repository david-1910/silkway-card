import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import propertyImg from "../assets/property-sample.png";
import heartIcon from "../assets/heart.svg";

export default function PropertyGallery() {
    const properties = [
        {
            id: 1,
            price: "50 000 у.е",
            rooms: 2,
            area: 58,
            floor: "2/6",
            address: "Ташкент, Юнусабадский район, массив Юнусабад, 5-й квартал",
            image: propertyImg,
            mortgage: true,
        },
        {
            id: 2,
            price: "52 000 у.е",
            rooms: 3,
            area: 72,
            floor: "3/9",
            address: "Ташкент, Мирзо-Улугбекский район, ул. Ахмад Доніш",
            image: propertyImg,
            mortgage: true,
        },
        {
            id: 3,
            price: "49 500 у.е",
            rooms: 2,
            area: 55,
            floor: "1/6",
            address: "Ташкент, Юнусабадский район, 7-й квартал",
            image: propertyImg,
            mortgage: true,
        },
        {
            id: 4,
            price: "54 000 у.е",
            rooms: 3,
            area: 68,
            floor: "4/8",
            address: "Ташкент, Чиланзарский район, массив Чиланзар-24",
            image: propertyImg,
            mortgage: true,
        },
        {
            id: 5,
            price: "53 000 у.е",
            rooms: 2,
            area: 60,
            floor: "5/9",
            address: "Ташкент, Мирабадский район, ул. Фидокорлар",
            image: propertyImg,
            mortgage: true,
        },
        {
            id: 6,
            price: "55 000 у.е",
            rooms: 3,
            area: 75,
            floor: "3/7",
            address: "Ташкент, Шайхантахурский район, массив Каракамыш",
            image: propertyImg,
            mortgage: true,
        },
        {
            id: 7,
            price: "48 000 у.е",
            rooms: 2,
            area: 52,
            floor: "2/5",
            address: "Ташкент, Яккасарайский район, ул. Навои",
            image: propertyImg,
            mortgage: true,
        },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);

    // Адаптивное количество карточек
    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setVisibleCount(3); // десктоп
            } else if (width >= 768) {
                setVisibleCount(2); // планшет
            } else {
                setVisibleCount(1); // мобильные
            }
        };

        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);
        return () => window.removeEventListener('resize', updateVisibleCount);
    }, []);

    const handlePrev = () => {
        setDirection(-1);
        setStartIndex((prev) =>
            prev === 0 ? properties.length - visibleCount : prev - visibleCount
        );
    };

    const handleNext = () => {
        setDirection(1);
        setStartIndex((prev) =>
            prev + visibleCount >= properties.length ? 0 : prev + visibleCount
        );
    };

    // Получаем видимые свойства с учетом циклического перехода
    const getVisibleProperties = () => {
        let visibleProperties = properties.slice(startIndex, startIndex + visibleCount);
        
        if (visibleProperties.length < visibleCount) {
            const remaining = visibleCount - visibleProperties.length;
            visibleProperties = [...visibleProperties, ...properties.slice(0, remaining)];
        }
        
        return visibleProperties;
    };

    const visibleProperties = getVisibleProperties();

    // Определяем классы сетки в зависимости от количества видимых элементов
    const getGridClass = () => {
        switch (visibleCount) {
            case 1:
                return "grid-cols-1 max-w-sm mx-auto";
            case 2:
                return "grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto";
            case 3:
                return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto";
            default:
                return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
        }
    };

    // Фиксированная высота контейнера для предотвращения дергания
    const getContainerHeight = () => {
        switch (visibleCount) {
            case 1:
                return "h-[500px] md:h-[520px]";
            case 2:
                return "h-[500px] md:h-[520px]";
            case 3:
                return "h-[500px] md:h-[520px]";
            default:
                return "h-[500px]";
        }
    };

    const variants = {
        enter: (dir) => ({
            x: dir > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (dir) => ({
            x: dir > 0 ? -300 : 300,
            opacity: 0,
            scale: 0.95,
        }),
    };

    return (
        <section className="py-8 md:py-12 lg:py-16 bg-white">
            <div className="px-4 md:px-6 lg:px-8 relative overflow-hidden">
                {/* Заголовок */}
                <div className="max-w-7xl mx-auto mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
                        Похожие объекты
                    </h2>
                </div>

                {/* Контейнер с фиксированной высотой */}
                <div className={`relative ${getContainerHeight()} flex items-center`}>
                    <AnimatePresence custom={direction} mode="popLayout" initial={false}>
                        <motion.div
                            key={`${startIndex}-${visibleCount}`}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                            }}
                            className={`grid gap-4 md:gap-6 w-full ${getGridClass()}`}
                        >
                            {visibleProperties.map((property) => (
                                <motion.div
                                    key={property.id}
                                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                                    layout
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Фото */}
                                    <div className="relative h-48 md:h-56 lg:h-64 flex-shrink-0">
                                        <img
                                            src={property.image}
                                            alt="Недвижимость"
                                            className="w-full h-full object-cover"
                                        />
                                        <button className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/60 transition-all duration-200">
                                            <img
                                                src={heartIcon}
                                                alt="Избранное"
                                                className="w-4 h-4 md:w-5 md:h-5"
                                            />
                                        </button>
                                    </div>

                                    {/* Инфо */}
                                    <div className="flex flex-col justify-between flex-1 p-4 md:p-6">
                                        <div>
                                            {property.mortgage && (
                                                <span className="inline-block bg-green-400 text-white text-xs md:text-sm px-3 py-1 rounded-full mb-3">
                                                    Возможна ипотека
                                                </span>
                                            )}
                                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                                                {property.price}
                                            </h3>
                                            <p className="text-xs md:text-sm text-gray-600 mb-2">
                                                {property.rooms} комн. кв | {property.area} м² | {property.floor} этаж
                                            </p>
                                            <p className="text-xs md:text-sm text-gray-700 line-clamp-2 mb-4">
                                                {property.address}
                                            </p>
                                        </div>

                                        {/* Кнопка */}
                                        <button className="w-full bg-blue-900 text-white py-2.5 rounded-xl hover:bg-blue-800 transition-all duration-200 font-medium text-sm mt-auto">
                                            Подробнее
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Кнопки навигации */}
                <div className="flex justify-center items-center gap-4 mt-8 md:mt-12">
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 shadow-sm"
                        aria-label="Предыдущие объекты"
                    >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    {/* Индикатор */}
                    <div className="flex items-center gap-2 mx-4">
                        <span className="text-sm text-gray-600">
                            {Math.floor(startIndex / visibleCount) + 1} / {Math.ceil(properties.length / visibleCount)}
                        </span>
                    </div>
                    
                    <button
                        onClick={handleNext}
                        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 shadow-sm"
                        aria-label="Следующие объекты"
                    >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}