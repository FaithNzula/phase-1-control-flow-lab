function scuberGreetingForFeet(feet) {
  if (feet <= 500) {
    return `This one is on me!`
  }
  else if (feet > 2000) {
    return `I will gladly take your thirty bucks.`
  }
  else (feet >= 2500); {
    return `No can do.`
  };
  // Write your code here!
}

function ternaryCheckCity(city) {
  if (city === "NYC"){
    return `Ok, sounds good.`
  }
  else {
    return `No go.`
  }
  
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return `Thank you so much.`
      break;
    case 'not as generous':
      return `Thank you.`
      break;
      default:
      return `Bye.`
  }
}