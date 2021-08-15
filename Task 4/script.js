/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
    .then(res => res.json())
    .then(data => data.forEach(element => {
        createCard(element)
    }))

function createCard(data) {
    const randomCar = data;

    const img = document.createElement('img');
    img.classList.add('img-place');
    img.src = randomCar.img;
    img.alt = `${randomCar.brand} foto`


    const carMake = document.createElement('h1').innerText = randomCar.brand;
    const carMakeDiv = document.createElement('div');
    carMakeDiv.classList.add('car-make')


    const carModel = document.createElement('p').innerText = randomCar.models.join(', ');
    const carModelDiv = document.createElement('div');
    carModelDiv.classList.add('one-model')

    const article = document.createElement('article')
    article.classList.add('car-card')
    const container = document.querySelector('#output')

    carModelDiv.append(carModel)
    carMakeDiv.append(carMake)
    article.append(img, carMakeDiv, carModelDiv)
    container.append(article)
}





