const moneyNow = document.querySelector ("#moneyNow")
const moneySec = document.querySelector ("#moneySec")
const cookie = document.querySelector (".cookie")
const clikerNum = document.querySelector ("#clicker-num")
const grannyNum = document.querySelector ("#granny-num")
const factoryNum = document.querySelector ("#factory-num")

const itemClicker = document.querySelector (".item-clicker")
const itemGranny = document.querySelector (".item-granny")
const itemFactory = document.querySelector (".item-factory")
const animco = document.querySelector (".animco")

let money = 0
let moneysec = 0
let clikers = 0
let grannys = 0
let factorys = 0

cookie.addEventListener ("click", Money);

function Money() {
  money = money + 1;
  moneyNow.textContent = money;
  Animation();
}

itemClicker.addEventListener ("click", () => {
  if (money >= 10) {
    money = money - 10;
    clikers = clikers + 1;
    clikerNum.textContent = clikers;
    moneyNow.textContent = money;
    moneysec = moneysec + 1;
    moneySec.textContent = moneysec;
  }
})

setInterval(() => {
  Frame();
}, 1000);

function Frame() {
  for (var i = 0; i < moneysec; i++) {
    Money();
    Animation();
  }
}

itemGranny.addEventListener ("click", () => {
  if (money >= 100) {
    money = money - 100;
    grannys = grannys + 1;
    grannyNum.textContent = grannys;
    moneyNow.textContent = money;
    moneysec = moneysec + 10;
    moneySec.textContent = moneysec;
  }
})

itemFactory.addEventListener ("click", () => {
  if (money >= 1000) {
    money = money - 1000;
    factorys = factorys + 1;
    factoryNum.textContent = factorys;
    moneyNow.textContent = money;
    moneysec = moneysec + 100;
    moneySec.textContent = moneysec;
  }
})

function Animation() {
  animco.style.opacity = "100%"
  animco.style.top = "580px"
  setTimeout(() => {
  animco.style.transition = "0s"
  animco.style.opacity = "0%"
  animco.style.top = "0px"
  }, 1000);
  animco.style.transition = "1s"
}