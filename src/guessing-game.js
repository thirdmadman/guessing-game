class GuessingGame {
  constructor() {}
  /**
   * This method accepts min and max value of range of number to guess
   * @param {*} min
   * @param {*} max
   */

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  /**
   * This method returns solution candidate (you make an assumption based on range and previous assumptions)
   * @returns
   */
  guess() {
    this.middle = Math.round((this.min + this.max) / 2);
    return this.middle;
  }

  /**
   * This method is called if prev call of guess() returned number which is greater than answer
   */
  lower() {
    this.max = this.middle;
  }

  /**
   * This method is called if prev call of guess() returned number which is lower than answer
   */
  greater() {
    this.min = this.middle;
  }
}

module.exports = GuessingGame;
