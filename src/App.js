import AllSuggestions from "./components/DishSuggestion/AllSuggestions";
import Header from "./components/Header/Header";
import AllIngredients from "./components/Ingredients/AllIngredients";
import Prayers from "./components/PrayersCard/Prayers";
import Search from "./components/SearchArea/Search";

function App() {
  return (
    <div className="App">
      <div className="left-section">
        <Header />
        <Search />
        <AllIngredients />
        <AllSuggestions />
      </div>
      <div className="right-ssection">
        <Prayers />
      </div>
    </div>
  );
}

export default App;
