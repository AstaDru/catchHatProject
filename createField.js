
import {createTwoRandomNums} from "./helpers.js"

 const createField = (width, height, percentageOfHalls) => {
    let fieldList = []
    if (
      width < 3 ||
      width > 10 ||
      height < 3 ||
      height > 10 ||
      percentageOfHalls > 30
    ) {
      console.log("Please add correct field details");
    } else {
      // generate field  start

      const totalIndexes = width * height;
      const totalHalls = Math.ceil((totalIndexes * percentageOfHalls) / 100);
      let randomHallsLocationsArray = [];
  
      for (let y = 0; y < totalHalls; y++) {
        const randomHallLocation = createTwoRandomNums(width, height);
        randomHallsLocationsArray.push(randomHallLocation);
      }

      const randomNumbersForHat = createTwoRandomNums(width, height);
      const hatLocation = randomNumbersForHat;
      const generatedField = generateFieldList(height, width, randomHallsLocationsArray, hatLocation)
      fieldList.push(...generatedField)
    }
      return fieldList;
  };




  const generateFieldList = (height, width, randomHallsLocationsArray, hatLocation) => {
    const fieldList = []
    
    const hat = "^";
    const hole = "O";
    const fieldCharacter = "░";
    const pathCharacter = "*";

    for (let i = 0; i < height; i++) {
      fieldList.push([]);
      // outer array loop, add rows of arrays
      for (let n = 0; n < width; n++) {
        //inner array loop, add content in row array
        const filterRandomHallLocation = randomHallsLocationsArray.filter(
          (oneHall) => oneHall.randomW === n && oneHall.randomH === i
        );
        // add path character to top left corner
        if (i === 0 && n === 0) {
          fieldList[i].push(pathCharacter);
          // add random hat
        } else if (hatLocation.randomW === n && hatLocation.randomH === i) {
          fieldList[i].push(hat);
          // add random halls
        } else if (filterRandomHallLocation.length !== 0) {
          fieldList[i].push(hole);
          //add field characters in left spaces
        } else {
          fieldList[i].push(fieldCharacter);
        }
      }
    }
    return fieldList
  }
  
export default createField