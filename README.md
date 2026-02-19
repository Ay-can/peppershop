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
- De front-end heb ik gedeelt in mappen per feature, in dit geval dus het feature voor producten met de bijbehorende componenten en utils in dezelfde feature map. In het geval van uitbreiding zou je andere feature mappen maken bijvoorbeeld feature/cart voor de winkelwagen met eventueel de bijbehorende componenten.
Dit maakt het gescheiden en makkelijk uitbreidbaar, shared components zijn apart te vinden in een map met shared components.

### CSS Modules
Styling is lokaal gescoped per component door het gebruik maak van Modules die ervoor zorgen dat we geen global conflicts hebben en alles goed samenkoppelt, ik vind dit fijn omdat ik gelijk weet waar ik moet zijn om de style van een bepaalde component aan te passen, ook houdt het alles netjes gescheiden en relatief compact.

- features/products bevat alles rondom producten: componenten, data, types etc.
- shared/components bevat de herbruikbare componenten
- pages/ bevat de paginas.

## Filters en dataflow
- Filters worden beheerd via de hook `useProductFilters`
- Filters:
  - SearchTerm -> zoekt op productnaam case insensitive
  - maxScoville -> filtert op maximale pittigheid
  - selectedColor -> filtert op productkleur

`  const { filters, setFilters, filteredProducts } = useProductFilters(products);`
ProductFilters component geeft de filter UI weer (SearchInput, ColorFilter, ScovilleSlider)
utils/filterProducts wordt gebruikt in de hook om de juiste producten te tonen.

## Verbeterpunten
- Maak gebruik van css variables
- Meer aandacht op responsiveness voor mobiel
- React router voor single pages
- Gebruik maken van test bibliotheek(Playwright, Jest)
