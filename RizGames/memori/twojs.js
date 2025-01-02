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
  let matchedCards = 0;
  let currentPlayer = 1;
  const scores = { 1: 0, 2: 0 };
  
  // Элементы для отображения текущего игрока и очков
  const playerInfo = document.createElement('div');
  playerInfo.id = 'player-info';
  playerInfo.style.display = 'flex';
  playerInfo.style.justifyContent = 'space-between';
  playerInfo.style.alignItems = 'center';
  playerInfo.style.padding = '10px 20px';
  playerInfo.style.backgroundColor = '#333';
  playerInfo.style.color = '#fff';
  playerInfo.style.fontSize = '1.5em';
  playerInfo.style.marginBottom = '20px';
  
  // Игрок 1
  const player1 = document.createElement('div');
  player1.id = 'player1';
  player1.textContent = `Игрок 1: ${scores[1]}`;
  player1.style.flex = '1';
  player1.style.textAlign = 'left';
  playerInfo.appendChild(player1);
  
  // Текущий ход
  const currentPlayerInfo = document.createElement('div');
  currentPlayerInfo.id = 'current-player';
  currentPlayerInfo.textContent = `Ходит: Игрок ${currentPlayer}`;
  currentPlayerInfo.style.flex = '1';
  currentPlayerInfo.style.textAlign = 'center';
  playerInfo.appendChild(currentPlayerInfo);
  
  // Игрок 2
  const player2 = document.createElement('div');
  player2.id = 'player2';
  player2.textContent = `Игрок 2: ${scores[2]}`;
  player2.style.flex = '1';
  player2.style.textAlign = 'right';
  playerInfo.appendChild(player2);
  
  document.body.insertBefore(playerInfo, board);
  
  // Обновление информации о текущем игроке
  function updatePlayerInfo() {
    player1.textContent = `Игрок 1: ${scores[1]}`;
    player2.textContent = `Игрок 2: ${scores[2]}`;
    currentPlayerInfo.textContent = `Ходит: Игрок ${currentPlayer}`;
  }
  
  
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
  
    updatePlayerInfo();
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
      scores[currentPlayer] += 1;
      matchedCards++;
      updatePlayerInfo();
      checkWin();
    } else {
      switchPlayer();
      unflipCards();
    }
  }
  
  // Переключение хода
  function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    updatePlayerInfo();
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
  
  // Проверка на победу
  function checkWin() {
    if (matchedCards === cardImages.length / 2) {
      setTimeout(() => {
        winMessage.style.display = 'block';
        const winner = scores[1] > scores[2] ? 'Игрок 1' : scores[1] < scores[2] ? 'Игрок 2' : 'Ничья';
        winMessage.textContent = `Игра окончена! Победитель: ${winner}`;
        setTimeout(() => {
          resetGame();
        }, 3000);
      }, 500);
    }
  }
  
  // Сброс игры
  function resetGame() {
    matchedCards = 0;
    scores[1] = 0;
    scores[2] = 0;
    currentPlayer = 1;
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.classList.remove('flipped');
      card.addEventListener('click', flipCard);
    });
  
    board.innerHTML = '';
    createBoard();
  
    winMessage.style.display = 'none';
  }
  
  // Создаем игровое поле
  createBoard();
  