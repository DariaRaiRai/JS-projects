class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudent === "number") {
      this._numberOfStudents === newNumberOfStudents;
    } else {
      console.log("Invalid input: newNumberOfStudents must be set to a number");
    }
  }

  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }
  static pickSubstituteTeacher(substitueTeachers) {
    const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
    console.log(subtituteTeachers[randomIndex]);
  }
}
class PrimarySchool extends School {
  constructor(name, pickupPolicy, numberOfStudents) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

lass HighSchool extends School {
    constructor(name, sportsTeams, numberOfStudents) {
      super(name, 'HighSchool', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      return this._sportsTeams;
    }
  }