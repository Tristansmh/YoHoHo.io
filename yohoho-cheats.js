(function() {
  console.log("Yohoho.io Cheats loaded!");

  showCheats(); // Show control info
  document.title = "*HACKED* YoHoHo.io - pirate battle royale io game"; // Change title
  document.addEventListener('keydown', cheats, false);

  function showCheats() {
    var box = document.getElementById("desktop-controls");
    if (!box) return;

    var controls = document.createElement("div");
    controls.className = "title2";
    controls.id = "hackids";

    var hackselement = document.createElement("div");
    var hackstextnode = document.createTextNode(
      "Controls:\n" +
      "I - Change Island (Conflicts with XP)\n" +
      "O - Set Coins\n" +
      "P - Change Pet\n" +
      "L - Set Pet Level\n" +
      "C - Change Character\n" +
      "X - Set XP (Conflicts with Island)"
    );
    hackselement.appendChild(hackstextnode);
    controls.appendChild(hackselement);
    box.appendChild(controls);
  }

  function cheats(e) {
    switch (e.keyCode) {
      case 79: // O - Coins
        setNumber("coinsOwned", "coins", "homepage-booty", "skin-popup-booty");
        break;

      case 88: // X - XP
        setXP();
        break;

      case 67: // C - Character
        setRange("playerSkin", 1, 35, "character");
        break;

      case 80: // P - Pet
        setRange("playerPet", 1, 7, "pet");
        break;

      case 76: // L - Pet Level
        setRange("playerPetLevel", 1, 14, "pet level");
        break;

      case 73: // I - Island
        setIsland();
        break;
    }
  }

  function setNumber(key, label, ...ids) {
    var val = prompt(`What would you like to set your ${label} to?`);
    if (isNaN(val)) return alert("Please enter a valid number.");
    localStorage.setItem(key, val);
    ids.forEach(id => {
      var el = document.getElementById(id);
      if (el) el.innerHTML = val;
    });
    alert(`${label} set! Reloading...`);
    location.reload();
  }

  function setRange(key, min, max, label) {
    var val = prompt(`Set your ${label} (Choose between ${min} and ${max})`);
    if (isNaN(val)) return alert("Please enter a valid number.");
    val = parseInt(val);
    if (val < min || val > max)
      return alert(`Please choose a number between ${min} and ${max}.`);
    localStorage.setItem(key, val);
    alert(`${label} set! Reloading...`);
    location.reload();
  }

  function setXP() {
    var val = prompt("Set your XP:");
    if (isNaN(val)) return alert("Please enter a valid number.");
    val = Math.min(Math.max(parseInt(val), 0), 13500);
    localStorage.setItem("playerXP", val);
    alert("XP set! Reloading...");
    location.reload();
  }

  function setIsland() {
    var choice = prompt(
      "Which island would you like to travel to?\n" +
      "1 = Tortuga\n2 = Beach\n3 = Easter\n4 = Wreck\n5 = Aztec\n6 = Volcano\n7 = Village"
    );
    var xpLevels = [0, 140, 700, 2100, 4400, 7600, 13500];
    if (choice < 1 || choice > 7 || isNaN(choice))
      return alert("Enter a number between 1 and 7.");
    localStorage.setItem("playerXP", xpLevels[choice - 1]);
    alert("Island changed! Reloading...");
    location.reload();
  }
})();
