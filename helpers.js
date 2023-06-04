export const createTwoRandomNums = (width, height) => {
    const randomW = Math.floor(Math.random() * width);
    const randomH = Math.floor(Math.random() * height);
    if (randomW === 0 && randomH === 0) {
      return createTwoRandomNums();
    } else {
      return {
        randomW,
        randomH,
      };
    }
  };
  
 export const isValidInput = (input) => {
    let isValid = false;
    const lowCaseInput = input.toLowerCase();
    if (
      lowCaseInput === "d" ||
      lowCaseInput === "r" ||
      lowCaseInput === "l" ||
      lowCaseInput === "u"
    ) {
      isValid = true;
    } else {
      isValid = false;
    }
    return isValid;
  }

