import React from 'react';
import Recipe from './Recipe';

const RecipeList = () => {
  return (
    <div>
      <Recipe
        title="Pastel de Chocolate"
        ingredients="Huevos, harina, azúcar, cacao en polvo, mantequilla, leche"
        instructions="Mezclar los ingredientes, hornear a 180°C durante 30 minutos"
      />
      <Recipe
        title="Ensalada César"
        ingredients="Lechuga, pollo, pan, queso parmesano, aderezo"
        instructions="Mezclar los ingredientes y agregar aderezo al gusto"
      />
      {/* Agrega más recetas aquí */}
    </div>
  );
};

export default RecipeList;
