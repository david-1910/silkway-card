import logo from '../assets/logo.png';
import phoneWhite from '../assets/phone-wh.png';
import whatsappWhite from '../assets/wp-wh.png';
import telegramWhite from '../assets/tg-wh.png';

export default function Footer() {
    return (
        <footer className="bg-blue-950 text-white py-6 md:py-8">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Верхняя часть */}
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 pb-6">
                    {/* Логотип */}
                    <div className="flex-shrink-0">
                        <img
                            src={logo}
                            alt="SILKWAY Capital Holding"
                            className="h-20 md:h-24 lg:h-30 w-auto"
                        />
                    </div>

                    {/* Навигация и иконки */}
                    <div className="flex flex-col items-center lg:items-end gap-3 md:gap-4 w-full lg:w-auto">
                        {/* Навигация */}
                        <nav className="flex flex-wrap justify-center lg:justify-end gap-4 md:gap-6 lg:gap-8 text-sm md:text-base font-medium">
                            <a href="#about" className="hover:text-blue-300 transition-colors whitespace-nowrap">
                                О нас
                            </a>
                            <a href="#catalog" className="hover:text-blue-300 transition-colors whitespace-nowrap">
                                Каталог
                            </a>
                            <a href="#sell" className="hover:text-blue-300 transition-colors whitespace-nowrap">
                                Продать
                            </a>
                            <a href="#contacts" className="hover:text-blue-300 transition-colors whitespace-nowrap">
                                Контакты
                            </a>
                        </nav>

                        {/* Социальные иконки */}
                        <div className="flex gap-2.5 md:gap-3">
                            <a
                                href="tel:+998901234567"
                                className="border-2 border-white rounded-full p-2 md:p-2.5 hover:bg-white hover:bg-opacity-10 transition-all"
                            ><img src={phoneWhite} alt="Phone" className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            </a>
                            <a
                                href="https://wa.me/998901234567"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-white rounded-full p-2 md:p-2.5 hover:bg-white hover:bg-opacity-10 transition-all"
                            >
                                <img src={whatsappWhite} alt="WhatsApp" className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            </a>
                            <a
                                href="https://t.me/yourcompany"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-white rounded-full p-2 md:p-2.5 hover:bg-white hover:bg-opacity-10 transition-all"
                            >
                                <img src={telegramWhite} alt="Telegram" className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            </a>
                            <a
                                href="https://t.me/yourcompany"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-white rounded-full p-2 md:p-2.5 hover:bg-white hover:bg-opacity-10 transition-all"
                            >
                                <img src={telegramWhite} alt="Telegram" className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Разделитель */}
                <div className="border-t border-blue-800 my-4 md:my-6"></div>

                {/* Нижняя часть - Контакты */}
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-4 md:gap-6 text-sm md:text-base">
                    <div className="text-center">
                        221B Бейкер-стрит, Лондон
                    </div>
                    <div className="text-center">
                        + 998 90 123 4567
                    </div>
                    <div className="text-center break-all px-4">
                        qwertyuiop@gmail.com
                    </div>
                </div>
            </div>
        </footer>
    );
}