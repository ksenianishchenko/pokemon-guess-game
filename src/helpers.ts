export const getRandomElements = (arr:any, currentQuestionId:number, numberOfElements:number):any => {
  let set = new Set();

  let count = 1;

  //add correct answer first
  set.add(arr[currentQuestionId].name);

  // add 3 more random options
  while (count < numberOfElements) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    if(!set.has(arr[randomIndex].name)) {
      set.add(arr[randomIndex].name);
      count++;
    }
  }

  let arrayFromSet = Array.from(set);

  let result = arrayFromSet;

  //shuffle array
  result.sort(function(a, b){return 0.5 - Math.random()});
  return result;
}

export const getTypeStyle = (type:string) => {
  let backgroundColor = "";
  switch (type) {
    case "grass":
      backgroundColor = "#9bcc50";
      break;
    case "poison":
      backgroundColor = "#b97fc9";
      break;
    case "fire":
      backgroundColor = "#fd7d24";
      break;
    case "flying":
      backgroundColor = "#3dc7ef";
      break;
    case "water":
      backgroundColor = "#4592c4";
      break;
    case "bug":
      backgroundColor = "#729f3f";
      break;
    case "normal":
      backgroundColor = "#a4acaf";
      break;
    case "electric":
      backgroundColor = "#eed535";
      break;
    case "ground":
      backgroundColor = "#ab9842";
      break;
    case "fairy":
      backgroundColor = "#fdb9e9";
      break;
    case "fighting":
      backgroundColor = "#d56723";
      break;
    case "psychic":
      backgroundColor = "#f366b9";
      break;
    case "rock":
      backgroundColor = "#a38c21";
      break;
    case "steel":
      backgroundColor = "#9eb7b8";
      break;
    case "ghost":
      backgroundColor = "#7b62a3";
      break;
    case "ice":
      backgroundColor = "#51c4e7";
      break;
    case "dragon":
      backgroundColor = "#f16e57";
      break;
    default:
      backgroundColor = "#000";
      break;
  }
  return { backgroundColor, color: "#FFF", margin: "5px" };
};

export const getStatsShortStyle = (statName:string) => {
  switch (statName) {
    case "hp":
      return "hp";
    case "attack":
      return "atk";
    case "defense":
      return "def"
    case "special-attack":
      return "s-atk";
    case "special-defense":
      return "s-def";
    case "speed":
      return "spd";
    default:
      return statName;
  }
}