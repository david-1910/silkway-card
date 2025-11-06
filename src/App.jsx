import Header from "./components/Header";
import PropertyDetail from "./components/PropertyDetail";
import PropertyGallery from "./components/PropertyGallery";
import PropertyCard from "./components/PropertyCard";
import Map from "./components/Map";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <PropertyDetail />
            <PropertyGallery />
            <Map />
            <PropertyCard />
            <Footer />
        </div>
    );
}