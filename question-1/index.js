// QUESTION 1
function lowerCaseWords(inputArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(inputArray)) {
      reject("Input is not an array");
    } else {
      const lowercaseWords = inputArray.filter(item => typeof item === 'string').map(word => word.toLowerCase());
      if (lowercaseWords.length > 0) {
        resolve(lowercaseWords);
      } else {
        reject("ERROR ! No lowercase words found.");
      }
    }
  });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
  .then(result => {
    console.log(result); // lowercase output as required.
  })
  .catch(error => {
    console.error(error);
  });
