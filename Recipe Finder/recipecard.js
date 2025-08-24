const recipes = [
{
    id: 1,
    class: 'beef',
    backgorundImage: 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
    favoriteIcon:'♡',
    title:'Beef and Mustard Pie',
    mapicon:'<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
    mapText:'International',
    clickText:'Click to view full recipe →'
},
{
    id: 2,
    class: 'beef',
    backgorundImage: 'https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg',
    favoriteIcon:'♡',
    title:'Beef and Oyster Pie',
    mapicon:'<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
    mapText:'International',
    clickText:'Click to view full recipe →'
},
{
    id: 3,
    class: 'beef',
    backgorundImage: 'https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg',
    favoriteIcon:'♡',
    title:'Beef Asado',
    mapicon:'<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
    mapText:'International',
    clickText:'Click to view full recipe →'
},
{
    id: 4,
    class: 'beef',
    backgorundImage: 'https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg',
    favoriteIcon:'♡',
    title:'Beef Bourguignon',
    mapicon:'<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
    mapText:'International',
    clickText:'Click to view full recipe →'
},
{
    id: 5,
    class: 'beef',
    backgorundImage: 'https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg',
    favoriteIcon:'♡',
    title:'Beef Brisket Pot Roast',
    mapicon:'<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
    mapText:'International',
    clickText:'Click to view full recipe →'
},
{
    id: 6,
    class: 'beef',
    backgorundImage: 'https://www.themealdb.com/images/media/meals/41cxjh1683207682.jpg',
    favoriteIcon:'♡',
    title:'Beef Caldereta',
    mapicon:'<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
    mapText:'International',
    clickText:'Click to view full recipe →'
},
{
    id: 7,
    class: 'breakfast',
    backgorundImage: 'https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg',
    favoriteIcon:'♡',
    title:'Bread Omelette',
    mapicon:'<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
    mapText:'International',
    clickText:'Click to view full recipe →'
},
{
    id: 8,
    class: 'breakfast',
    backgorundImage: 'https://www.themealdb.com/images/media/meals/1550441882.jpg',
    favoriteIcon:'♡',
    title:'Breakfast Potatoes',
    mapicon:'<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
    mapText:'International',
    clickText:'Click to view full recipe →'
},
{
    id: 9,
    class: 'breakfast',
    backgorundImage: 'https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg',
    favoriteIcon:'♡',
    title:'English Breakfast',
    mapicon:'<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
    mapText:'International',
    clickText:'Click to view full recipe →'
},
{
    id: 10,
    class: 'breakfast',
    backgorundImage: 'https://www.themealdb.com/images/media/meals/sqrtwu1511721265.jpg',
    favoriteIcon:'♡',
    title:'Full English Breakfast',
    mapicon:'<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
    mapText:'International',
    clickText:'Click to view full recipe →'
},
{
    id: 11,
    class: 'breakfast',
    backgorundImage: 'https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg',
    favoriteIcon:'♡',
    title:'Home-made Mandazi',
    mapicon:'<i id="mapicon" class="fas fa-location-dot map-icon"></i>',
    mapText:'International',
    clickText:'Click to view full recipe →'
}
];

function createRecipeCard(recipe){
    const RecipesCard = document.createElement('div');
    RecipesCard.classList.add('recipes-card');
}