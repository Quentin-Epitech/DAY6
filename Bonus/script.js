const cars = [
    { model: 'RS3', color: 'Green', licensePlate: 'EE676NS' },
    { model: 'DB9', color: 'Black', licensePlate: 'PL989NJ' },
    { model: 'FS90', color: 'Red', licensePlate: 'AS321PO' },
    { model: 'M5', color: 'Black', licensePlate: 'TO331EZ' }];
    
document.getElementById('searchBar').addEventListener('input', filterCars);
document.getElementById('searchKey').addEventListener('change', filterCars);

function filterCars() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const searchKey = document.getElementById('searchKey').value;
    const filteredCars = cars.filter(car => car[searchKey].toLowerCase().includes(searchValue));
    displayCars(filteredCars);}

function displayCars(cars) {
    const carList = document.getElementById('carList');
    carList.innerHTML = '';
    cars.forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.classList.add('car');
				carDiv.innerHTML = '<h2>' + car.model + '</h2><p>Couleur: ' + car.color + '</p><p>Plaque d\'immatriculation: ' + car.licensePlate + '</p>';

        carList.appendChild(carDiv);});}
displayCars(cars);
