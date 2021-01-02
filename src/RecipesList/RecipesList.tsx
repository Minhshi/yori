import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Recipe = {
	id: number;
	name: string;
}

export default function RecipesList() {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
    axios.get('/recipes')
		.then(res => setRecipes(res.data))
	}, []);


	return (
		<div>
			<div>
				Recipes List
			</div>
				<ul>
					{recipes.map((recipe: Recipe) => (
						<li key={recipe.id}>{recipe.name}</li>
					))}
				</ul>
		</div>
	)
}