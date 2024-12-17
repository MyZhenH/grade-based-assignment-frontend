/**
 * Då json-objektet som representerar en cocktail är lite
 * halvtokigt utformat av de som utvecklat API:et, så har ni
 * här en hjälpfunktion som konverterar den halvtoiga datan
 * till ett mer lättarbetat objekt istället. Bortrensat är
 * alla ingredienser och measures som är null samt ett antal
 * attribut som ni inte kommer att han någon användning för.
 */
export function mapRawCocktailData(rawCocktial) {
  return {
    id: rawCocktial.idDrink,
    name: rawCocktial.strDrink,
    tags: rawCocktial.strTags ? rawCocktial.strTags.split(",") : [],
    category: rawCocktial.strCategory,
    alcoholic: rawCocktial.strAlcoholic === "Alcoholic",
    glass: rawCocktial.strGlass,
    instructions: rawCocktial.strInstructions,
    thumbnail: rawCocktial.strDrinkThumb,
    ingredients: Array.from({ length: 15 })
      .map((_, i) => ({
        ingredient: rawCocktial[`strIngredient${i + 1}`],
        measure: rawCocktial[`strMeasure${i + 1}`],
      }))
      .filter((item) => item.ingredient),
  };
}



