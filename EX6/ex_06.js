function voiture(brand, model, year, color) {
    return {
        brand: brand,
        model: model,
        year: year,
        color: color,
        isMatching: function(key, value) {
            return this[key] === value;} };}

function cree(name, cars) {
    return {name: name,cars: cars,
        isMatching: function(key, value) {
            return this.cars.some(car => car.isMatching(key, value)); }};}

function searchCars(conducteurs, key, value) {
    const matchingCars = [];
    for (const conducteur of conducteurs) {
        for (const car of conducteur.cars) {
            if (car.isMatching(key, value)) {
                matchingCars.push({
                    brand: car.brand,
                    model: car.model,
                    year: car.year,
                    color: car.color});}}}
    return matchingCars;}

const car1 = voiture('Audi', 'RS3', 2022, 'Gray');
const car2 = voiture('Ferrari', 'F40', 1988, 'Red');
const car3 = voiture('Range-rover', 'Velar', 2024, 'Black');

const conducteur1 = cree('Quentin', [car1, car2]);
const conducteur2 = cree('Hamza', [car3]);

const conducteurs = [conducteur1, conducteur2];
const resultat = searchCars(conducteurs, 'color', 'Red');
console.log(resultat); 