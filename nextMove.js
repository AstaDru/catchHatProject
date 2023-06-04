 const nextMove = (direction, outerIndx, innerIndx, fieldMap) => {
    let nextAsterixOuterLoc = null;
    let nextAsterixInnerLoc = null;
  
    //          direction "d"             //////////
    if (direction === "d") {
      console.log("direction d");
      if (outerIndx < fieldMap.length - 1) {
        nextAsterixOuterLoc = outerIndx + 1;
      } else {
        nextAsterixOuterLoc = 0;
      }
      nextAsterixInnerLoc = innerIndx;
    }
    //          direction "u"          ////////////
    else if (direction === "u") {
      console.log("direction u");
      if (nextAsterixOuterLoc === 0) {
        nextAsterixOuterLoc = fieldMap.length - 1;
      } else {
        nextAsterixOuterLoc = outerIndx - 1;
      }
      nextAsterixInnerLoc = innerIndx;
    }
  
    //          direction "r"          ////////////
    else if (direction === "r") {
      console.log("direction r");
      if (outerIndx === fieldMap.length - 1) {
        //     outer is last index  @@@@@
        if (innerIndx < fieldMap[outerIndx].length - 1) {
          nextAsterixOuterLoc = outerIndx + 1;
          nextAsterixInnerLoc = innerIndx;
        } else {
          nextAsterixOuterLoc = 0;
          nextAsterixInnerLoc = 0;
        }
      }
      //     outer is not last index  @@@@@
      else {
        if (innerIndx < fieldMap[outerIndx].length - 1) {
          //     inner is not last index  @@@@@
          nextAsterixOuterLoc = outerIndx;
          nextAsterixInnerLoc = innerIndx + 1;
        } else {
          //     inner is  last index  @@@@@
          nextAsterixOuterLoc = outerIndx + 1;
          nextAsterixInnerLoc = 0;
        }
      }
    }
    //          direction "l"             ////////////
    else {
      console.log("direction l");
      if (innerIndx === 0) {
        if (outerIndx === 0) {
          //    inner & outer index = 0         @@@@@@@@@
          nextAsterixOuterLoc = fieldMap.length - 1;
          nextAsterixInnerLoc = fieldMap[outerIndx].length - 1;
        } else {
          //    inner index = 0    outer index is not 0     @@@@@@@@@
          nextAsterixOuterLoc = outerIndx;
          nextAsterixInnerLoc = fieldMap[outerIndx].length - 1;
        }
      } else {
        //    inner index  is not 0     @@@@@@@@@
        nextAsterixOuterLoc = outerIndx;
        nextAsterixInnerLoc = innerIndx - 1;
      }
    }
    return {
      nextAsterixOuterLoc,
      nextAsterixInnerLoc,
    };
  };

export default nextMove