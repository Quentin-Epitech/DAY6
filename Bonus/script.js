const cars = [
    { model: 'RS3', color: 'Green', licensePlate: 'EE676NS', image: 'RS-3-Sedan-resize-2.jpg' },
    { model: 'DB9', color: 'Black', licensePlate: 'PL989NJ', image: 'aston-martin-db9-coupe-v12-6-0-517-159091262.jpg' },
    { model: 'FS90', color: 'Red', licensePlate: 'AS321PO', image: 'img-ferrari-sf90-spider-rosso-corsa-1014-976x684-c-default.jpg' },
    { model: 'M5', color: 'Black', licensePlate: 'TO331EZ', image: 'fkqbodaldhspea5av95n.jpg' }
];

document.getElementById('searchBar').addEventListener('input', filterCars);
document.getElementById('searchKey').addEventListener('change', filterCars);

function filterCars() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const searchKey = document.getElementById('searchKey').value;
    const filteredCars = cars.filter(function(car) {
        return car[searchKey].toLowerCase().includes(searchValue);
    });
    displayCars(filteredCars);}
function displayCars(cars) {
    const carList = document.getElementById('carList');
    carList.innerHTML = '';  
    cars.forEach(function(car) {
        const carDiv = document.createElement('div');
        carDiv.classList.add('car');      
        carDiv.innerHTML = '<h2>' + car.model + '</h2>' +'<p>Couleur: ' + car.color + '</p>' +'<p>Plaque d\'immatriculation: ' + car.licensePlate + '</p>' +'<img src="' + car.image + '" alt="' + car.model + '" class="car-image">';
        carList.appendChild(carDiv);});}


displayCars(cars);
