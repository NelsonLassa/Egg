import React, { useState } from 'react';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [imageFile, setImageFile] = useState(null); // Estado para el archivo de imagen (no controlado)

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      title,
      ingredients,
      instructions,
      image: imageFile, // Utilizamos el estado del archivo de imagen no controlado
    };
    onAddRecipe(newRecipe);
    setTitle('');
    setIngredients('');
    setInstructions('');
    setImageFile(null); // Reiniciamos el estado del archivo de imagen
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título de la receta"
      />
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredientes"
      />
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Instrucciones"
      />
      <input
        type="file"
        onChange={(e) => setImageFile(e.target.files[0])} // Actualizamos el estado del archivo de imagen
      />
      <button type="submit">Agregar Receta</button>
    </form>
  );
};

export default AddRecipeForm;
