import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { VisionMission } from './sections/VisionMission';
import { ProductRange } from './sections/ProductRange';
import { ProductCatalog } from './sections/ProductCatalog';
import { Certifications } from './sections/Certifications';
import { Footer } from './sections/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <ProductRange />
        <ProductCatalog />
        <Certifications />
        <Footer />
      </main>
    </>
  );
}

export default App;
