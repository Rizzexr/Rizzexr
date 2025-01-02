// script.js
const images = [
    'image1.png', 'image2.png', 'image3.png', 'image4.png',
    'image5.png', 'image6.png', 'image7.png', 'image8.png',
    'image9.png', 'image10.png', 'image11.png', 'image12.png'
  ];
  
  const cardImages = [...images, ...images];
  
  const board = document.getElementById('game-board');
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;
  
  // Перемешивание карт
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Создание игрового поля
  function createBoard() {
    shuffle(cardImages);
  
    cardImages.forEach(image => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.image = image;
  
      const img = document.createElement('img');
      img.src = `images/${image}`;
      img.alt = 'Memory Card';
  
      card.appendChild(img);
      board.appendChild(card);
  
      card.addEventListener('click', flipCard);
    });
  }
  
  // Переворот карты
  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
  
    this.classList.add('flipped');
  
    if (!firstCard) {
      firstCard = this;
      return;
    }
  
    secondCard = this;
    lockBoard = true;
  
    checkMatch();
  }
  
  // Проверка совпадения
  function checkMatch() {
    const isMatch = firstCard.dataset.image === secondCard.dataset.image;
  
    if (isMatch) {
      disableCards();
    } else {
      unflipCards();
    }
  }
  
  // Если карты совпали
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  
    resetBoard();
  }
  
  // Если карты не совпали
  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
  
      resetBoard();
    }, 1000);
  }
  
  // Сброс состояния
  function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
  }
  
  // Создаем игровое поле
  createBoard();
  