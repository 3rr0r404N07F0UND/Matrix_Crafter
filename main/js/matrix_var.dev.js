"use strict";

var arrayPlus1 = document.querySelector("#arrayPlus1");
var arrayPlus2 = document.querySelector("#arrayPlus2");
var inputArray1 = document.querySelector("#inputArray1");
var inputArray2 = document.querySelector("#inputArray2");
var outputArray = document.querySelector("#outputArray");
var firstTool1 = document.querySelector("#firstTool1");
var secondTool1 = document.querySelector("#secondTool1");
var secondTool2 = document.querySelector("#secondTool2");
var inputArrayNum1 = document.querySelector("#inputArrayNum1");
var inputArrayNum2 = document.querySelector("#inputArrayNum2");
var secondTool1Reset = document.querySelector("#secondTool1Reset");
var secondTool2Reset = document.querySelector("#secondTool2Reset");
var secondTool1Random = document.querySelector("#secondTool1Random");
var secondTool2Random = document.querySelector("#secondTool2Random");
var multiply = document.querySelector("#multiply");
var minusID = document.querySelector("#minusID");
var plusID = document.querySelector("#plusID");
var resetID = document.querySelector("#resetID");
var ruleID = document.querySelector("#ruleID");
var okID = document.querySelector("#okID");
var warningID = document.querySelector("#warningID");
var warningInner = document.querySelector("#warningInner");
var warningOk = document.querySelector("#warningOk");
var row1 = document.querySelector("#row1");
var row1Num = 0;
var column1 = document.querySelector("#column1");
var column1Num = 0;
var row2 = document.querySelector("#row2");
var row2Num = 0;
var column2 = document.querySelector("#column2");
var column2Num = 0;
var numberLength = /^-?[1-9]?[0-9]?$/;
var checkMinus = /(?:[\0-\/:-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/gi;
var rowColumnLength = /^[1]?[0-9]$/;
var rowColumnLengthSingle = /^[1-9]$/;
var rememberArray1 = [];
var rememberArray2 = [];
var outOfValue = null;