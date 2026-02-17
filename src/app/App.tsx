import { Navbar } from "../shared/components/Navbar";
import ProductSearchPage from "../features/products/components/ProductSearchPage";

const links = [
  { label: "Home", href: "/" },
  { label: "Catalogus", href: "/" },
  { label: "Winkelwagen", href: "/" },
];

function App() {
  return (
    <>
      <Navbar brand="Peppershop" links={links} />
      <ProductSearchPage />
    </>
  );
}

export default App;
