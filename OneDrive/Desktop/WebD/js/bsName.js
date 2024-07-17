//generate a business name from list of adjectives, shop names and other words.
const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max-min+1)) + min;
}
const adj = ["Only", "New", "Crazy", "Happy", "Stylish", "Modern"];
const shop = ["fashion", "clothes", "foods", "steel", "electronics", "gift gallery", "cyber cafe"];
const other = ["ltd", "hub", "company", "shop", "pvt"];

const ra = generateRandom(0, adj.length-1);
const sa = generateRandom(0, shop.length-1);
const oa = generateRandom(0, other.length-1);

console.log("Random business name: " + adj[ra] , shop[sa] , other[oa]);