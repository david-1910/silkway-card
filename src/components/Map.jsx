export default function Map() {
    return (
        <section className="py-8 md:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Карта */}
                <div className="bg-gray-200 rounded-2xl md:rounded-3xl overflow-hidden h-[200px] md:h-[250px] lg:h-[300px] shadow-lg">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=69.240562,41.311151&z=15&l=map"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen
                        title="Карта"
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}