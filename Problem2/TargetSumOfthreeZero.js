      // Write a function that takes in a non-empty array of distinct integers representing a target sum.
      // the function should find all triplets in the array that sum and return a two dimenstional array of all
      // of all these triplets.the numbers in each triplet should be ordered in ascending orders
      // and the triplets themselves should be ordered in ascending order with respect to the numbers
      // they hold.
      // Sample Input
      // array =[12,3,1,2,-6,5,-8,6]
      // targetSum = 0

      // Sample Output
      //[[-8,2,6],[-8,3,5],[-6,1,5]]

      let input = [12, 3, 1, 2, -6, 5, -8, 6];

      let positiveIntegers = [],
        negativeIntegers = [];
      let resultsObjects = [],
        pairsOfPositiveIntegersPairs = [],
        sumOfPositiveIntegersPairs = [];

      function init() {
        positiveIntegers = [];
        negativeIntegers = [];
        resultsObjects = [];
        pairsOfPositiveIntegersPairs = [];
        sumOfPositiveIntegersPairs = [];
        threeNumberTargetSumZero(input);
      }

      function separateNumberPositiveNegativeIntegers(incomingData) {
        incomingData.map((el, i) => {
          if (incomingData[i] >= 0) positiveIntegers.push(incomingData[i]);
          else negativeIntegers.push(incomingData[i]);
        });
      }

      function threeNumberTargetSumZero(inputArr) {

        let values;

        separateNumberPositiveNegativeIntegers(inputArr);

        //Pairs of positiveIntegers
        for (let i = 0; i < inputArr.length; i++) {
          for (let j = 1; j < inputArr.length; j++) {
            pairsOfPositiveIntegersPairs.push({ i, j });
            sumOfPositiveIntegersPairs.push(i + j);
          }
        }


        for (let i = 0; i < sumOfPositiveIntegersPairs.length; i++) {
          for (let j = 0; j < negativeIntegers.length; j++) {


            let calCulateSum1 =
              sumOfPositiveIntegersPairs[i] + negativeIntegers[j];

            if (calCulateSum1 === 0) {
              values = [
                pairsOfPositiveIntegersPairs[i]["i"],
                pairsOfPositiveIntegersPairs[i]["j"],
                negativeIntegers[j],
              ];

              resultsObjects.push(values);
            }
          }
        }

        console.log(resultsObjects);

      }

      init();