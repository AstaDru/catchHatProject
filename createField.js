
import {createTwoRandomNums} from "./helpers.js"

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

 const createField = (width, height, percentageOfHalls) => {
    let fieldList = [];
    if (
      width < 3 ||
      width > 10 ||
      height < 3 ||
      height > 10 ||
      percentageOfHalls > 30
    ) {
      console.log("Please add correct field details");
    } else {
      // generate field  start         ####################################
  
      const totalIndexes = width * height;
      const totalHalls = Math.ceil((totalIndexes * percentageOfHalls) / 100);
      let randomIndexesArray = [];
  
      for (let y = 0; y < totalHalls; y++) {
        const randomHallLocation = createTwoRandomNums(width, height);
        randomIndexesArray.push(randomHallLocation);
      }
      // hat hole fieldCharacter pathCharacter
  
      const randomNumbersObject = createTwoRandomNums(width, height);
      const hatLocation = randomNumbersObject;
      console.log(
        "randomIndexesArray" +
          JSON.stringify(randomIndexesArray) +
          JSON.stringify(totalHalls)
      );
  
      for (let i = 0; i < height; i++) {
        fieldList.push([]);
        // outer rows loop
        for (let n = 0; n < width; n++) {
          //inner row loop
          const filterRandomHallLocation = randomIndexesArray.filter(
            (oneHall) => oneHall.randomW === n && oneHall.randomH === i
          );
          console.log(JSON.stringify(filterRandomHallLocation));
          //random indx loop
          if (i === 0 && n === 0) {
            fieldList[i].push(pathCharacter);
          } else if (hatLocation.randomW === n && hatLocation.randomH === i) {
            fieldList[i].push(hat);
          } else if (filterRandomHallLocation.length !== 0) {
            fieldList[i].push(hole);
          } else {
            fieldList[i].push(fieldCharacter);
          }
        }
      }
    }
    console.log("field array in createField" + JSON.stringify(fieldList));
    return fieldList;
    // generate field  finish         ###################################
  };

export default createField