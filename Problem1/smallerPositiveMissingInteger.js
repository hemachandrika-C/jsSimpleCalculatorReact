// Write a function in Javascript:
// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than
// 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range
// [−1,000,000..1,000,000].


//Step 0:remove duplicates in an array

//step1:sort an given array

//step 2:filter value greater than 1

//step 3:for__looping based on Condition 

//step 4:check minimum positive integers starting from 1 onwards in between missing array.
//if exists return x.

//step 4:else continue the loop get lastnumber + 1

let array = [1,2,3]
function solution(inputArray){
    let newArray = [...inputArray]; 
    let removeDuplicates = [];
    let position = 1;

    //step 0:remove duplicates in an array
    for (let i = 0; i <= newArray.length; i++) {
        if (newArray.includes(i)) {
          let filterData = newArray.find((el) => el === i);
          removeDuplicates.push(filterData)
        }
      }

    //step 1:sort an given array using array order
     let sortValues = removeDuplicates.sort((num1,num2)=> num1 - num2);



    //step 2:filterering value greater than equal to 1
    let filterValue = sortValues.filter((greaterthanOne)=> greaterthanOne >= 1);


    //step 3:for__looping based on Condition
    for(let i =0 ;i<filterValue.length;i++){
        
        //check minimum positive integers starting from 1 onwards in between missing array.if exists return x.
        if(position < filterValue[i]){
            return position;
        }

        position = filterValue[i] + 1;
    }
   
    return position;
}

let output = solution([-1,1,3,4]);
let output1 = solution([1, 3, 6, 4, 1, 2]);
let output2 = solution([1, 2, 3]);


console.log(output);
console.log(output1);
console.log(output2);


//Note
//For loop condition for output[-1,1,3,4]
//iteration process:

//first iterate:
//i=0;filtervalue = [1,3,4]

//position =1 ,fitervalue[i] = 1 
//condition checks positions <filtervalue[i] ==>false
//return position 2


//second iterate:
//position =2 ,fitervalue[i] = 3
//condition checks positions <filtervalue[i] ==>true
//break loop
//return position 







