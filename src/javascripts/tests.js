let currentStage = 0;
let resultCount = 0;

const stages = [
  {
    question: "Помнишь этот звук? Что за программа 'кричала' Uh-oh при входе?",
    cardClass: "card_1",
    answers: [
      { text: "ICQ (Аська)", count: 1 },
      { text: "Skype", count: 0 },
      { text: "Nokia Messenger", count: 0 }
    ]
  },
  {
    question: "Этот торжественный аккорд при включении ПК слышали миллионы. Чья это мелодия?",
    cardClass: "card_2",
    answers: [
      { text: "Windows 95", count: 1 },
      { text: "Apple Macintosh", count: 0 },
      { text: "Linux", count: 0 }
    ]
  },
  {
    question: "Какой звук сопровождал появление логотипа первой PlayStation?",
    cardClass: "card_3",
    answers: [
      { text: "Космический гул", count: 1 },
      { text: "Звук разбитого стекла", count: 0 },
      { text: "Смех ребенка", count: 0 }
    ]
  },
  {
    question: "Этот гаджет сообщал о сообщении резким писком на всю комнату. Что это?",
    cardClass: "card_4",
    answers: [
      { text: "Тамагочи", count: 0 },
      { text: "Пейджер", count: 1 },
      { text: "Первый iPhone", count: 0 }
    ]
  },
  {
    question: "Этот звук заставлял нас бежать к столу: что означал 'скрежет' модема в 90-е?",
    cardClass: "card_5",
    answers: [
      { text: "Кто-то звонит по телефону", count: 0 },
      { text: "Установка связи с интернетом", count: 1 },
      { text: "Ошибка жесткого диска", count: 0 }
    ]
  }
];

function initTest() {
  const numberOfQuestion = document.querySelector('.A_NumberOfQuestion');
  const questionText = document.querySelector('.A_TestQuestion');
  const cardElement = document.querySelector('#qImageCard');
  const answerTexts = document.querySelectorAll('.A_TestAnswerText');
  const checkboxes = document.querySelectorAll('.A_TestCheckbox');

  if (currentStage >= stages.length) {
    showFinalResult();
    return;
  }

  const currentData = stages[currentStage];

  if (numberOfQuestion) numberOfQuestion.innerText = (currentStage + 1) + "/" + stages.length;
  if (questionText) questionText.innerText = currentData.question;
  if (cardElement) cardElement.className = "card " + currentData.cardClass;

  answerTexts.forEach((text, i) => {
    text.innerText = currentData.answers[i].text;
    checkboxes[i].checked = false;
    checkboxes[i].disabled = false;
    checkboxes[i].onclick = function() {
      resultCount += currentData.answers[i].count;
      currentStage++;
      initTest();
    };
  });
}

function showFinalResult() {
  const testBox = document.querySelector('.O_Test');
  
  const resultTitle = resultCount > 2 ? "Ты Хранитель Звуков!" : "Цифровой новичок";
  
  const html = `
    <div class="O_Result">
      <h2>${resultTitle}</h2>
      <p>Ваш результат: ${resultCount} из ${stages.length}</p>
      <button onclick="location.reload()" class="button-primary">
        Пройти еще раз
      </button>
    </div>
  `;

  testBox.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', initTest);