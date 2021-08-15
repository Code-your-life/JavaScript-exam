/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


function calculate(e) {
    e.preventDefault();
    document.querySelector('#output').innerText = ''
    const weightKg = document.querySelector('#search').value
    if (document.querySelector('#search').value == "") {
        alert("Please enter some number");
    } else {
        const weightLb = document.createElement('h1').innerText = `${weightKg} kg = ${weightKg * 2.2046}lb`;
        const divLb = document.createElement('div');
        divLb.classList.add('weigth-place');
        const weightG = document.createElement('h1').innerText = `${weightKg} kg = ${weightKg * 0.0010000}g`;
        const divG = document.createElement('div');
        divG.classList.add('weigth-place');
        const weightOz = document.createElement('h1').innerText = `${weightKg} kg = ${weightKg * 35.274}oz`;
        const divOz = document.createElement('div');
        divOz.classList.add('weigth-place');
        const output = document.querySelector('#output');

        const divWrapper = document.querySelector('.wrapper')
        divLb.append(weightLb)
        divG.append(weightG)
        divOz.append(weightOz)
        output.append(divLb, divG, divOz);
        divWrapper.append(output);

        document.querySelector('#search').value = ''

    }
}

const formAction = document.querySelector('form');
formAction.addEventListener('submit', calculate);
