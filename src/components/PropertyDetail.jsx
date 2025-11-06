import propertyImg from '../assets/property-sample.png'; 
import heartIcon from '../assets/heart.svg';

export default function PropertyDetail() {
    const property = {
        title: "2-комнатная квартира, 65 м2",
        price: "50 000 у.е",
        location: "Ташкент, Мирзо-Улугбекский р-н",
        floor: "7 из 12",
        totalArea: 65,
        livingArea: 45,
        rooms: 2,
        buildYear: 2022,
        bathroom: "раздельный",
        balcony: "есть",
        renovation: "евро",
        ceilingHeight: "3 м",
        elevator: "пассажирский + грузовой",
        parking: "подземная / наземная",
        image: propertyImg
    };

    return (
        <div className="min-h-screen">
            {/* Табуляции  */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 pb-0">
                <nav className="text-sm text-gray-600">
                    <span>Главная</span>
                    <span className="mx-2">›</span>
                    <span>Каталог</span>
                    <span className="mx-2">›</span>
                    <span>Квартиры</span>
                    <span className="mx-2">›</span>
                    <span className="text-gray-900">2-комнатная, 65 м²</span>
                </nav>
            </div>

            {/* Основной контент */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Изображение */}
                    <div className="w-[620px] h-[530px]">
                        <img 
                            src={property.image} 
                            alt={property.title}
                            className="w-full h-full rounded-2xl object-cover"
                        />
                    </div>

                    {/* Информация */}
                    <div className="rounded-2xl p-6 md:pl-8 pt-0">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            {property.title}
                        </h1>

                        {/* Характеристики */}
                        <div className="space-y-2 mb-4 text-gray-700">
                            <p><span className="font-medium">Локация:</span> {property.location}</p>
                            <p><span className="font-medium">Этаж:</span> {property.floor}</p>
                            <p>
                                <span className="font-medium">Площадь:</span> {property.totalArea} м² 
                                <span className="text-gray-600"> (жилая — {property.livingArea} м²)</span>
                            </p>
                            <p><span className="font-medium">Комнат:</span> {property.rooms}</p>
                            <p><span className="font-medium">Год постройки:</span> {property.buildYear}</p>
                            <p><span className="font-medium">Санузел:</span> {property.bathroom}</p>
                            <p><span className="font-medium">Балкон:</span> {property.balcony}</p>
                            <p><span className="font-medium">Ремонт:</span> {property.renovation}</p>
                            <p><span className="font-medium">Высота потолков:</span> {property.ceilingHeight}</p>
                            <p><span className="font-medium">Лифт:</span> {property.elevator}</p>
                            <p><span className="font-medium">Парковка:</span> {property.parking}</p>
                        </div>

                        {/* Цена */}
                        <div className="mb-8">
                            <p className="text-3xl md:text-4xl font-bold text-gray-900">
                                {property.price}
                            </p>
                        </div>

                        {/* Кнопки */}
                        <div className="grid grid-cols-2 gap-4">
                            <button className="py-3 px-6 border-2 border-blue-900 text-blue-900 rounded-xl font-medium hover:bg-blue-50 transition-colors duration-200">
                                Показать телефон
                            </button>
                            <button className="py-3 px-6 bg-blue-900 text-white rounded-xl font-medium hover:bg-blue-800 transition-colors duration-200">
                                Оставить заявку
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}