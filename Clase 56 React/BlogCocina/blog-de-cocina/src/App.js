import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import Recipe from './components/Recipe'; // Importa el componente Recipe

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <Router>
      <div className="App">
        <h1>Blog de Cocina</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/add">Agregar Receta</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" render={() => <RecipeList recipes={recipes} />} />
          <Route path="/add" render={() => <AddRecipeForm onAddRecipe={handleAddRecipe} />} />
          <Route path="/recipe/:id" render={({ match }) => <Recipe recipeId={match.params.id} recipes={recipes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
