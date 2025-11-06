import bg from "../assets/intro-bg.png";
import logo from "../assets/logo.png";
import logocation from "../assets/location.svg";

export default function Header() {
    return (
        <div className="relative bg-blue-950 h-[120px]  md:h-[145px] w-full">
            <header className="flex  md:flex-row justify-between items-center px-4 md:px-8 lg:px-36 py-4 md:py-6 text-white w-full">
                <nav className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-10 text-xs md:text-sm mb-4 md:mb-0">
                    <a href="#" className="hover:text-gray-300 transition duration-200">О компании</a>
                    <a href="#" className="hover:text-gray-300 transition duration-200">Каталог</a>
                    <a href="#" className="hover:text-gray-300 transition duration-200">Продать</a>
                    <a href="#" className="hover:text-gray-300 transition duration-200">Контакты</a>
                </nav>

                <img src={logo} alt="Silkway Capital Holding" className="h-16 md:h-20 lg:h-24 mb-4 md:mb-0" />

                <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-8">
                    <button className="flex items-center gap-2 text-xs md:text-sm">
                        <img src={logocation} alt="Location" className="w-4 h-4" /> Ташкент
                    </button>
                    <button className="bg-gray-500/40 hover:bg-gray-500/60 px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm transition whitespace-nowrap">
                        Оставить заявку
                    </button>
                </div>
            </header>
        </div>
    );
}