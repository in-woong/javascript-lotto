const { Random } = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE, INPUT_MONEY_UNIT } = require('./Constant');

const LOTTO_LENGTH = 6;
const START_NUMBER = 1;
const END_NUMBER = 45;

class Function {
  static validateInputMoney(inputMoney) {
    if (Number(inputMoney) % INPUT_MONEY_UNIT) {
      throw new Error(ERROR_MESSAGE.INPUT_MONEY);
    }
  }

  static getLottoNumber(inputMoney) {
    return Number(inputMoney) / INPUT_MONEY_UNIT;
  }

  static setRandomNumbers() {
    const numbers = [];
    while (numbers.length !== LOTTO_LENGTH) {
      const number = Random.pickNumberInRange(START_NUMBER, END_NUMBER);
      if (!numbers.includes(number)) numbers.push(number);
    }

    return this.sortNumbers(numbers);
  }

  static sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

module.exports = Function;
