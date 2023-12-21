const rpgCharacterPicker = {
    jobs: ['Knight', 'Mage', 'Rogue', 'Cleric', 'Archer', 'Druid', 'Bard', 'Alchemist'],
    races: ['Elf', 'Goblin', 'Human', 'Demi-Human',],
    extraSkills: ['Stealth', 'Telekinesis', 'Shape-shifting', 'Elemental Control', 'Healing', 'Invisibility', 'Summoning'],
    goals: ['Seek vengeance for a fallen comrade', 'Unlock the secrets of ancient magic', 'Become the greatest warrior in the land', 'Find a lost artifact and return it to its rightful place', 'Restore balance to the world', 'Discover the truth behind a mysterious prophecy']
}

const randomPicker = (lentgh) => Math.floor(Math.random() * lentgh)


const randomizeCharacter = () => {
    const finalCharacter = []
    for (let props in rpgCharacterPicker) {
        switch (props) {
            case 'jobs': finalCharacter.push(`Your worth to be a ${rpgCharacterPicker[props][randomPicker(rpgCharacterPicker[props].length)]}`); break;
            case 'races': finalCharacter.push(`You are destiend born as a ${rpgCharacterPicker[props][randomPicker(rpgCharacterPicker[props].length)]}`); break;
            case 'extraSkills': finalCharacter.push(`You are blessed with a super ${rpgCharacterPicker[props][randomPicker(rpgCharacterPicker[props].length)]} skills`); break;
            case 'goals': finalCharacter.push(`You are destiend to ${rpgCharacterPicker[props][randomPicker(rpgCharacterPicker[props].length)]}`); break;
        }
    }
    return finalCharacter.join("\n")
}

console.log(randomizeCharacter())