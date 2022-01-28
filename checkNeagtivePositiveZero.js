const checkNegativePositiveZero = (val) => {
  if (val == 0) {
    console.log("Number is zero")
  } else if (val < 0) {
    console.log("Number is negative");
  } else {
    console.log("Number is positive")
  }
}

checkNegativePositiveZero(1)
checkNegativePositiveZero(-1)
checkNegativePositiveZero(0)