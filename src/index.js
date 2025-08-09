module.exports = function toReadable(number) {
  let result = '';
  const zero = 'zero';
  const one = 'one';
  const two = 'two';
  const three = 'three';
  const four = 'four';
  const five = 'five';
  const six = 'six';
  const seven = 'seven';
  const eight = 'eight';
  const nine = 'nine';

  const twenty = 'twenty';
  const thirty = 'thirty';
  const forty = 'forty';
  const fifty = 'fifty';
  const sixty = 'sixty';
  const seventy = 'seventy';
  const eighty = 'eighty';
  const ninety = 'ninety';

  const oneHundred = 'one hundred';
  const twoHundred = 'two hundred';
  const threeHundred = 'three hundred';
  const fourHundred = 'four hundred';
  const fiveHundred = 'five hundred';
  const sixHundred = 'six hundred';
  const sevenHundred = 'seven hundred';
  const eightHundred = 'eight hundred';
  const nineHundred = 'nine hundred';

  switch (number) {
    case 0:
      return zero;
    case 1:
      return one;
    case 2:
      return two;
    case 3:
      return three;
    case 4:
      return four;
    case 5:
      return five;
    case 6:
      return six;
    case 7:
      return seven;
    case 8:
      return eight;
    case 9:
      return nine;
    default:
      break;
  }

  switch (Math.floor(number / 100) * 100) {
    case 100:
      result += oneHundred;
      break;
    case 200:
      result += twoHundred;
      break;
    case 300:
      result += threeHundred;
      break;
    case 400:
      result += fourHundred;
      break;
    case 500:
      result += fiveHundred;
      break;
    case 600:
      result += sixHundred;
      break;
    case 700:
      result += sevenHundred;
      break;
    case 800:
      result += eightHundred;
      break;
    case 900:
      result += nineHundred;
      break;
    default:
      break;
  }

  let tens = '';
  switch (Math.floor((number % 100) / 10) * 10) {
    case 20:
      tens = twenty;
      break;
    case 30:
      tens = thirty;
      break;
    case 40:
      tens = forty;
      break;
    case 50:
      tens = fifty;
      break;
    case 60:
      tens = sixty;
      break;
    case 70:
      tens = seventy;
      break;
    case 80:
      tens = eighty;
      break;
    case 90:
      tens = ninety;
      break;
    default:
      break;
  }

  if (tens) {
    if (result) {
      result += ' ';
    }
    result += tens;
  }

  let units = '';
  if (number % 100 >= 10 && number % 100 < 20) {
    switch (number % 100) {
      case 10:
        units = 'ten';
        break;
      case 11:
        units = 'eleven';
        break;
      case 12:
        units = 'twelve';
        break;
      case 13:
        units = 'thirteen';
        break;
      case 14:
        units = 'fourteen';
        break;
      case 15:
        units = 'fifteen';
        break;
      case 16:
        units = 'sixteen';
        break;
      case 17:
        units = 'seventeen';
        break;
      case 18:
        units = 'eighteen';
        break;
      case 19:
        units = 'nineteen';
        break;
      default:
        break;
    }

    if (result) {
      result += ' ';
    }
    result += units;
    return result;
  }

  switch (number % 10) {
    case 1:
      units = one;
      break;
    case 2:
      units = two;
      break;
    case 3:
      units = three;
      break;
    case 4:
      units = four;
      break;
    case 5:
      units = five;
      break;
    case 6:
      units = six;
      break;
    case 7:
      units = seven;
      break;
    case 8:
      units = eight;
      break;
    case 9:
      units = nine;
      break;
    default:
      break;
  }

  if (units) {
    if (result) {
      result += ' ';
    }
    result += units;
  }

  return result;
};
