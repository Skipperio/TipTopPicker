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

let listOfQuestions = [
    "questionFloor",
    "questionCases",
    "questionCages",
    "questionDowntime",
    "questionChangeFloor",
];

let stateQuestion;

levelinfo = [{
        level: 0,
        pallet: 178.4,
        cage: 140.0,
        total: 1338
    },
    {
        level: 2,
        pallet: 137.6,
        cage: 100.7,
        total: 1032
    },
    {
        level: 3,
        pallet: 124,
        cage: 110.9,
        total: 930
    },
    {
        level: 4,
        pallet: 129.3,
        cage: 100,
        total: 969.75
    },
];
currentQuestion = 0;
//DownTimes
let downtime = [];

function changeLevel() {
    switch (currentlevel) {
        case "0":
            levelinfo.map(({
                level,
                pallet,
                cage,
                total
            }) => {
                if (level === 0) {
                    palletOnTheFloor = pallet;
                    cageOnTheFloor = cage;
                    totalOnTheFloor = total;
                }
            });
            break;
        case "2":
            levelinfo.map(({
                level,
                pallet,
                cage,
                total
            }) => {
                if (level === 2) {
                    palletOnTheFloor = pallet;
                    cageOnTheFloor = cage;
                    totalOnTheFloor = total;
                }
            });
            break;
        case "3":
            levelinfo.map(({
                level,
                pallet,
                cage,
                total
            }) => {
                if (level === 3) {
                    palletOnTheFloor = pallet;
                    cageOnTheFloor = cage;
                    totalOnTheFloor = total;
                }
            });
            break;
        case "4":
            levelinfo.map(({
                level,
                pallet,
                cage,
                total
            }) => {
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

    levelinfo.map(({
        level,
        pallet,
        cage,
        total
    }) => {
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

// function nextQuestionButton() {
//     let cQuestion = 0;
//     console.log(currentQuestion);
//     console.log(listOfQuestions.length);
//     if (listOfQuestions[currentQuestion] < listOfQuestions.length) {
//         // console.log("some F**k up in there question list button next");
//         alert("There is no more questions");
//     } else {
//         console.log(currentQuestion);

//         document.getElementById(listOfQuestions[currentQuestion]).style.display =
//             "none";
//         currentQuestion++;
//         document.getElementById(listOfQuestions[currentQuestion]).style.display =
//             "block";
//     }
// }

function nextQuestionButton() {
    currentQuestion++
    showQuestion();
    if (currentQuestion < listOfQuestions.length) {
        showQuestion();
    } else(alert("you reached end of the listOfQuestions"));
    console.log(currentQuestion);
    console.log(listOfQuestions.length)

}
// show current Question
function showQuestion() {
    if (currentQuestion < listOfQuestions.length) {
        document.getElementById(listOfQuestions[currentQuestion]).style.display = "block";

    } else {
        alert("fuck up");

    }
}
// hide current question
function hideQuestion() {
    if (currentQuestion > listOfQuestions.length) {
        document.getElementById(listOfQuestions[currentQuestion]).style.display = "none";

    } else {
        alert("fuck up");

    }

}

function previousQuestionButton() {
    currentQuestion--;

    showQuestion()
    console.log(currentQuestion);
    hideQuestion();
}
// function previousQuestionButton() {
//     if (listOfQuestions[currentQuestion] == null) {
//         console.log("some F**k up in there question list button prev");
//     } else {

//         document.getElementById(listOfQuestions[currentQuestion]).style.display =
//             "none";
//         currentQuestion--;
//         document.getElementById(listOfQuestions[currentQuestion]).style.display =
//             "block";

//     }
// }

function hideQuestions() {
    for (let index = 1; index < listOfQuestions.length; index++) {
        document.getElementById(listOfQuestions[index]).style.display = "none";
    }
}
hideQuestions();