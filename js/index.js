import data from '../carsFake.json' assert { type: 'json' };

const carsList = data.cars;
const d = document;
const $cardTemplate = d.getElementById('card-template');
const $cardsContainer = d.getElementById('cards-container');

/* 
 {
        *************** "year": "2006",
        *************** "make": "Honda",
        *************** "model": "Civic",
        "vinNumber": "1HGFA16806L000001",
        *************** "mainPicture": "https://w0.peakpx.com/wallpaper/33/837/ HD-wallpaper-2017-jaguar-f-pace-2-0d-r-sport-awd-diesel-color-italian-racing-red-front-car.jpg",
        "pictures": "https://example.com/honda-civic-1.jpg, https://example.com/honda-civic-2.jpg",
        *************** "status": "Active",
        "owner": "John Doe",
        *************** "licencePlate": "ABC123",
        *************** "registrationDate": "2020-01-01",
        "registrationImage": "https://example.com/honda-civic-registration.jpg",
        *************** "insuranceDate": "2020-02-01",
        "insuranceCard": "https://example.com/honda-civic-insurance.jpg",
        *************** "oilChangeDate": "2020-03-01",
        "notes": "",
        *************** "millage": "25000",
        "turo": "No",
        "turoStatus": "",
        "insuranceCompany": "ABC Insurance",
        "agentName": "John Smith",
        "phone": "555-555-5555",
        "policyNumber": "ABC12345",
        "sunPassNumber": ""
    },
*/

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

  $img.src = carInfo.mainPicture;
  $title.textContent = `${carInfo.year} ${carInfo.make} Model ${carInfo.model}`;
  $subtitle.textContent = `Licence plate ${carInfo.licencePlate}`;
  console.log($carLine1.textContent);
  $carLine1.lastChild.textContent = carInfo.registrationDate;
  $carLine2.lastChild.textContent = carInfo.insuranceDate;
  $carLine3.lastChild.textContent = carInfo.status;
  $carLine4.lastChild.textContent = carInfo.oilChangeDate;
  $carLine5.lastChild.textContent = carInfo.millage;

  $cardsContainer.appendChild(clone);
});
