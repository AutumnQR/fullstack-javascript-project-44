// eslint-disable-next-line max-len
export const getRandomNumber = (min = 0, max = 100) => Math.floor(min + Math.random() * (max - min + 1));
export const getRandomIndex = (list) => Math.floor(Math.random() * (list.length - 1));
