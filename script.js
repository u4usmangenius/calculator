document.addEventListener("DOMContentLoaded", () => {
  const result = document.getElementById("result");
  const numbers = document.querySelectorAll(".number");
  const operators = document.querySelectorAll(".operator");
  const calculateBtn = document.getElementById("calculate");
  const clearBtn = document.getElementById("clear");
  let isCleared = false;
  let initialValue = "0";

  result.value = initialValue;

  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      if (isCleared) {
        result.value = number.textContent;
        isCleared = false;
      } else {
        result.value =
          result.value === initialValue
            ? number.textContent
            : result.value + number.textContent;
      }
    });
  });

  operators.forEach((operator) => {
    operator.addEventListener("click", () => {
      if (isCleared) {
        result.value = operator.textContent;
        isCleared = false;
      } else {
        result.value =
          result.value === initialValue
            ? operator.textContent
            : result.value + operator.textContent;
      }
    });
  });

  calculateBtn.addEventListener("click", () => {
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = "Syntax Error";
    }
  });

  clearBtn.addEventListener("click", () => {
    if (isCleared) {
      isCleared = false;
    } else {
      result.value = initialValue;
      isCleared = true;
    }
  });
});
