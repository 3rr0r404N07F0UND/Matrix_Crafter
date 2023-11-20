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
        stringRecord = stringRecord + "<li><input type=\"text\" class=\"numberLengthList\" id=\"A".concat(i, "_").concat(j, "\" value=\"\" placeholder=\"0\"/></li>");
        j++;
      }

      stringRecord = stringRecord + "</ul>";
      i++;
    }

    inputArrayNum1.innerHTML = stringRecord;
    row1.value = "";
    column1.value = "";
  } else {
    warningID.style.display = "block";
    warningInner.innerHTML = "잘못된 입력. row와 column에 숫자를 입력해주세요.<br/>음수를 입력하지 마세요.<br/>row와 column에 10자리 이상의 숫자를 넣지 마세요.";
  }

  numberLengthList = document.querySelectorAll(".numberLengthList");
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
        stringRecord = stringRecord + "<li><input type=\"text\" class=\"numberLengthList\" id=\"B".concat(i, "_").concat(j, "\" value=\"\" placeholder=\"0\"/></li>");
        j++;
      }

      stringRecord = stringRecord + "</ul>";
      i++;
    }

    inputArrayNum2.innerHTML = stringRecord;
    row2.value = "";
    column2.value = "";
  } else {
    warningID.style.display = "block";
    warningInner.innerHTML = "잘못된 입력. row와 column에 숫자를 입력해주세요.<br/>음수를 입력하지 마세요.<br/>row와 column에 10자리 이상의 숫자를 넣지 마세요.";
  }

  numberLengthList = document.querySelectorAll(".numberLengthList");
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
  ruleID.style.display = "none";
};

var secondTool1RandomFunction = function secondTool1RandomFunction() {
  var i = 0;

  while (i < row1Num) {
    var j = 0;

    while (j < column1Num) {
      var _arrayNum = "#A".concat(i, "_").concat(j);

      var array1Input = document.querySelector(_arrayNum);
      var randomNum = parseInt(Math.random() * (99 - -99) + -99);
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
        stringRecord += "<li><input type=\"text\" value=\"".concat(numberRecord, "\" disabled/></li>");
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
        stringRecord += "<li><input type=\"text\" value=\"".concat(numberRecord, "\" disabled/></li>");
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

var resetAll = function resetAll() {
  secondTool1ResetFunction();
  secondTool2ResetFunction();
  outputArray.innerHTML = "";
};

var plusComma3Number = function plusComma3Number() {
  outOfValue = document.querySelectorAll(".outOfValue");
  outOfValue.forEach(function (nopValue, index, arrow) {
    outOfValueNumber = outOfValue[index].value;
    outOfValueNumberChangeValue = outOfValueNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    outOfValue[index].value = outOfValueNumberChangeValue;
  });
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

      while (j < rememberArray2[1].length) {
        var k = 0;
        numberRecord = 0;

        while (k < rememberArray1[1].length) {
          numberRecord += rememberArray1[i][k] * rememberArray2[k][j];
          k++;
        }

        stringRecord += "<li><input type=\"text\" value=\"".concat(numberRecord, "\" class=\"outOfValue\" disabled/></li>");
        j++;
      }

      i++;
      stringRecord += "</ul>";
    }

    outputArray.innerHTML = stringRecord;
  } else if (row1Num == column2Num) {
    var _stringRecord = "";
    var _numberRecord = 0;
    var _i = 0;

    while (_i < rememberArray2.length) {
      var _j = 0;
      _stringRecord += "<ul>";

      while (_j < rememberArray1[1].length) {
        var _k = 0;
        _numberRecord = 0;

        while (_k < rememberArray2[1].length) {
          _numberRecord += rememberArray2[_i][_k] * rememberArray1[_k][_j];
          _k++;
        }

        _stringRecord += "<li><input type=\"text\" value=\"".concat(_numberRecord, "\" disabled/></li>");
        _j++;
      }

      _i++;
      _stringRecord += "</ul>";
    }

    outputArray.innerHTML = _stringRecord;
  } else {
    warningID.style.display = "block";
    warningInner.innerHTML = "첫번째 행렬의 column 값과 두번째 행렬의 row값이 다릅니다.";
  }

  plusComma3Number();
};

var warningOkFunction = function warningOkFunction() {
  warningID.style.display = "none";
};

var numberLengthListFunction = function numberLengthListFunction() {
  var i = 0;

  while (i < numberLengthList.length) {
    numberLengthList[i].value > 99 && (numberLengthList[i].value = 99);
    numberLengthList[i].value < -99 && (numberLengthList[i].value = -99);
    numberLength.test(numberLengthList[i].value) == false && (numberLengthList[i].value = "");
    numberLengthList[i].value == "-0" && (numberLengthList[i].value = "");
    i++;
  }
};