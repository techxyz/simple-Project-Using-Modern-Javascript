const msg = document.querySelector(".msg");
const Guess = document.querySelector("input");
const btn = document.querySelector(".btn");
let play = false;
let newWords = "";
let randWords = "";

let sWords = [
  "python",
  "javascript",
  "reactjs",
  "nodejs",
  "angular",
  "viewjs",
  "java",
  "swift",
  "php",
];

const creatNewWords = () => {
  console.log(sWords[1]);
  let ranNum = Math.floor(Math.random() * sWords.length);
  //console.log(ranNum);
  let newTempSword = sWords[ranNum];
  //console.log(newTempSword.split(""));
  return newTempSword;
};

const scrambleWords = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i];
    //console.log(temp);
    let j = Math.floor(Math.random() * (i + 1));
    // console.log(i);
    //console.log(j);
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
};

btn.addEventListener("click", function () {
  if (!play) {
    play = true;
    btn.innerHTML = "Guess";
    Guess.classList.toggle("hidden");
    newWords = creatNewWords();
    randWords = scrambleWords(newWords.split("")).join("");
    msg.innerHTML = `Guess the word ${randWords}`;
  } else {
    let temWord = Guess.value;
    if (temWord === newWords) {
      //console.log ('currect');
      play = false;
      msg.innerHTML = `awsome it is currect it is ${newWords}`;
      btn.innerHTML = "start again";
      Guess.classList.toggle("hidden");
      Guess.value ='';
    } else {
      console.log("incurret");
      msg.innerHTML = `sorry boss its incurrect please try again ${randWords}`;
    }
  }
});
