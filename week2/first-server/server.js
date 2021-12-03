const express = require('express');
const app = express();

const PORT = 3000;

const data = {
    mwoMechs: [
        {
            name: "Arctic Cheetah",
            class: "Light Mech"
        },
        {
            name: "Roughneck",
            class: "Heavy Mech"
        },
        {
            name: "Corsair",
            class: "Assault Mech"
        }
    ],
    dndCharacters: [
        {
            name: "Dik'l",
            class: "Bard",
            race: "Goblin",
            alignment: "Chaotic Neutral"
        },
        {
            name: "Scruffy the Janitor",
            class: "Wizard",
            race: "Elf",
            alignment: "Chaotic Neutral"
        },
        {
            name: "Hugan Hornklif",
            class: "Bard",
            race: "Satyr",
            alignment: "Chaotic Neutral"
        }
    ],
    mtgDecks: [
        {
            name: "Da Yeet Fleet",
            winRate: "8/10",
            deckType: "Artifact / Vehicles",
            keyCards: ["Sublime Archangle", "Angelic Exaltation", "Sigil of Valor"]
        },
        {
            name: "Built in Bulk",
            winRate: "7/10",
            deckType: "Creature Buff",
            keyCards: ["Abzan Battle Priest", "Tuskguard Captain", "Mer-Ek Nightblade", "Abzan Falconer"]
        },
        {
            name: "Ricochet",
            winRate: "6/10",
            deckType: "Damage Deflection",
            keyCards: ["Stuffy Doll", "Pariah", "Volcano Hellion", "Zada Hedron Grinder", "Arcbond"]
        }
    ]
}

//Get all data
app.get('/data', (req, res) => res.send(data));

//Get mtg deck data
app.get('/data/mtgDecks', (req, res) => res.send(data.mtgDecks));

//Get d&d character data
app.get("/data/dndCharacters", (req, res) => res.send(data.dndCharacters));

//Get mwo mech data
app.get("/data/mwoMechs", (req, res) => res.send(data.mwoMechs));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});