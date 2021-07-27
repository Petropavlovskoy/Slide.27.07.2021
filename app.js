function sliderFunction() {

const data = [
  "Каким смелым и самоуверенным становится тот, кто обретает убеждённость, что его любят.",

  "Мы выбираем не случайно друг друга... Мы встречаем только тех, кто уже существует в нашем подсознании.",

  "Быть абсолютно честным с самим собой – хорошее упражнение.",

  "Почему мы не влюбляемся каждый месяц в кого-то нового? Потому что при расставании нам пришлось бы лишаться частицы собственного сердца.",

  "К несчастью, подавленные эмоции не умирают. Их заставили замолчать. И они изнутри продолжают влиять на человека.",

  "У каждого человека есть желания, которые он не сообщает другим, и желания, в которых он не сознается даже себе самому.",

  "Ограниченность удовольствия только увеличивает его ценность. ",

  "Мы никогда не бываем столь беззащитны, как тогда, когда любим и никогда так безнадежно несчастны, как тогда, когда теряем объект любви или его любовь.",
];

const bgColor = [
  "#00a4e4",
  "#7552cc",
  "#00205b",
  "#008eaa",
  "#1c79c0",
  "#0066a1",
  "#eb5424",
  "#2a5934",
];

const body = document.querySelector('body');

body.addEventListener('click', nextSlide);

let count = 0;

let slideCollection;

function createDivSlide() {
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement('div');
    div.classList.add('slide');
    div.style.background = bgColor[0];
    if (i !== 0) div.classList.add('hide');
    let text = document.createElement('div');
    text.textContent = data[i];
    div.append(text);
    body.append(div);
  }
  slideCollection = document.querySelectorAll('.slide');
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function nextSlide() {
  slideCollection[count].classList.add('hide');
  if (count + 1 < data.length) {
    count++;
  } else {
    count = 0;
  }

  slideCollection[count].classList.remove('hide');
  let bg = bgColor[randomInteger(0, bgColor.length - 1)];
  slideCollection[count].style.background = bg;
}
createDivSlide();
}

document.addEventListener("DOMContentLoaded", sliderFunction);