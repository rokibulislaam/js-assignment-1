const checkIfZeroOrPositiveOrNegative = (value) => {
  if (value == 0) {
    console.log("value = 0")
  } else if (value < 0) {
    console.log("value = negative");
  } else {
    console.log("value = positive")
  }
}

checkIfZeroOrPositiveOrNegative(1)
checkIfZeroOrPositiveOrNegative(-1)
checkIfZeroOrPositiveOrNegative(0)