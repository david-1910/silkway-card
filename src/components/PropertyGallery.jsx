import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import propertyImg from '../assets/property-sample.png';

export default function PropertyGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [direction, setDirection] = useState(0); // -1: назад, 0: начальное, 1: вперед

    const images = Array(8).fill(propertyImg);

    // Адаптивное количество изображений на странице
    useEffect(() => {
        const updateItemsPerPage = () => {
            const width = window.innerWidth;
            if (width >= 1024) setItemsPerPage(4); // десктоп / планшет
            else if (width >= 640) setItemsPerPage(2); // мобильные
            else setItemsPerPage(1); // мини-устройства
        };

        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    const totalPages = Math.ceil(images.length / itemsPerPage);

    const visibleImages = images.slice(
        currentIndex * itemsPerPage,
        (currentIndex + 1) * itemsPerPage
    );

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex(prev => (prev > 0 ? prev - 1 : totalPages - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex(prev => (prev < totalPages - 1 ? prev + 1 : 0));
    };

    const animationVariants = {
        enter: (direction) => ({
            opacity: 0,
            x: direction > 0 ? 50 : -50
        }),
        center: {
            opacity: 1,
            x: 0
        },
        exit: (direction) => ({
            opacity: 0,
            x: direction < 0 ? 50 : -50
        })
    };

    return (
        <section className="py-12 lg:py-16 bg-white">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">Галерея</h2>

                <div className="relative w-full overflow-hidden">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentIndex}
                            className={`grid gap-5 ${itemsPerPage === 4
                                ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                                : itemsPerPage === 2
                                    ? 'grid-cols-1 sm:grid-cols-2'
                                    : 'grid-cols-1'
                                }`}
                            custom={direction}
                            variants={animationVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5 }}
                        >
                            {visibleImages.map((image, index) => (
                                <div
                                    key={currentIndex * itemsPerPage + index}
                                    className="rounded-2xl overflow-hidden w-full aspect-[3/3]"
                                >
                                    <img
                                        src={image}
                                        alt={`Недвижимость ${currentIndex * itemsPerPage + index + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Кнопки навигации */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center z-10"
                        aria-label="Предыдущая страница"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center z-10"
                        aria-label="Следующая страница"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}