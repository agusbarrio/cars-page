import data from '../carsFake.json' assert { type: 'json' };

const d = document;

//get data
const carsList = data.cars;
const params = new URLSearchParams(window.location.search);
const vinNumberParam = params.get('vinNumber');
const car = carsList.find((el) => el.vinNumber === vinNumberParam);

//templates
const $cardTemplate = d.getElementById('card-template');
const $cardLineTemplate = d.getElementById('card-line-template');
const $figureTemplate = d.getElementById('figure-template');

//containers
const $container = d.getElementById('container');
const $cardsContainer = d.getElementById('cards-container');
const $figuresContainer = d.getElementById('figures-container');

//load data
const getCardLine = (label, value) => {
  const $cardLine = $cardLineTemplate.content.cloneNode(true);
  $cardLine.getElementById('card-line-label').textContent = label;
  $cardLine.getElementById('card-line-value').textContent = value;
  return $cardLine;
};

const loadVehicleInformation = ({
  year,
  make,
  model,
  vinNumber,
  status,
  owner,
  licencePlate,
  registrationDate,
  registrationImage,
}) => {
  const $card = $cardTemplate.content.cloneNode(true);
  $card.getElementById('card-title').textContent = 'Vehicle information';
  const $cardBody = $card.getElementById('card-body');
  $cardBody.appendChild(getCardLine('Year', year));
  $cardBody.appendChild(getCardLine('Make', make));
  $cardBody.appendChild(getCardLine('Model', model));
  $cardBody.appendChild(getCardLine('VIN number', vinNumber));
  $cardBody.appendChild(getCardLine('Status', status));
  $cardBody.appendChild(getCardLine('Owner', owner));
  $cardBody.appendChild(getCardLine('Licence plate', licencePlate));
  $cardBody.appendChild(getCardLine('Registration date', registrationDate));
  $cardsContainer.appendChild($card);
};

const loadInsuranceInformation = ({
  insuranceDate,
  insuranceCompany,
  agentName,
  phone,
  policyNumber,
  insuranceCard,
}) => {
  const $card = $cardTemplate.content.cloneNode(true);
  $card.getElementById('card-title').textContent = 'Insurance information';
  const $cardBody = $card.getElementById('card-body');
  $cardBody.appendChild(getCardLine('Insurance date', insuranceDate));
  $cardBody.appendChild(getCardLine('Insurance company', insuranceCompany));
  $cardBody.appendChild(getCardLine('Agent name', agentName));
  $cardBody.appendChild(getCardLine('Phone', phone));
  $cardBody.appendChild(getCardLine('Policy number', policyNumber));
  $cardsContainer.appendChild($card);
};

const loadAdditionalInformation = ({
  oilChangeDate,
  notes,
  millage,
  turo,
  turoStatus,
  sunPassNumber,
}) => {
  const $card = $cardTemplate.content.cloneNode(true);
  $card.getElementById('card-title').textContent = 'Additional information';
  const $cardBody = $card.getElementById('card-body');
  $cardBody.appendChild(getCardLine('Oil change date', oilChangeDate));
  $cardBody.appendChild(getCardLine('Notes', notes));
  $cardBody.appendChild(getCardLine('Millage', millage));
  $cardBody.appendChild(getCardLine('Turo', turo));
  $cardBody.appendChild(getCardLine('Turo status', turoStatus));
  $cardBody.appendChild(getCardLine('sunPassNumber', sunPassNumber));

  $cardsContainer.appendChild($card);
};

const loadFigure = (src, label) => {
  const $figure = $figureTemplate.content.cloneNode(true);
  const $img = $figure.getElementById('figure-img');
  $img.src = src;
  $img.onerror = () => {
    $img.src = './assets/image.svg';
  };
  $figure.getElementById('figure-figcaption').textContent = label;
  $figuresContainer.appendChild($figure);
};

const $title = d.getElementById('car-title');
if (car) {
  $title.textContent = `${car.year} ${car.make} ${car.model}`;
  const $carouselTemplate = d.getElementById('carousel-template');
  const $carouselItemTemplate = d.getElementById('carousel-item-template');
  const $clone = $carouselTemplate.content.cloneNode(true);
  const $mainImg = $clone.getElementById('main-img');
  const $carouselItemsContainer = $clone.getElementById(
    'carousel-items-container'
  );

  $mainImg.src = car.mainPicture;
  const pictures = car.pictures.split(', ');
  pictures.forEach((src) => {
    const $carouselItemClone = $carouselItemTemplate.content.cloneNode(true);
    const $img = $carouselItemClone.getElementById('carousel-item-img');
    $img.src = src;
    $img.onerror = () => {
      $img.src = './assets/image.svg';
    };
    $carouselItemsContainer.appendChild($carouselItemClone);
  });

  $container.appendChild($clone);
  loadVehicleInformation(car);
  loadInsuranceInformation(car);
  loadAdditionalInformation(car);
  loadFigure(car.registrationImage, 'Registration');
  loadFigure(car.insuranceCard, 'Insurance');
} else {
  $title.textContent = 'Car not found';
}
