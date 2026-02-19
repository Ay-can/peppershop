# Peppershop Front-end

## Project starten

Om het project lokaal te draaien:

```bash
# 1. Clone de repository
git clone <repository-url>

# 2. Navigeer naar de projectfolder
cd peppershop

# 3. Installeer dependencies
npm install

# 4. Start de dev server
npm run dev
```
Er zal vervolgens een server starten op localhost:5173

## Architectuur en keuzes
### Feature-based architectuur
De front-end is ingedeeld in mappen per feature. Zo bevat de `src/features/products` folder alle bijbehorende componenten, hooks, types en utils op één plek. 

Bij uitbreiding kunnen nieuwe feature-mappen worden toegevoegd, zoals `cart` voor de winkelwagen, dat zou je dan als `src/features/cart/` kunnen doen, inclusief de bijbehorende componenten. 

Shared components staan apart in de `shared/components` map, wat zorgt voor een duidelijke scheiding en eenvoudige uitbreidbaarheid.

### CSS Modules
Styling is per component lokaal gescoped met CSS Modules, waardoor globale conflicten worden voorkomen. Dit maakt het eenvoudig om de styling van een specifieke component te vinden en aan te passen, terwijl alles overzichtelijk, gescheiden en compact blijft.

De styling vind je samen met het component, dus `features/products/components/ProductCard/ProductCard.module.css` bevat de css en `features/products/components/ProductCard/ProductCard.tsx het component`.

## Filters en dataflow
- Filters worden beheerd via de custom hook `useProductFilters`
- Filters:
  - SearchTerm -> zoekt op productnaam case insensitive
  - maxScoville -> filtert op maximale pittigheid
  - selectedColor -> filtert op productkleur

`  const { filters, setFilters, filteredProducts } = useProductFilters(products);`
`features/products/component/ProductFilters`  geeft de filter UI weer (`SearchInput`, `ColorFilter`, `ScovilleSlider`)
`features/products/utils/filterProducts` wordt gebruikt in de hook om de juiste producten op te halen.

## Verbeterpunten
- Maak gebruik van css variables
- Meer aandacht op responsiveness voor mobiel
- React router voor single pages
- Gebruik maken van test bibliotheek(Playwright, Jest)
