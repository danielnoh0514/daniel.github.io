const quotes = [
  {
    quote:
      "사랑은 두 사람이 마주 쳐다보는 것이 아니라 함께 같은 방향을 바라보는 것이다.",
    author: "쌩떽쥐베리",
  },

  {
    quote:
      "사랑하는 것이 인생이다. 기쁨이 있는 곳에 사람과 사람 사이의 결합이 있는 곳에 또한 기쁨이 있다. ",
    author: "괴테",
  },
  {
    quote: "사랑에 죽는 것처럼 행복은 없다. ",
    author: "E.M. 아른트",
  },
  {
    quote: "사랑은 행복의 문을 여는 열쇠이다.",
    author: "Oliver Wendell Holmes",
  },
  {
    quote:
      "바다에는 진주가 있고, 하늘에는 별이 있다, 그러나 내 마음, 내 마음, 내 마음에는 사랑이 있다",
    author: "H.W. 롱펠로",
  },
  {
    quote: "사랑하는 것은 천국을 살짝 엿보는 것이다",
    author: "카렌 선드",
  },
  {
    quote: "최고의 동기 부여는 사랑이다.",
    author: "스티븐 스코트",
  },
  {
    quote: "사랑을 이야기하면 사랑을 하게 된다",
    author: "W.G. 베넘",
  },
  {
    quote: "사랑을 품을때 삶은 진정한 의미를 되찾는다.",
    author: "세르반테스",
  },
  {
    quote: "사랑의 치료법은 더욱 사랑하는 것밖에는 없다",
    author: "H.D. 도로우",
  },
];

const quote = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
