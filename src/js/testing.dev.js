"use strict";

// 입력할 행렬을 추가해주는 식 1번
var arrayPlus1Function = function arrayPlus1Function() {
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
    var stringRecord = "";
    var i = 0;

    while (i < row1Num) {
      stringRecord = stringRecord + "<ul>";
      var j = 0;

      while (j < column1Num) {
        stringRecord = stringRecord + "<li><input type=\"number\" id=\"A".concat(i, "_").concat(j, "\"/></li>");
        j++;
      }

      stringRecord = stringRecord + "</ul>";
      i++;
    }

    inputArrayNum1.innerHTML = stringRecord;
    row1.value = "";
    column1.value = "";
  } else {
    alert("잘못된 입력");
  }
}; // 입력할 행렬을 추가해주는 식2


var arrayPlus2Function = function arrayPlus2Function() {
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
    var stringRecord = "";
    var i = 0;

    while (i < row2Num) {
      stringRecord = stringRecord + "<ul>";
      var j = 0;

      while (j < column2Num) {
        stringRecord = stringRecord + "<li><input type=\"number\" id=\"B".concat(i, "_").concat(j, "\"/></li>");
        j++;
      }

      stringRecord = stringRecord + "</ul>";
      i++;
    }

    inputArrayNum2.innerHTML = stringRecord;
    row2.value = "";
    column2.value = "";
  } else {
    alert("잘못된 입력");
  }
};

var secondTool1ResetFunction = function secondTool1ResetFunction() {
  secondTool1.style.display = "none";
  arrayPlus1.style.display = "block";
  firstTool1.style.display = "block";
  inputArrayNum1.innerHTML = "";
};

var secondTool2ResetFunction = function secondTool2ResetFunction() {
  secondTool2.style.display = "none";
  arrayPlus2.style.display = "block";
  firstTool2.style.display = "block";
  inputArrayNum2.innerHTML = "";
};

var okFunction = function okFunction() {
  rule.style.display = "none";
};

var secondTool1RandomFunction = function secondTool1RandomFunction() {
  var i = 0;

  while (i < row1Num) {
    var j = 0;

    while (j < column1Num) {
      var _arrayNum = "#A".concat(i, "_").concat(j);

      var array1Input = document.querySelector(_arrayNum);
      var randomNum = parseInt(Math.random() * 99);
      array1Input.value = randomNum;
      j++;
    }

    i++;
  }
};

var secondTool2RandomFunction = function secondTool2RandomFunction() {
  var i = 0;

  while (i < row2Num) {
    var j = 0;

    while (j < column2Num) {
      var _arrayNum2 = "#B".concat(i, "_").concat(j);

      var array2Input = document.querySelector(_arrayNum2);
      var randomNum = parseInt(Math.random() * 99);
      array2Input.value = randomNum;
      j++;
    }

    i++;
  }
};

var makingArrayBucket = function makingArrayBucket(row, rememberArray) {
  var i = 0;

  while (i < row) {
    rememberArray.push([]);
    i++;
  }
}; // 배열 입력될 자리 만드는 장치


var gettingArray = function gettingArray(column, row, rememberArray, alpha) {
  makingArrayBucket(row, rememberArray);
  var i = 0;

  while (i < row) {
    var j = 0;

    while (j < column) {
      arrayNum = document.querySelector("#".concat(alpha).concat(i, "_").concat(j));
      rememberArray[i].push(arrayNum.value);
      j++;
    }

    i++;
  }
}; // 숫자 가져와서 임시 배열에 입력하는 장치


var mathA = function mathA() {
  gettingArray(column1Num, row1Num, rememberArray1, "A");
};

var mathB = function mathB() {
  gettingArray(column2Num, row2Num, rememberArray2, "B");
};

var plusArray = function plusArray() {
  rememberArray1 = [];
  rememberArray2 = [];
  mathA();
  mathB();

  if (row1Num == row2Num && column1Num == column2Num) {
    var stringRecord = "";
    var numberRecord = 0;
    var i = 0;

    while (i < row1Num) {
      var j = 0;
      stringRecord += "<ul>";

      while (j < column1Num) {
        numberRecord = Number(rememberArray1[i][j]) + Number(rememberArray2[i][j]);
        stringRecord += "<li><input type=\"number\" value=\"".concat(numberRecord, "\" /></li>");
        j++;
      }

      i++;
      stringRecord += "</ul>";
    }

    outputArray.innerHTML = stringRecord;
  } else {
    alert("두 행렬의 row 값이나 column 값이 같지 않습니다.");
  }
};

var minusArray = function minusArray() {
  rememberArray1 = [];
  rememberArray2 = [];
  mathA();
  mathB();

  if (row1Num == row2Num && column1Num == column2Num) {
    var stringRecord = "";
    var numberRecord = 0;
    var i = 0;

    while (i < row1Num) {
      var j = 0;
      stringRecord += "<ul>";

      while (j < column1Num) {
        numberRecord = Number(rememberArray1[i][j]) - Number(rememberArray2[i][j]);
        stringRecord += "<li><input type=\"number\" value=\"".concat(numberRecord, "\" /></li>");
        j++;
      }

      i++;
      stringRecord += "</ul>";
    }

    outputArray.innerHTML = stringRecord;
  } else {
    alert("두 행렬의 row 값이나 column 값이 같지 않습니다.");
  }
};

var resetAll = function resetAll() {
  secondTool1ResetFunction();
  secondTool2ResetFunction();
  outputArray.innerHTML = "";
};

var multiplyArray = function multiplyArray() {
  rememberArray1 = [];
  rememberArray2 = [];
  mathA();
  mathB();

  if (column1Num == row2Num) {
    var stringRecord = "";
    var numberRecord = 0;
    var i = 0;

    while (i < rememberArray1.length) {
      var j = 0;
      stringRecord += "<ul>";

      while (j < rememberArray2[i].length) {
        var k = 0;
        numberRecord = 0;

        while (k < rememberArray1[i].length) {
          numberRecord += rememberArray1[i][k] * rememberArray2[k][j];
          k++;
        }

        stringRecord += "<li><input type=\"number\" value=\"".concat(numberRecord, "\"/></li>");
        j++;
      }

      i++;
      stringRecord += "</ul>";
    }

    outputArray.innerHTML = stringRecord;
  }
};