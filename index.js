let picked;
let cagesPicked;
let soFarPicked;
let currentlevel;
let isChangedLevel;
let casesToDo;
let soFarPickedPerc;
let palletOnTheFloor;
let cageOnTheFloor;
let totalOnTheFloor;
let total;
let downtimeHappened = 0;
let downTimeInCases;

// levelwithData=[palet,cage,total]
let listOfQuestions = [
  "questionFloor",
  "questionCases",
  "questionCages",
  "questionDowntime",
  "questionChangeFloor",
];

levelinfo = [
  { level: 0, pallet: 178.4, cage: 130.0, total: 1338 },
  { level: 2, pallet: 137.6, cage: 100.7, total: 1032 },
  { level: 3, pallet: 124, cage: 110.9, total: 930 },
  { level: 4, pallet: 129.3, cage: 100, total: 969.75 },
];
currentQuestion = 0;
//DownTimes
let downtime = [];

function changeLevel() {
  switch (currentlevel) {
    case "0":
      levelinfo.map(({ level, pallet, cage, total }) => {
        if (level === 0) {
          palletOnTheFloor = pallet;
          cageOnTheFloor = cage;
          totalOnTheFloor = total;
        }
      });
      break;
    case "2":
      levelinfo.map(({ level, pallet, cage, total }) => {
        if (level === 2) {
          palletOnTheFloor = pallet;
          cageOnTheFloor = cage;
          totalOnTheFloor = total;
        }
      });
      break;
    case "3":
      levelinfo.map(({ level, pallet, cage, total }) => {
        if (level === 3) {
          palletOnTheFloor = pallet;
          cageOnTheFloor = cage;
          totalOnTheFloor = total;
        }
      });
      break;
    case "4":
      levelinfo.map(({ level, pallet, cage, total }) => {
        if (level === 4) {
          palletOnTheFloor = pallet;
          cageOnTheFloor = cage;
          totalOnTheFloor = total;
        }
      });
      break;
    default:
      console.log(`something went wrong level ${currentlevel} doesn't exists`);
  }
}

function addfromCages() {
  // add cases from cages to picked

  differenceBCageNPallet =
    ((palletOnTheFloor - cageOnTheFloor) /
      ((palletOnTheFloor + cageOnTheFloor) / 2)) *
    100;
  picked =
    picked - cagesPicked + cagesPicked * (differenceBCageNPallet / 100 + 1);
}
function pickedSoFarPerc() {
  // picked so far in percetages
  soFarPickedPerc = picked / totalOnTheFloor;
  console.log(soFarPickedPerc);
}
function casesToFinish() {
  // from left over percentage to 100% in cases
  casesToDo = ((1 - soFarPickedPerc) * 100 * totalOnTheFloor) / 100;
  console.log("cases to do " + casesToDo);
}
function addFromDownTime() {
  // add downtime cases to picked
  downTimeInCases = palletOnTheFloor * (downtime[downtimeHappened] / 60);
  picked += Number(downTimeInCases);
  downtimeHappened++;
  console.log("picked wit DT: " + picked);
}

function saveData() {
  console.log(".........................");
  currentlevel = document.getElementById("levelid").value;
  picked = document.getElementById("casesid").value;
  cagesPicked = document.getElementById("cagesid").value;
  downtime.push(document.getElementById("downtimeid").value);
  isChangedLevel = document.getElementById("isFloorChangedid").value;
  // console.log("What is it ?"+Number(downtime[downtimeHappened]));
  console.log(isChangedLevel);
  changeLevel();
  addfromCages();
  addFromDownTime();
  pickedSoFarPerc();
  casesToFinish();
  document.getElementById("showPalletsToDo").textContent = casesToDo;
  document.getElementById("withCagesAndDowntime").textContent = picked;

  // find out how to sort out checkbox true and false
  // sort out calc downtime normally

  let a = 5;

  let c = a + Number(downtime);
  console.log(c);

  levelinfo.map(({ level, pallet, cage, total }) => {
    if (level === 0) {
      console.log(
        `level of ${level} with ${pallet} pallets and ${cage} cages but total ${total}`
      );
    }
  });
}
function checkFloorCorrect() {
  // https://www.w3resource.com/javascript/form/all-numbers.php
  let numbers = /|0|2|3|4/g;
  if (document.getElementById("levelid").value.match(numbers)) {
    console.log("good");
  } else {
    console.log("bad");
  }
}
function nextQuestionButton() {
  document.getElementById(listOfQuestions[currentQuestion]).style.display =
    "none";
  currentQuestion++;
  document.getElementById(listOfQuestions[currentQuestion]).style.display =
    "block";
}
function previousQuestionButton() {
  document.getElementById(listOfQuestions[currentQuestion]).style.display =
    "none";
  currentQuestion--;
  document.getElementById(listOfQuestions[currentQuestion]).style.display =
    "block";
}
function hideQuestions() {
  for (let index = 1; index < listOfQuestions.length; index++) {
    document.getElementById(listOfQuestions[index]).style.display = "none";
  }
}
hideQuestions();
