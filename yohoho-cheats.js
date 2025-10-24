(function() {
  // attach key listener for cheats
  document.addEventListener('keydown', cheats, false);

  function cheats(e) {
    switch (e.keyCode) {
      case 79: // O - Coins
        setNumber("coinsOwned", "coins");
        break;

      case 88: // X - XP
        setXP();
        break;

      case 67: // C - Character
        setRange("playerSkin", 1, 35);
        break;

      case 80: // P - Pet
        setRange("playerPet", 1, 7);
        break;

      case 76: // L - Pet Level
        setRange("playerPetLevel", 1, 14);
        break;

      case 73: // I - Island
        setIsland();
        break;
    }
  }

  function setNumber(key, label) {
    var val = prompt(`What would you like to set your ${label} to?`);
    if (val === null) return; // user cancelled
    if (isNaN(val)) return;    // invalid input, silently ignore
    localStorage.setItem(key, String(val));
    location.reload();
  }

  function setRange(key, min, max) {
    var val = prompt(`Set a value between ${min} and ${max}:`);
    if (val === null) return;
    if (isNaN(val)) return;
    val = parseInt(val, 10);
    if (val < min || val > max) return;
    localStorage.setItem(key, String(val));
    location.reload();
  }

  function setXP() {
    var val = prompt("Set your XP (0 - 13500):");
    if (val === null) return;
    if (isNaN(val)) return;
    val = Math.min(Math.max(parseInt(val, 10), 0), 13500);
    localStorage.setItem("playerXP", String(val));
    location.reload();
  }

  function setIsland() {
    var choice = prompt(
      "Which island?\n" +
      "1 = Tortuga\n2 = Beach\n3 = Easter\n4 = Wreck\n5 = Aztec\n6 = Volcano\n7 = Village"
    );
    if (choice === null) return;
    if (isNaN(choice)) return;
    choice = parseInt(choice, 10);
    if (choice < 1 || choice > 7) return;
    var xpLevels = [0, 140, 700, 2100, 4400, 7600, 13500];
    localStorage.setItem("playerXP", String(xpLevels[choice - 1]));
    location.reload();
  }
})();
