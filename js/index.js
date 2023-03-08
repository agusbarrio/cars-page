import data from '../carsFake.json' assert { type: 'json' };

const carsList = data.cars;
const d = document;
const $cardTemplate = d.getElementById('card-template');
const $cardsContainer = d.getElementById('cards-container');

if ('content' in document.createElement('template')) {
  carsList.forEach((carInfo) => {
    const clone = $cardTemplate.content.cloneNode(true);
    const $img = clone.getElementById('car-img');
    const $title = clone.getElementById('car-title');
    const $subtitle = clone.getElementById('car-subtitle');
    const $carLine1 = clone.getElementById('car-line-1');
    const $carLine2 = clone.getElementById('car-line-2');
    const $carLine3 = clone.getElementById('car-line-3');
    const $carLine4 = clone.getElementById('car-line-4');
    const $carLine5 = clone.getElementById('car-line-5');
    const $registrationLink = clone.getElementById('car-registration-link');
    const $insuranceLink = clone.getElementById('car-insurance-link');
    const $picturesLink = clone.getElementById('car-pictures-link');
    const $infoLink = clone.getElementById('car-info-link');

    $img.src = carInfo.mainPicture;
    $title.textContent = `${carInfo.year} ${carInfo.make} ${carInfo.model}`;
    $subtitle.textContent = `Licence plate ${carInfo.licencePlate}`;
    $carLine1.lastChild.textContent = carInfo.registrationDate;
    $carLine2.lastChild.textContent = carInfo.insuranceDate;
    $carLine3.lastChild.textContent = carInfo.status;
    $carLine4.lastChild.textContent = carInfo.oilChangeDate;
    $carLine5.lastChild.textContent = carInfo.millage;
    //Agregar links de google drive
    $registrationLink.href = '';
    $insuranceLink.href = '';
    $picturesLink.href = '';
    $infoLink.href = `./car.html?vinNumber=${carInfo.vinNumber}`;

    $cardsContainer.appendChild(clone);
  });
} else {
  $cardsContainer.textContent = 'the HTML template element is not supported.';
}
