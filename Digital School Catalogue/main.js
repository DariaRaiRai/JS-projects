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

class HighSchool extends School {
  constructor(name, sportsTeams, numberOfStudents) {
    super(name, "HighSchool", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  "Students must be picked up by a parent, guardian, or a family member over the age of 13.",
  514
);
lorraineHansbury.quickFacts();

PrimarySchool.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);

const alSmith = new HighSchool(
  "Al E. Smith",
  ["Baseball", "Basketball", "Volleyball", "Track and Field"],
  415
);
console.log(alSmith.sportsTeams);
