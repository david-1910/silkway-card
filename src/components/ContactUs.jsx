import home from '../assets/home.png';
import call from '../assets/call.png';
import phone from '../assets/phone.png';
import email from '../assets/mail.png';
import telegram from '../assets/tg.png';
import whatsapp from '../assets/wp.png';

export default function ContactUs() {
    return (
        <section className="py-8 md:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Левая часть - Информация */}
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 md:mb-4">
                            Свяжитесь с нами
                        </h2>
                        <p className="text-gray-700 font-semibold text-base md:text-lg max-w-full md:max-w-[320px] mb-8 md:mb-12">
                            Наш специалист свяжется с вами в течение 15 минут
                        </p>

                        {/* Контактная информация */}
                        <div className="space-y-6 md:space-y-8">
                            {/* Офис */}
                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="bg-gray-100 rounded-full p-3 md:p-4 flex-shrink-0">
                                    <img src={home} alt="Офис" className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Офис</h3>
                                    <p className="text-gray-600 text-sm md:text-base">221B Бейкер-стрит, Лондон</p>
                                </div>
                            </div>

                            {/* Позвоните нам */}
                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="bg-gray-100 rounded-full p-3 md:p-4 flex-shrink-0">
                                    <img src={call} alt="Телефон" className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Позвоните нам</h3>
                                    <p className="text-gray-600 text-sm md:text-base">+ 998 90 123 4567</p>
                                </div>
                            </div>

                            {/* Напишите нам */}
                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="bg-gray-100 rounded-full p-3 md:p-4 flex-shrink-0">
                                    <img src={email} alt="Email" className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Напишите нам</h3>
                                    <p className="text-gray-600 text-sm md:text-base break-all">qwertyuiop@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Социальные сети */}
                        <div className="mt-8 md:mt-12">
                            <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">
                                Подписывайтесь на наши соцсети
                            </h3>
                            <div className="flex gap-3 md:gap-4">
                                <button className="border-2 border-gray-300 rounded-full p-2.5 md:p-3 hover:border-black transition-colors">
                                    <img src={phone} alt="Phone" className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                                <button className="border-2 border-gray-300 rounded-full p-2.5 md:p-3 hover:border-black transition-colors">
                                    <img src={whatsapp} alt="WhatsApp" className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                                <button className="border-2 border-gray-300 rounded-full p-2.5 md:p-3 hover:border-black transition-colors">
                                    <img src={telegram} alt="Telegram" className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                                <button className="border-2 border-gray-300 rounded-full p-2.5 md:p-3 hover:border-black transition-colors">
                                    <img src={telegram} alt="Telegram" className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Правая часть - Форма */}
                    <div className="bg-gray-50 rounded-3xl p-6 md:p-8">
                        <form className="space-y-5 md:space-y-6">
                            {/* Имя */}
                            <div>
                                <label className="block text-gray-900 font-medium mb-2 text-sm md:text-base">
                                    Имя
                                </label>
                                <input
                                    type="text"
                                    placeholder="Введите свое имя"
                                    className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-gray-200 outline-none focus:ring-2 focus:ring-blue-900 text-sm md:text-base"
                                />
                            </div>

                            {/* Номер телефона */}
                            <div>
                                <label className="block text-gray-900 font-medium mb-2 text-sm md:text-base">
                                    Номер телефона
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Введите номер телефона"
                                    className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-gray-200 outline-none focus:ring-2 focus:ring-blue-900 text-sm md:text-base"
                                />
                            </div>

                            {/* Текст */}
                            <div>
                                <label className="block text-gray-900 font-medium mb-2 text-sm md:text-base">
                                    Текст
                                </label>
                                <textarea
                                    placeholder="Введите ваш текст"
                                    rows="4"
                                    className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-gray-200 outline-none resize-none focus:ring-2 focus:ring-blue-900 text-sm md:text-base"
                                ></textarea>
                            </div>

                            {/* Кнопка отправить */}
                            <button
                                type="submit"
                                className="w-full bg-blue-900 text-white py-3 md:py-4 rounded-xl font-medium hover:bg-blue-800 transition-all duration-200 text-sm md:text-base"
                            >
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}