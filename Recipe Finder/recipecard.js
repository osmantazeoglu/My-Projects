export const recipes = [
    {
        id: 1,
        class: 'Beef',
        backgroundImage: 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
        favoriteIcon: '♡',
        title: 'Beef and Mustard Pie',
        mapicon: '<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
        mapText: 'International',
        clickText: 'Click to view full recipe →'
    },
    {
        id: 2,
        class: 'Beef',
        backgroundImage: 'https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg',
        favoriteIcon: '♡',
        title: 'Beef and Oyster Pie',
        mapicon: '<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
        mapText: 'International',
        clickText: 'Click to view full recipe →'
    },
    {
        id: 3,
        class: 'Beef',
        backgroundImage: 'https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg',
        favoriteIcon: '♡',
        title: 'Beef Asado',
        mapicon: '<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
        mapText: 'International',
        clickText: 'Click to view full recipe →'
    },
    {
        id: 4,
        class: 'Beef',
        backgroundImage: 'https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg',
        favoriteIcon: '♡',
        title: 'Beef Bourguignon',
        mapicon: '<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
        mapText: 'International',
        clickText: 'Click to view full recipe →'
    },
    {
        id: 5,
        class: 'Beef',
        backgroundImage: 'https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg',
        favoriteIcon: '♡',
        title: 'Beef Brisket Pot Roast',
        mapicon: '<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
        mapText: 'International',
        clickText: 'Click to view full recipe →'
    },
    {
        id: 6,
        class: 'Beef',
        backgroundImage: 'https://www.themealdb.com/images/media/meals/41cxjh1683207682.jpg',
        favoriteIcon: '♡',
        title: 'Beef Caldereta',
        mapicon: '<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
        mapText: 'International',
        clickText: 'Click to view full recipe →'
    },
    {
        id: 7,
        class: 'Breakfast',
        backgroundImage: 'https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg',
        favoriteIcon: '♡',
        title: 'Bread Omelette',
        mapicon: '<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
        mapText: 'International',
        clickText: 'Click to view full recipe →'
    },
    {
        id: 8,
        class: 'Breakfast',
        backgroundImage: 'https://www.themealdb.com/images/media/meals/1550441882.jpg',
        favoriteIcon: '♡',
        title: 'Breakfast Potatoes',
        mapicon: '<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
        mapText: 'International',
        clickText: 'Click to view full recipe →'
    },
    {
        id: 9,
        class: 'Breakfast',
        backgroundImage: 'https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg',
        favoriteIcon: '♡',
        title: 'English Breakfast',
        mapicon: '<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
        mapText: 'International',
        clickText: 'Click to view full recipe →'
    },
    {
        id: 10,
        class: 'Breakfast',
        backgroundImage: 'https://www.themealdb.com/images/media/meals/sqrtwu1511721265.jpg',
        favoriteIcon: '♡',
        title: 'Full English Breakfast',
        mapicon: '<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
        mapText: 'International',
        clickText: 'Click to view full recipe →'
    },
    {
        id: 11,
        class: 'Breakfast',
        backgroundImage: 'https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg',
        favoriteIcon: '♡',
        title: 'Home-made Mandazi',
        mapicon: '<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
        mapText: 'International',
        clickText: 'Click to view full recipe →'
    },
    {
        id: 1,
        class: 'Chicken',
        backgroundImage: 'https://www.themealdb.com/images/media/meals/020z181619788503.jpg',
        favoriteIcon: '♡',
        title: 'Ayam Percik',
        mapicon: '<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
        mapText: 'International',
        clickText: 'Click to view full recipe →'
    }
];

let recipeCard = document.querySelector('.recipe-card');

export function createRecipeCard(recipe) {
    recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    recipeCard.innerHTML = `
        <div class="recipe-images">
            <div class="icon-part">
                <span class="favorite-icon">${recipe.favoriteIcon}</span>
            </div>
        </div>
        <div class="recipe-info">
            <h3 class="recipe-title">${recipe.title}</h3>
            <p class="recipe-text">${recipe.mapicon} ${recipe.mapText}</p>
            <span class="click-text">${recipe.clickText}</span>
        </div>
    `;

    const favoritesBtn = recipeCard.querySelector('.favorite-icon');
    favoritesBtn.addEventListener('click', () => {
        alert(`${recipe.title} favorilere eklendi`);
    });

    const recipeImageDiv = recipeCard.querySelector('.recipe-images');
    recipeImageDiv.style.backgroundImage = `url('${recipe.backgroundImage}')`;
    recipeImageDiv.style.backgroundSize = 'cover';
    recipeImageDiv.style.backgroundPosition = 'center';
    return recipeCard;
}