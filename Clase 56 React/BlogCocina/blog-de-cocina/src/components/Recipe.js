import React from 'react';

const Recipe = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Ingredientes: {props.ingredients}</p>
      <p>Instrucciones: {props.instructions}</p>
    </div>
  );
};

export default Recipe;

  
