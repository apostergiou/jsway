// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

const fillHouses = () => {
  let houseElement = document.getElementById("house");
  for (let house of houses) {
    let item = document.createElement("option");
    item.innerHTML = house.name;
    item.value = house.code;
    houseElement.appendChild(item);
  }
};

const fillCharacters = (houseCode) => {
  let charactersElement = document.getElementById("characters");
  characters = getCharacters(houseCode);
  for (let character of characters) {
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(character));
    charactersElement.appendChild(item);
  }
};

window.onload = function () {
  fillHouses();
  let houseCode = "";
  document.getElementById("house").addEventListener("change", e => {
    houseCode = e.target.value;
    document.getElementById("characters").innerHTML = "";
    fillCharacters(houseCode);
  });
};

