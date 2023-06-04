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
  export const findCurrentAsterixLocation = (myField) => {
    let outerAsterix = null
    let innerAsterix = null
   //loop through outer array field
   for (let i = 0; i < myField.field.length; i++) {
     //if asterix still not found (is null) then keep looking
   if (outerAsterix === null && innerAsterix === null) {
   
     //loop through inner array field
     for (let t = 0; t < myField.field[i].length; t++) {
       if (myField.field[i][t] === "*") {
         outerAsterix = i;
         innerAsterix = t;
         break;
       }
     }
   } else {
     break;
   }
 }
 return {outerAsterix, innerAsterix}
 }
  
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

