
var letterDiv = document.querySelector('.letter-div');
var hintButton = document.querySelector('.hint-btn');
var resetButton = document.querySelector('.reset-btn');
var hintDiv = document.querySelector('.hint-div');
var hintText = document.querySelector('.hint-txt');
var liveSpan = document.querySelector('.lives');
var wordDiv = document.querySelector('.word-div');
var notif = document.querySelector('.notif');
var notifContent = document.querySelector('.notif-content');
var notifSpan = document.querySelector('.notif-span');
var playAgain = document.querySelector('.notif-btn');

// keeping letters using javascript
// so untill we put html content into letter-div,
// we cant capture letters
let letters;

let lives;

var words = new Map([
  ['увс','Монголын хамгийн том нууртай газар'],
  ['ховд','Хамгийн олон ястантай аймаг'],
  ['баянөлгий','Ачит нуур хаан байдаг вэ?'],
  ['дорнод','Мэнэнгийн тал хаан байдаг вэ?'],
  ['сэлэнгэ','Амарбаясгалан хийд хаан байдаг вэ?'],
  ['сүхбаатар','Шилийн богд хаан байдаг вэ?'],
  ['дундговь','Дэлгэрхангай уул хаан байдаг вэ?'],
  ['хөвсгөл','Монголын хамгийн цэнгэг нууртай газар'],
  ['завхан','Отгон тэнгэр хайрхан хаан байдаг вэ?'],
  ['өмнөговь','Говь гурван сайхан хаан байдаг вэ?'],
]);

// making a list of only keys from words
var word_list = [...words.keys()];

// get random word from word_list function
var getRandomWord = function (list) {
  return list[Math.floor(Math.random() * word_list.length)];

};

// random word will be selected upon every reset and init
let select_word;
var init = function (state) {
  wordDiv.innerHTML = '';
  if (state === 'start') {
    // putting all letters into html
    for (const i of 'абвгдеёжзийклмноөпрстуүфхцчшщъьыэюя') {
      const html = `<button class="alpha">${i.toUpperCase()}</button>`;
      letterDiv.insertAdjacentHTML('beforeend', html);

    }
  } else if (state === 'reset') {
    letters.forEach(btn => {
      btn.classList.remove('disabled');
      hintDiv.classList.add('hidden');
      notif.classList.add('hidden');
    });
  }
  select_word = getRandomWord(word_list);
  lives = 6;
  hintDiv.classList.remove('hidden');
  hintText.textContent = words.get(select_word);

  // capturing letters div
  letters = document.querySelectorAll('.alpha');
  liveSpan.textContent = lives;

  // putting selected word
  for (let i = 0; i < select_word.length; i++) {
    var html = `<p class="word">_</p>`;
    wordDiv.insertAdjacentHTML('beforeend', html);
  }
  
};
// initializing the page
init('start');

// show notification
var showNotif = function (msg) {
  notif.classList.remove('hidden');
  notifSpan.textContent = select_word;
  notifContent.textContent = `You ${msg}`;
  // lives = 3;
};
// decrease life
var decreaseLife = function () {
 
  lives--;
  document.getElementById('hangmanPic').src = './img/' + lives + '.jpeg';
  //   console.log(lives);
  liveSpan.textContent = lives;
  if (lives === 0) {
    showNotif('lost');
  }
};
// get multiple matching indexes of pressed letter
// to the selected word
var getindexes = function (letter) {
  let indexes = [];
  [...select_word].forEach((val, i) => {
    if (val === letter) {
      var index = i;
      indexes.push(index);
    }
  });
  //   console.log(indexes);
  return indexes;
};

// check if we get complete word
var checkWord = function () {
  let val = true;
  for (let i = 0; i < wordDiv.children.length; i++) {
    if (wordDiv.children[i].textContent === '_') {
      val = false;
    }

  }
  return val;
};

// letters event listener function
var letterPress = function () {
  var letter = this.textContent.toLowerCase();

  if (select_word.includes(letter)) {
     indexes_list = getindexes(letter);
    indexes_list.forEach((val, i) => {
      wordDiv.children[val].textContent = this.textContent;
    });
    if (checkWord()) showNotif('won');
  } else {
    decreaseLife();
    updateHangmanPicture();
  } 
};

// listening to letter buttons presses
letters.forEach(btn => {
  btn.addEventListener('click', letterPress);
});

// listening to reset btn
resetButton.addEventListener('click', function () {
  init('reset');
});

// listening to play again button
playAgain.addEventListener('click', function () {
  init('reset');
});
