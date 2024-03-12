export const COUNT_OF_GAMES = 3;
export const getRandomNumber = (max = 20) => Math.floor(Math.random() * max);
export const getRandomIndex = (list) =>
  Math.floor(Math.random() * (list.length - 1));

export const getCorrectAnswerNOD = (numOne, numTwo) => {
  if (numTwo !== 0) {
    const residue = numOne % numTwo;
    return getCorrectAnswerNOD(numTwo, residue);
  }
  return numOne;
};

export const getCorrectAnswerEven = (randomNum) => {
  if (randomNum % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

export const getCorrectAnswerCalc = (nums, mathOperator) => {
  switch (mathOperator) {
    case '+':
      return nums[0] + nums[1];
    case '-':
      return nums[0] - nums[1];
    case '*':
      return nums[0] * nums[1];
    default:
      return undefined;
  }
};

export const checkCorrectAnswer = (
  correctAnswer,
  answer,
  correctAnswersCount,
  name,
) => {
  if (correctAnswer === answer) {
    console.log('Correct!');

    if (correctAnswersCount >= 3) {
      console.log(`Congratulations, ${name}!`);
      return { correct: true, continue: false };
    }

    return { correct: true, continue: true };
  }

  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  );
  console.log(`Let's try again, ${name}!`);

  return { correct: false, continue: false };
};

export const getRandomMathExpression = () => {
  const mathSyms = ['+', '-', '*'];
  const randomIndex = getRandomIndex(mathSyms);
  return mathSyms[randomIndex];
};

export const getRandomNumbers = () => {
  const numOne = getRandomNumber();
  const numTwo = getRandomNumber();
  return numOne > numTwo ? [numOne, numTwo] : [numTwo, numOne];
};

export const getHiddenProgression = (length = 10) => {
  const progression = getRandomNumber(10);
  const startNumber = getRandomNumber();
  let nextNumber = startNumber + progression;
  const list = [startNumber];

  for (let i = 1; i < length; i += 1) {
    list.push(nextNumber);
    nextNumber += progression;
  }

  const randomIndex = getRandomIndex(list);
  const replacedItem = String(list[randomIndex]);
  const hiddenProgression = list.join(' ').replace(replacedItem, '..');

  return { hiddenProgression, correctAnswer: replacedItem };
};
