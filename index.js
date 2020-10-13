//問題内容
const quiz = [
  {
    question: "家の中にある物で、真依が一番好きな物は何？",
    answers: ["テレビ", "ソファ", "オーブンレンジ", "本棚"],
    correct: "テレビ",
  },
  {
    question: "真依の実家はどこでしょう？",
    answers: ["京都市下京区", "京都市左京区", "京都市右京区", "京都市上京区"],
    correct: "京都市左京区",
  },
  {
    question: "真依のコンプレックスはどこでしょう？",
    answers: ["胸", "脚", "お腹", "目"],
    correct: "脚",
  },
  {
    question: "真依の小学校の頃の夢はなんでしょう？",
    answers: ["お花屋さん", "ケーキ屋さん", "バレーボールの選手", "お母さん"],
    correct: "バレーボールの選手",
  },
  {
    question: "真依が好きな駿生の仕草はどれでしょう？",
    answers: [
      "頭をわしゃわしゃしている所",
      "あくびをしている所",
      "キーボードを打っている所",
      "あごに手をつけて考えている所",
    ],
    correct: "あごに手をつけて考えている所",
  },
];

//リファクタリングしたもの
const $doc = document;
const $question = $doc.getElementById("question");
const $button = $doc.getElementsByTagName("button");
const buttonLen = $button.length;

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

//問題の枠組み部分

const quizContents = () => {
  $question.textContent = quiz[quizCount].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLen) {
    $button[buttonIndex].textContent = quiz[quizCount].answers[buttonIndex];
    buttonIndex++;
  }
};

const judge = (e) => {
  if (quiz[quizCount].correct === e.textContent) {
    window.alert("正解だよ！さすがっ！！");
    score++;
  } else {
    window.alert("ぶぶーーぅ！！残念やなぁ。");
  }
  goNext();
};

const quizEnd = () => {
  $question.textContent =
    "終了だよ！お疲れ様！" +
    "あなたのスコアは" +
    score +
    "/" +
    quizLen +
    "です！";
};

const goNext = () => {
  quizCount++;
  if (quizCount < quizLen) {
    quizContents(quizCount);
  } else {
    quizEnd();
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
