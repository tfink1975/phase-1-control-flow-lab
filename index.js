function scuberGreetingForFeet(ride){
  let cost
  if (ride <= 400) {
    cost = 'This one is on me!';
  } else if (ride > 400 && ride < 2000) {
    cost = 'That will be twenty bucks.';
  } else if (ride > 2000 && ride < 2500) {
    cost = 'I will gladly take your thirty bucks.';
  } else if (ride > 2500) {
    cost = 'No can do.';
  }
  return cost;
}

function ternaryCheckCity(city){
  let result;
  return result = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
   
}

function switchOnCharmFromTip(tip){
 
  switch (tip) {
    case 'generous': {
      tip = "Thank you so much."
      console.log(tip);
      break;
    }
    case 'not as generous': {
      tip = "Thank you.";
      console.log(tip);
      break;
    }
    default: {
      tip = "Bye.";
      console.log(tip);
      break;
    }
  }
  return tip;
}