document.addEventListener('DOMContentLoaded', function () {
    const recipeContainer = document.getElementById('recipe-container');

    const recipes = [
        { title: 'Pasta Carbonara', description: 'Classic Italian pasta with eggs, cheese, pancetta, and black pepper.', image: 'pasta.jpg' },
        { title: 'Chicken Alfredo', description: 'Creamy Alfredo sauce with grilled chicken served over fettuccine pasta.', image: 'chicken_alfredo.jpg' },
        { title: 'Chocolate Cake', description: 'Moist and rich chocolate cake topped with ganache.', image: 'chocolate_cake.jpg' },
        { title: 'Vegetable Stir Fry', description: 'Colorful mix of fresh vegetables stir-fried to perfection.', image: 'stir_fry.jpg' },
        { title: 'Caprese Salad', description: 'Simple and refreshing salad with tomatoes, mozzarella, and basil.', image: 'caprese_salad.jpeg' },
    ];

    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');

        const img = document.createElement('img');
        img.src = `images/${recipe.image}`;
        img.alt = recipe.title;
        img.classList.add('recipe-img');

        const info = document.createElement('div');
        info.classList.add('recipe-info');

        const title = document.createElement('h2');
        title.classList.add('recipe-title');
        title.textContent = recipe.title;

        const description = document.createElement('p');
        description.classList.add('recipe-description');
        description.textContent = recipe.description;

        const button = document.createElement('button');
        button.classList.add('recipe-button');
        button.textContent = 'View Recipe';

        info.appendChild(title);
        info.appendChild(description);
        info.appendChild(button);

        card.appendChild(img);
        card.appendChild(info);

        recipeContainer.appendChild(card);
    });
});
