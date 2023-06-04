import {isValidInput, findCurrentAsterixLocation} from "./helpers.js"
import nextMove from "./nextMove.js"
import promptSync from 'prompt-sync';

 const prompt = promptSync()
 const hat = "^";


const game = (myField, outerAsterix=null, innerAsterix=null) => {
    let isEndGame = false;
    let currentOuterAsterix = outerAsterix;
    let currentInnerAsterix = innerAsterix;
    let endMessage = "";
  
    myField.print()
    const direction = prompt("Choose a direction (d-down, u-up, r-right, l-left): ");
    const isValidDirection = isValidInput(direction);
  
    if (isValidDirection) {
      if (currentOuterAsterix === null && currentInnerAsterix === null){
        //if no current asterix then find it
        const currentAsterixLocation = findCurrentAsterixLocation(myField)
        currentOuterAsterix = currentAsterixLocation.outerAsterix
        currentInnerAsterix = currentAsterixLocation.innerAsterix
      }
      
      const nextUserMove = nextMove(
        direction,
        currentOuterAsterix,
        currentInnerAsterix,
        myField.field
      );

      const { nextAsterixOuterLoc, nextAsterixInnerLoc } = nextUserMove;
      //update current asterix location, when moved direction
      currentOuterAsterix = nextAsterixOuterLoc;
      currentInnerAsterix = nextAsterixInnerLoc;

      //   if next move is a hall, end game and add a message
      isEndGame =
        myField.field[nextAsterixOuterLoc][nextAsterixInnerLoc] === "O"
          ? true
          : false;
  
      if (isEndGame) {
        endMessage = "You fell in the hall. Sorry, you lost.";
      } else {
        isEndGame =
          myField.field[nextAsterixOuterLoc][nextAsterixInnerLoc] === hat
            ? true
            : false;
        endMessage =
          myField.field[nextAsterixOuterLoc][nextAsterixInnerLoc] === hat
            ? "You have caught a hat. Congrats, you won."
            : "";
      }
  
      if (isEndGame) {
        const playAgain = prompt(`${endMessage} Would you like to play again? `);
  
        if (playAgain.toLowerCase() === "yes") {
          const width = prompt(`Choose width, min-3:`);
          const height = prompt(`Choose height, min-3:`);
          const percpercentage = prompt(
            `Choose percpercentage of halls, max-30:`
          );
          const answer = myField.generateField(width, height, percpercentage);
          console.log("Thank you, enjoy your game!");
          if (answer === "worked") {
            game(myField);
          }
        } else {
          console.log("Thank you for playing with us!");
        }
      } else {
        myField.updateField(
          { outer: currentOuterAsterix, inner: currentInnerAsterix },
          nextUserMove
        );
        game(myField,currentOuterAsterix, currentInnerAsterix );
      }
    } else {
      console.log("please insert correct input");
      game(myField, currentOuterAsterix, currentInnerAsterix);
    }
  };


export default game