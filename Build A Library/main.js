class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._rating;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    let ratingSum = this.ratings.reduce(
      (accumulator, rating) => accumulator + rating
    );
    return ratingsSum / this.ratings.length;
  }

  addRating(value) {
    this.ratings.push(value);
  }
}
