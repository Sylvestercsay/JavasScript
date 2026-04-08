function even(arr) {
  const evenNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }

  return evenNumbers;
}

const originalArray = [2, 7, 4, 1, 8, 3, 6, 9, 10];

const evenArray = even(originalArray);

console.log("Original array:");
console.log(originalArray);

console.log("Even numbers array:");
console.log(evenArray);