function addCar(Str, car) {
    const agent = JSON.parse(Str);
    agent.car = car;
    const StrWithCar = JSON.stringify(agent);
    return StrWithCar;
}
const Str = '{"name": "John Doe", "age": 30, "location": "New York"}';
const carBrand = 'Toyota';
const updatedStr = addCar(Str, carBrand);
console.log(updatedStr);
