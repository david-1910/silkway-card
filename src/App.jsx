import Header from "./components/Header";
import PropertyDetail from "./components/PropertyDetail";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactUs from "./components/ContactUs";
import Map from "./components/Map";
import SellProperty from "./components/SellProperty";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <PropertyDetail />
            <WhyChooseUs />
            <ContactUs />
            <Map />
            <SellProperty />
            <Footer />
        </div>
    );
}