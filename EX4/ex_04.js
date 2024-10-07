const agent = {}; 
function updateLicensePlates(agent, plates) {
    agent.car = {licensePlates: plates }; 
    return agent; }

function showLicensePlates(agent) {
    const licensePlates = agent.car.licensePlates;    
    const pl = document.querySelector('.plates-container');
    pl.innerHTML = '';
    licensePlates.forEach(plate => {
        const li = document.createElement('li');
        li.textContent = plate;
        pl.appendChild(li);});}
updateLicensePlates(agent, ['LU 6789', '4711-EA-62', 'BMT 216A']);
showLicensePlates(agent);

