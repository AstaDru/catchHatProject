import {isValidInput} from "./helpers.js"
import nextMove from "./nextMove.js"
import promptSync from 'prompt-sync';

 const prompt = promptSync()
 const hat = "^";


const game = (myField) => {
    let isEndGame = false;
    let currentOuterAsterix = null;
    let currentInnerAsterix = null;
    let endMessage = "";
  
    myField.print()
    const direction = prompt("Choose direction: ");
    const isValidDirection = isValidInput(direction);
  
    if (isValidDirection) {
      for (let i = 0; i < myField.field.length; i++) {
        if (currentOuterAsterix === null && currentInnerAsterix === null) {
          for (let t = 0; t < myField.field[i].length; t++) {
            if (myField.field[i][t] === "*") {
              currentOuterAsterix = i;
              currentInnerAsterix = t;
              break;
            }
          }
        } else {
          break;
        }
      }
  
      const nextUserMove = nextMove(
        direction,
        currentOuterAsterix,
        currentInnerAsterix,
        myField.field
      );
      const { nextAsterixOuterLoc, nextAsterixInnerLoc } = nextUserMove;
      //   if next move is a hall end game and add message
      console.log(`next move is: ${nextAsterixOuterLoc}, ${nextAsterixInnerLoc}`);
  
      console.log(`next move is: ${myField.field[nextAsterixOuterLoc]}`);
      isEndGame =
        myField.field[nextAsterixOuterLoc][nextAsterixInnerLoc] === "O"
          ? true
          : false;
  
      if (isEndGame) {
        endMessage = "You fell in the hall. Sorry, you lost.";
      } else {
        isEndGame =
          myField.field[nextAsterixOuterLoc][nextAsterixInnerLoc] === "^"
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
        game(myField);
      }
    } else {
      console.log("please insert correct input");
      game(myField);
    }
  };


export default game