// Define weapons and monsters
const weapons = {
    "Sword": { attack: 10, durability: 50 },
    "Bow": { attack: 8, durability: 40 },
    "Axe": { attack: 12, durability: 60 }
};

const monsters = {
    "Goblin": { level: 1, hp: 30 },
    "Orc": { level: 3, hp: 50 },
    "Dragon": { level: 5, hp: 100 }
};

let player = {};
let inventory = [];

// Event listeners
document.getElementById("start-game").addEventListener("click", startGame);
document.getElementById("select-weapon").addEventListener("click", selectWeapon);

// Start game function
function startGame() {
    const playerName = document.getElementById("player-name-input").value;
    if (playerName) {
        player.name = playerName;
        document.getElementById("player-name").classList.add("hidden");
        document.getElementById("weapon-selection").classList.remove("hidden");
        populateWeaponChoices();
    } else {
        alert("Please enter a name!");
    }
}

// Populate weapon choices
function populateWeaponChoices() {
    const weaponChoice = document.getElementById("weapon-choice");
    for (let weapon in weapons) {
        let option = document.createElement("option");
        option.value = weapon;
        option.textContent = weapon;
        weaponChoice.appendChild(option);
    }
}

// Weapon selection function
function selectWeapon() {
    const selectedWeapon = document.getElementById("weapon-choice").value;
    if (selectedWeapon) {
        player.weapon = selectedWeapon;
        inventory.push(selectedWeapon);
        document.getElementById("weapon-selection").classList.add("hidden");
        document.getElementById("inventory").classList.remove("hidden");
        updateInventoryDisplay();
        encounterMonster();
    }
}

// Update inventory display
function updateInventoryDisplay() {
    const inventoryList = document.getElementById("inventory-list");
    inventoryList.innerHTML = "";
    inventory.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        inventoryList.appendChild(listItem);
    });
}

// Monster encounter function
function encounterMonster() {
    const monsterNames = Object.keys(monsters);
    const randomMonster = monsterNames[Math.floor(Math.random() * monsterNames.length)];
    const monster = monsters[randomMonster];

    const monsterDescription = `You have encountered a level ${monster.level} ${randomMonster} with ${monster.hp} hp.`;
    document.getElementById("monster-description").textContent = monsterDescription;
    document.getElementById("monster-encounter").classList.remove("hidden");
}
