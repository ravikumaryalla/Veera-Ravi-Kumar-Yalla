const getMultiplesCount = (arr) => {
  const result = {};
  
  for (let i = 1; i <= 9; i++) {
    result[i] = arr.filter(num => num % i === 0).length;
  }

  return result;
}

// Demo usage
const inputArr = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
const output = getMultiplesCount(inputArr);

console.log(output);
