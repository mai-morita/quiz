//問題内容
const quiz = [
  {
    question: "駿生の苗字はどれでしょう？",
    answers: ["森田", "田中", "織田", "木村"],
    correct: "木村",
  },
  {
    question: "駿生の誕生日はいつでしょう？",
    answers: ["2月3日", "6月3日", "8月3日", "11月3日"],
    correct: "6月3日",
  },
  {
    question: "駿生の携帯の機種はどれでしょう？",
    answers: ["iPhone8", "iPhoneX", "iPhoneSE", "iPhone7"],
    correct: "iPhone8",
  },
];

//リファクタリングしたもの
const $doc = document;
const $question = $doc.getElementById("question");
const $button = $doc.getElementsByTagName("button");
const buttonLength = $button.length;

console.log($doc);

const quizLength = quiz.length;
let quizCount = 0;
let score = 0;

//問題の枠組み部分

const quizContents = () => {
  $question.textContent = quiz[quizCount].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizCount].answers[buttonIndex];
    buttonIndex++;
  }
};

const judge = (e) => {
  if (quiz[quizCount].correct === e.target.textContent) {
    window.alert("正解だよ！さすがっ！！");
    score++;
  } else {
    window.alert("ぶぶーーぅ！！残念やなぁ。");
  }

  if (quizCount < quizLength) {
    quizContents(quizCount);
  } else {
    window.alert("終了だよ！お疲れ様！！");
  }
};

quizContents();
//クリックしたときの正誤判定
let answersIndex = 0;
let answersLength = quiz[quizCount].answers.length;

while (answersIndex < answersLength) {
  $button[answersIndex].addEventListener("click", (e) => {
    judge(e.target);
  });
  answersIndex++;
}
