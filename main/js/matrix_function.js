// 입력할 행렬을 추가해주는 식 1번
let arrayPlus1Function = () => {
  row1Num = row1.value;
  column1Num = column1.value;
  console.log(row1Num);
  console.log(column1Num);
  console.log(numberLength.test(row1Num));
  console.log(numberLength.test(column1Num));
  if (row1Num > 0 && row1Num < 11 && column1Num < 11 && column1Num > 0) {
    arrayPlus1.style.display = "none";
    firstTool1.style.display = "none";
    secondTool1.style.display = "block";
    let stringRecord = "";
    let i = 0;
    while (i < row1Num) {
      stringRecord = stringRecord + `<ul>`;
      let j = 0;
      while (j < column1Num) {
        stringRecord =
          stringRecord +
          `<li><input type="text" class="numberLengthList" id="A${i}_${j}" value="" placeholder="0"/></li>`;
        j++;
      }
      stringRecord = stringRecord + `</ul>`;
      i++;
    }
    inputArrayNum1.innerHTML = stringRecord;
    row1.value = "";
    column1.value = "";
  } else {
    warningID.style.display = "block";
    warningInner.innerHTML =
      "잘못된 입력. row와 column에 숫자를 입력해주세요.<br/>음수를 입력하지 마세요.<br/>row와 column에 10자리 이상의 숫자를 넣지 마세요.";
  }
  numberLengthList = document.querySelectorAll(".numberLengthList");
};
// 입력할 행렬을 추가해주는 식2
let arrayPlus2Function = () => {
  row2Num = row2.value;
  column2Num = column2.value;
  console.log(row2Num);
  console.log(column2Num);
  console.log(numberLength.test(row2Num));
  console.log(numberLength.test(column2Num));
  if (row2Num > 0 && row2Num < 11 && column2Num < 11 && column2Num > 0) {
    arrayPlus2.style.display = "none";
    firstTool2.style.display = "none";
    secondTool2.style.display = "block";
    let stringRecord = "";
    let i = 0;
    while (i < row2Num) {
      stringRecord = stringRecord + `<ul>`;
      let j = 0;
      while (j < column2Num) {
        stringRecord =
          stringRecord +
          `<li><input type="text" class="numberLengthList" id="B${i}_${j}" value="" placeholder="0"/></li>`;
        j++;
      }
      stringRecord = stringRecord + `</ul>`;
      i++;
    }
    inputArrayNum2.innerHTML = stringRecord;
    row2.value = "";
    column2.value = "";
  } else {
    warningID.style.display = "block";
    warningInner.innerHTML =
      "잘못된 입력. row와 column에 숫자를 입력해주세요.<br/>음수를 입력하지 마세요.<br/>row와 column에 10자리 이상의 숫자를 넣지 마세요.";
  }
  numberLengthList = document.querySelectorAll(".numberLengthList");
};
let secondTool1ResetFunction = () => {
  secondTool1.style.display = "none";
  arrayPlus1.style.display = "block";
  firstTool1.style.display = "block";
  inputArrayNum1.innerHTML = "";
};
let secondTool2ResetFunction = () => {
  secondTool2.style.display = "none";
  arrayPlus2.style.display = "block";
  firstTool2.style.display = "block";
  inputArrayNum2.innerHTML = "";
};
let okFunction = () => {
  ruleID.style.display = "none";
};
let secondTool1RandomFunction = () => {
  let i = 0;
  while (i < row1Num) {
    let j = 0;
    while (j < column1Num) {
      let arrayNum = `#A${i}_${j}`;
      let array1Input = document.querySelector(arrayNum);
      let randomNum = parseInt(Math.random() * (99 - -99) + -99);
      array1Input.value = randomNum;
      j++;
    }
    i++;
  }
};
let secondTool2RandomFunction = () => {
  let i = 0;
  while (i < row2Num) {
    let j = 0;
    while (j < column2Num) {
      let arrayNum = `#B${i}_${j}`;
      let array2Input = document.querySelector(arrayNum);
      let randomNum = parseInt(Math.random() * 99);
      array2Input.value = randomNum;
      j++;
    }
    i++;
  }
};
let makingArrayBucket = (row, rememberArray) => {
  let i = 0;
  while (i < row) {
    rememberArray.push([]);
    i++;
  }
}; // 배열 입력될 자리 만드는 장치
let gettingArray = (column, row, rememberArray, alpha) => {
  makingArrayBucket(row, rememberArray);
  let i = 0;
  while (i < row) {
    let j = 0;
    while (j < column) {
      arrayNum = document.querySelector(`#${alpha}${i}_${j}`);
      rememberArray[i].push(arrayNum.value);
      j++;
    }
    i++;
  }
}; // 숫자 가져와서 임시 배열에 입력하는 장치
let mathA = () => {
  gettingArray(column1Num, row1Num, rememberArray1, "A");
};
let mathB = () => {
  gettingArray(column2Num, row2Num, rememberArray2, "B");
};
let plusArray = () => {
  rememberArray1 = [];
  rememberArray2 = [];
  mathA();
  mathB();
  if (row1Num == row2Num && column1Num == column2Num) {
    let stringRecord = "";
    let numberRecord = 0;
    let i = 0;
    while (i < row1Num) {
      let j = 0;
      stringRecord += "<ul>";
      while (j < column1Num) {
        numberRecord =
          Number(rememberArray1[i][j]) + Number(rememberArray2[i][j]);
        stringRecord += `<li><input type="text" value="${numberRecord}" disabled/></li>`;
        j++;
      }
      i++;
      stringRecord += "</ul>";
    }
    outputArray.innerHTML = stringRecord;
  } else {
    warningID.style.display = "block";
    warningInner.innerHTML = "두 행렬의 row 값이나 column 값이 같지 않습니다.";
  }
};
let minusArray = () => {
  rememberArray1 = [];
  rememberArray2 = [];
  mathA();
  mathB();
  if (row1Num == row2Num && column1Num == column2Num) {
    let stringRecord = "";
    let numberRecord = 0;
    let i = 0;
    while (i < row1Num) {
      let j = 0;
      stringRecord += "<ul>";
      while (j < column1Num) {
        numberRecord =
          Number(rememberArray1[i][j]) - Number(rememberArray2[i][j]);
        stringRecord += `<li><input type="text" value="${numberRecord}" disabled/></li>`;
        j++;
      }
      i++;
      stringRecord += "</ul>";
    }
    outputArray.innerHTML = stringRecord;
  } else {
    warningID.style.display = "block";
    warningInner.innerHTML = "두 행렬의 row 값이나 column 값이 같지 않습니다.";
  }
};
let resetAll = () => {
  secondTool1ResetFunction();
  secondTool2ResetFunction();
  outputArray.innerHTML = "";
};
const plusComma3Number = () => {
  outOfValue = document.querySelectorAll(".outOfValue");
  outOfValue.forEach((NopValue, index, arrow) => {
    outOfValueNumber = outOfValue[index].value;
    outOfValueNumberChangeValue = outOfValueNumber
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    outOfValue[index].value = outOfValueNumberChangeValue;
  });
};
let multiplyArray = () => {
  rememberArray1 = [];
  rememberArray2 = [];
  mathA();
  mathB();
  if (column1Num == row2Num) {
    let stringRecord = "";
    let numberRecord = 0;
    let i = 0;
    while (i < rememberArray1.length) {
      let j = 0;
      stringRecord += `<ul>`;
      while (j < rememberArray2[1].length) {
        let k = 0;
        numberRecord = 0;
        while (k < rememberArray1[1].length) {
          numberRecord += rememberArray1[i][k] * rememberArray2[k][j];
          k++;
        }
        stringRecord += `<li><input type="text" value="${numberRecord}" class="outOfValue" disabled/></li>`;
        j++;
      }
      i++;
      stringRecord += `</ul>`;
    }
    outputArray.innerHTML = stringRecord;
  } else if (row1Num == column2Num) {
    let stringRecord = "";
    let numberRecord = 0;
    let i = 0;
    while (i < rememberArray2.length) {
      let j = 0;
      stringRecord += `<ul>`;
      while (j < rememberArray1[1].length) {
        let k = 0;
        numberRecord = 0;
        while (k < rememberArray2[1].length) {
          numberRecord += rememberArray2[i][k] * rememberArray1[k][j];
          k++;
        }
        stringRecord += `<li><input type="text" value="${numberRecord}" disabled/></li>`;
        j++;
      }
      i++;
      stringRecord += `</ul>`;
    }
    outputArray.innerHTML = stringRecord;
  } else {
    warningID.style.display = "block";
    warningInner.innerHTML =
      "첫번째 행렬의 column 값과 두번째 행렬의 row값이 다릅니다.";
  }
  plusComma3Number();
};
let warningOkFunction = () => {
  warningID.style.display = "none";
};
let numberLengthListFunction = () => {
  let i = 0;
  while (i < numberLengthList.length) {
    numberLengthList[i].value > 99 && (numberLengthList[i].value = 99);
    numberLengthList[i].value < -99 && (numberLengthList[i].value = -99);
    numberLength.test(numberLengthList[i].value) == false &&
      (numberLengthList[i].value = "");
    numberLengthList[i].value == "-0" && (numberLengthList[i].value = "");
    i++;
  }
};
