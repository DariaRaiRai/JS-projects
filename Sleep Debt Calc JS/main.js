const getSleepHours = (day) => {
  if (day === "Monday") {
    return 8;
  } else if (day === "Tuesday") {
    return 6;
  } else if (day === "Wednesday") {
    return 8;
  } else if (day === "Thursday") {
    return 7;
  } else if (day === "Friday") {
    return 7;
  } else if (day === "Saturday") {
    return 10;
  } else if (day === "Sunday") {
    return 5;
  }
};
console.log(getSleepHours("Wednesday"));

const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours * 7;
};

console.log(getIdealSleepHours(6));

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if ((actualSleepHours = idealSleepHours)) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got " +
        (actualSleepHours - idealSleepHours) +
        " hour(s) more sleep than you needed this week which is more sleep than needed."
    );
  } else {
    "You got " +
      (idealSleepHours - actualSleepHours) +
      " hour(s) less sleep than you needed this week. Go get some rest.";
  }
};

calculateSleepDebt();
