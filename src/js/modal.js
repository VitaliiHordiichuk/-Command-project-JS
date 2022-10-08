// Get Ref
const ref = {
  boxItems: document.querySelector('.gallery'),
  backDrop: document.querySelector('.modal__backdrop'),
  buttonCloseModal: document.querySelector('.close-modal'),
  buttonMoreLoad: document.querySelector('.more-btn'),
  inputResearch: document.querySelector('.input-text'),
};

// Get ref to element on window
const refWindow = {
  info: document.querySelector('.info'),
  time: document.querySelector('.time'),
  position: document.querySelector('.position'),
  author: document.querySelector('.author'),
  price: document.querySelector('.price'),
  imageBig: document.querySelector('.big-icon'),
  imageLittle: document.querySelector('.little-icon'),
};

// Add event listener for open
ref.boxItems.addEventListener('click', onClickEvent);

// Open modal window
function onClickEvent(e) {
  if (!e.target.classList.contains('item')) return;

  // Get value from item and put them to window
  let values = getValue(e.target);
  inputDataToWindow(values);

  // Show modal window
  ref.backDrop.classList.toggle('is-hidden');

  // Add event listener for close modal window
  window.addEventListener('keydown', onKeydownESC);
  ref.buttonCloseModal.addEventListener('click', onClickButtonClose);
  ref.backDrop.addEventListener('click', OnClickBackDrop);
  ref.buttonMoreLoad.addEventListener('click', onClickButtonLoadMore);
}

// Close modal window after press ESC
function onKeydownESC(e) {
  if (e.code === 'Escape') {
    ref.backDrop.classList.toggle('is-hidden');
    window.removeEventListener('keydown', onKeydownESC);
    ref.buttonCloseModal.removeEventListener('click', onClickButtonClose);
    ref.backDrop.removeEventListener('click', OnClickBackDrop);
    ref.buttonMoreLoad.removeEventListener('click', onClickButtonLoadMore);
  }
}

// Close modal window after click button
function onClickButtonClose() {
  ref.backDrop.classList.toggle('is-hidden');
  window.removeEventListener('keydown', onKeydownESC);
  ref.buttonCloseModal.removeEventListener('click', onClickButtonClose);
  ref.backDrop.removeEventListener('click', OnClickBackDrop);
  ref.buttonMoreLoad.removeEventListener('click', onClickButtonLoadMore);
}

// Close modal window after click on backdrop
function OnClickBackDrop(e) {
  if (e.target === ref.backDrop) {
    ref.backDrop.classList.toggle('is-hidden');
    window.removeEventListener('keydown', onKeydownESC);
    ref.buttonCloseModal.removeEventListener('click', onClickButtonClose);
    ref.backDrop.removeEventListener('click', OnClickBackDrop);
    ref.buttonMoreLoad.removeEventListener('click', onClickButtonLoadMore);
  }
}

// Close modal window after click on buttonLoadMore and create new fetch
function onClickButtonLoadMore() {
  const author = refWindow.author.textContent;
  ref.inputResearch.setAttribute('value', `${author}`);

  // close and remove listeners
  ref.backDrop.classList.toggle('is-hidden');
  window.removeEventListener('keydown', onKeydownESC);
  ref.buttonCloseModal.removeEventListener('click', onClickButtonClose);
  ref.backDrop.removeEventListener('click', OnClickBackDrop);
  ref.buttonMoreLoad.removeEventListener('click', onClickButtonLoadMore);
}

// Get value from element
function getValue(element) {
  const modalInfo = {
    info: element.dataset.info,
    time: element.dataset.time,
    position: element.dataset.position,
    author: element.dataset.author,
    price: element.dataset.price,
    image: element.children[0].getAttribute('src'),
  };

  return modalInfo;
}

// Input data to window
function inputDataToWindow({ info, time, position, author, price, image }) {
  refWindow.info.textContent = info;
  refWindow.time.textContent = time;
  refWindow.position.textContent = position;
  refWindow.author.textContent = author;
  refWindow.price.textContent = price;
  refWindow.imageBig.setAttribute('src', `${image}`);
  refWindow.imageLittle.setAttribute('src', `${image}`);
}