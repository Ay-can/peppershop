import { Navbar } from "../shared/components/Navbar/Navbar.tsx";
import ProductSearchPage from "../pages/ProductSearchPage/ProductSearchPage";

const links = [
  { label: "Home", href: "#" },
  { label: "Catalogus", href: "##" },
  { label: "Winkelwagen", href: "###" },
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
