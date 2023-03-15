arrayPlus1.onclick = arrayPlus1Function;
arrayPlus2.onclick = arrayPlus2Function;
secondTool1Reset.onclick = secondTool1ResetFunction;
secondTool2Reset.onclick = secondTool2ResetFunction;
okID.onclick = okFunction;
secondTool1Random.onclick = secondTool1RandomFunction;
secondTool2Random.onclick = secondTool2RandomFunction;
plusID.onclick = plusArray;
minusID.onclick = minusArray;
resetID.onclick = resetAll;
multiply.onclick = multiplyArray;
warningOk.onclick = warningOkFunction;
row1.addEventListener("input", () => {
  checkMinus.test(row1.value) && (row1.value = "");
  row1.value > 10 && (row1.value = "10");
  rowColumnLength.test(row1.value) || (row1.value = "");
  row1.value < 1 && (row1.value = "");
});
column1.addEventListener("input", () => {
  checkMinus.test(column1.value) && (column1.value = "");
  column1.value > 10 && (column1.value = "10");
  rowColumnLength.test(column1.value) || (column1.value = "");
  column1.value < 1 && (column1.value = "");
});
row2.addEventListener("input", () => {
  checkMinus.test(row2.value) && (row2.value = "");
  row2.value > 10 && (row2.value = "10");
  rowColumnLength.test(row2.value) || (row2.value = "");
  row2.value < 1 && (row2.value = "");
});
column2.addEventListener("input", () => {
  checkMinus.test(column2.value) && (column2.value = "");
  column2.value > 10 && (column2.value = "10");
  rowColumnLength.test(column2.value) || (column2.value = "");
  column2.value < 1 && (column2.value = "");
});
this.addEventListener("input", numberLengthListFunction);
