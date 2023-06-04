

import game from "./game.js";
import createField from "./createField.js";

const fieldCharacter = "░";
const pathCharacter = "*";
const fieldArray = [
  ["░", "O", "O"],
  ["░", "*", "░"],
  ["░", "^", "░"],
];

class Field {
  constructor(field) {
    this.field = field;
  }
  print() {
    console.log(this.field.join("\n"));
  }
  updateField(currLocation, nextLocation) {
    const { nextAsterixOuterLoc, nextAsterixInnerLoc } = nextLocation;
    const { outer, inner } = currLocation;
    this.field[outer][inner] = fieldCharacter;
    this.field[nextAsterixOuterLoc][nextAsterixInnerLoc] = pathCharacter;
  }
  reset() {
    this.field = fieldArray;
  }
  generateField(width, height, percentageOfHalls) {
    const generatedField = createField(width, height, percentageOfHalls);
    if (generatedField.length > 0) {
      console.log("went to generate field");
      this.field = generatedField;
    } else {
      console.log("something went wrong with generating a field");
    }
    console.log("generatedField " + JSON.stringify(generatedField));
    return "worked";
  }
}
const myField = new Field(fieldArray);
  
game(myField);

