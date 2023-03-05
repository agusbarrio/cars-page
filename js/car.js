import data from '../carsFake.json' assert { type: 'json' };

const carsList = data.cars;
const params = new URLSearchParams(window.location.search);
const vinNumberParam = params.get('vinNumber');
const car = carsList.find((el) => el.vinNumber === vinNumberParam);
const d = document;

/* 
Vehicle Information
Year: 2006
Make: Honda
Model: Civic
VIN Number: 1HGFA16806L000001
Pictures: https://example.com/honda-civic-1.jpg, https://example.com/honda-civic-2.jpg
Status: Active
Owner: John Doe
License Plate: ABC123
Registration Date: 2020-01-01
Registration Image: https://example.com/honda-civic-registration.jpg

Insurance Information
Insurance Date: 2020-02-01
Insurance Card: https://example.com/honda-civic-insurance.jpg
Insurance Company: ABC Insurance
Agent Name: John Smith
Phone: 555-555-5555
Policy Number: ABC12345

Additional Information
Oil Change Date: 2020-03-01
Notes:
Millage: 25000
Turo: No
Turo Status:
SunPass Number:
*/

const $title = d.getElementById('car-title');
if (car) {
  $title.textContent = `${car.year} ${car.make} ${car.model}`;
  const $template = d.getElementById('car-info-template');
  const $carouselItemTemplate = d.getElementById('carousel-item-template');
  const $clone = $template.content.cloneNode(true);
  const $mainImg = $clone.getElementById('main-img');
  const $carouselItemsContainer = $clone.getElementById(
    'carousel-items-container'
  );

  const $container = d.getElementById('container');

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
  //TODO seguir agregando info
  //TODO ver que no se deformen las imagenes
} else {
  $title.textContent = 'Car not found';
}
