export const CONFIG = {
    title: "GayGame",
    currency: {
        "title": "gold",
        "bigPictureURL": "https://learn.coderslang.com/gold.svg",
        "smallPictureURL": "https://learn.coderslang.com/gold.svg",
        "bankPictureURL": "https://learn.coderslang.com/castle.svg"
    },
    producers: [{
            id: 1,
            title: 'Ivan',
            baseCost: 1,
            growthRate: 1.1,
            baseProduction: 10,
            pictureURL: 'https://learn.coderslang.com/skeleton.svg'
        },
        {
            id: 2,
            title: 'Gay',
            baseCost: 100,
            growthRate: 1.1,
            baseProduction: 1000,
            pictureURL: 'https://learn.coderslang.com/skeleton.svg'
        },
        {
            id: 3,
            title: 'Lex',
            baseCost: 100000,
            growthRate: 3.1,
            baseProduction: 10000,
            pictureURL: 'https://learn.coderslang.com/skeleton.svg'
        },
        {
            id: 4,
            title: 'Marti',
            baseCost: 10000000,
            growthRate: 1.1,
            baseProduction: 1000,
            pictureURL: 'https://learn.coderslang.com/skeleton.svg'
        },
        {
            id: 5,
            title: 'Gnom',
            baseCost: 100000000,
            growthRate: 1.1,
            baseProduction: 1000,
            pictureURL: 'https://learn.coderslang.com/skeleton.svg'
        }
    ],
    upgrades: [{
            id: 1,
            title: "Meg",
            description: 'Boost',
            multiplier: 2,
            appliesTo: [1, 2, 3],
            pictureURL: 'https://learn.coderslang.com/skeleton.svg',
            price: 1000,
            availabilityCondition: { "currency": 1000 },
        },
        {
            id: 2,
            title: "Mega",
            description: 'Boost',
            multiplier: 5,
            appliesTo: [1, 2, 3],
            pictureURL: 'https://learn.coderslang.com/skeleton.svg',
            price: 1000000,
            availabilityCondition: { "currency": 100000 },
        },
        {
            id: 3,
            title: "Megaz",
            description: 'Boost',
            multiplier: 10,
            appliesTo: [1, 2, 3, 4, 5],
            pictureURL: 'https://learn.coderslang.com/skeleton.svg',
            price: 10000000,
            availabilityCondition: { "currency": 10000000 },
        }
    ],
    achievements: [{
            id: 1,
            title: "Tarot cards",
            description: "The first million gold collected.",
            condition: { currency: 1000000 },
            pictureURL: "https://learn.coderslang.com/tarot.svg"
        },
        {
            id: 2,
            title: "Staff of Power",
            description: "Tamed 10 dragons!",
            condition: { "producers": [{ "id": 8, "quantity": 10 }] },
            "pictureURL": "https://learn.coderslang.com/staff.svg"
        },
        {
            id: 3,
            title: "Treasure chest",
            description: "Collected 100M gold",
            condition: { "currency": 100000000 },
            pictureURL: "https://learn.coderslang.com/treasure.svg"
        }
    ],
    chitChat: [
        { "message": "We need more gold" },
        { "message": "Would you like to know the secret to eternal happiness? Page 246." },
        { "message": "More souls for the master!", "condition": { "currency": 1000 } },
        { "message": "Do you think that you can click your way to the win?", "condition": { "clicks": 100 } },
        { "message": "The universe is at your feet, my lord!", "condition": { "achievementId": 2 } }
    ],
    prestigeLevels: [{
            "id": 1,
            "title": "Beginner",
            "pictureURL": "https://learn.coderslang.com/beginner_medal.svg",
            "multiplier": 1,
            "condition": { "currency": 0 }
        },
        {
            "id": 2,
            "title": "Pro",
            "pictureURL": "https://learn.coderslang.com/cup_pro.svg",
            "multiplier": 2,
            "condition": { "currency": 100000000000000000000 }
        }
    ]
}