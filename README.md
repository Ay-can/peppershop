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
Er zal vervolgens een server opstarten op localhost:5173

## Architectuur en keuzes
### Feature-based architectuur
De front-end is ingedeeld in mappen per feature. Zo bevat de `products`-feature alle bijbehorende componenten, hooks, types en utils op één plek. 

Bij uitbreiding kunnen nieuwe feature-mappen worden toegevoegd, zoals `cart` voor de winkelwagen, inclusief de bijbehorende componenten. 

Shared components staan apart in de `shared/components`-map, wat zorgt voor een duidelijke scheiding en eenvoudige uitbreidbaarheid.


### CSS Modules
Styling is per component lokaal gescoped met CSS Modules, waardoor globale conflicten worden voorkomen. Dit maakt het eenvoudig om de styling van een specifieke component te vinden en aan te passen, terwijl alles overzichtelijk, gescheiden en compact blijft.

- features/products bevat alles rondom producten: componenten, data, types etc.
- shared/components bevat de herbruikbare componenten.
- pages/ bevat de paginas.

## Filters en dataflow
- Filters worden beheerd via de hook `useProductFilters`
- Filters:
  - SearchTerm -> zoekt op productnaam case insensitive
  - maxScoville -> filtert op maximale pittigheid
  - selectedColor -> filtert op productkleur

`  const { filters, setFilters, filteredProducts } = useProductFilters(products);`
ProductFilters component geeft de filter UI weer (SearchInput, ColorFilter, ScovilleSlider)
utils/filterProducts wordt gebruikt in de hook om de juiste producten op te halen.

## Verbeterpunten
- Maak gebruik van css variables
- Meer aandacht op responsiveness voor mobiel
- React router voor single pages
- Gebruik maken van test bibliotheek(Playwright, Jest)
