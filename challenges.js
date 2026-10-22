// 100 KS1 and 100 KS2 picture blending challenges.
// Review spellings and pronunciation against your chosen phonics programme.
// Some advanced KS2 tiles represent word parts, not a single phoneme.
const challenges = {
    "ks1": [
        {
            "sounds": [
                "sh",
                "i",
                "p"
            ],
            "word": "ship",
            "choices": [
                [
                    "fish",
                    "🐟"
                ],
                [
                    "ship",
                    "🚢"
                ],
                [
                    "shop",
                    "🏪"
                ]
            ],
            "hint": "Keep sh together: it makes one sound.",
            "audioKeys": [
                "sh",
                "i",
                "p"
            ]
        },
        {
            "sounds": [
                "c",
                "a",
                "t"
            ],
            "word": "cat",
            "choices": [
                [
                    "cat",
                    "🐈"
                ],
                [
                    "dog",
                    "🐕"
                ],
                [
                    "hat",
                    "🎩"
                ]
            ],
            "hint": "Say each of the three sounds, then blend.",
            "audioKeys": [
                "k",
                "a",
                "t"
            ]
        },
        {
            "sounds": [
                "r",
                "ai",
                "n"
            ],
            "word": "rain",
            "choices": [
                [
                    "sun",
                    "☀️"
                ],
                [
                    "train",
                    "🚂"
                ],
                [
                    "rain",
                    "🌧️"
                ]
            ],
            "hint": "The two letters ai work together.",
            "audioKeys": [
                "r",
                "ai",
                "n"
            ]
        },
        {
            "sounds": [
                "d",
                "o",
                "g"
            ],
            "word": "dog",
            "choices": [
                [
                    "dog",
                    "🐕"
                ],
                [
                    "bed",
                    "🛏️"
                ],
                [
                    "pig",
                    "🐖"
                ]
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "audioKeys": [
                "d",
                "o",
                "g"
            ]
        },
        {
            "sounds": [
                "s",
                "u",
                "n"
            ],
            "word": "sun",
            "choices": [
                [
                    "pig",
                    "🐖"
                ],
                [
                    "sun",
                    "☀️"
                ],
                [
                    "cup",
                    "☕"
                ]
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "audioKeys": [
                "s",
                "u",
                "n"
            ]
        },
        {
            "sounds": [
                "b",
                "e",
                "d"
            ],
            "word": "bed",
            "choices": [
                [
                    "cup",
                    "☕"
                ],
                [
                    "hen",
                    "🐔"
                ],
                [
                    "bed",
                    "🛏️"
                ]
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "audioKeys": [
                "b",
                "e",
                "d"
            ]
        },
        {
            "sounds": [
                "p",
                "i",
                "g"
            ],
            "word": "pig",
            "choices": [
                [
                    "pig",
                    "🐖"
                ],
                [
                    "hen",
                    "🐔"
                ],
                [
                    "net",
                    "🥅"
                ]
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "audioKeys": [
                "p",
                "i",
                "g"
            ]
        },
        {
            "sounds": [
                "c",
                "u",
                "p"
            ],
            "word": "cup",
            "choices": [
                [
                    "net",
                    "🥅"
                ],
                [
                    "cup",
                    "☕"
                ],
                [
                    "fox",
                    "🦊"
                ]
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "audioKeys": [
                "k",
                "u",
                "p"
            ]
        },
        {
            "sounds": [
                "h",
                "e",
                "n"
            ],
            "word": "hen",
            "choices": [
                [
                    "fox",
                    "🦊"
                ],
                [
                    "box",
                    "📦"
                ],
                [
                    "hen",
                    "🐔"
                ]
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "audioKeys": [
                "h",
                "e",
                "n"
            ]
        },
        {
            "sounds": [
                "n",
                "e",
                "t"
            ],
            "word": "net",
            "choices": [
                [
                    "net",
                    "🥅"
                ],
                [
                    "box",
                    "📦"
                ],
                [
                    "bus",
                    "🚌"
                ]
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "audioKeys": [
                "n",
                "e",
                "t"
            ]
        },
        {
            "sounds": [
                "f",
                "o",
                "x"
            ],
            "word": "fox",
            "choices": [
                [
                    "bus",
                    "🚌"
                ],
                [
                    "fox",
                    "🦊"
                ],
                [
                    "sock",
                    "🧦"
                ]
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "audioKeys": [
                "f",
                "o",
                "x"
            ]
        },
        {
            "sounds": [
                "b",
                "o",
                "x"
            ],
            "word": "box",
            "choices": [
                [
                    "sock",
                    "🧦"
                ],
                [
                    "duck",
                    "🦆"
                ],
                [
                    "box",
                    "📦"
                ]
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "audioKeys": [
                "b",
                "o",
                "x"
            ]
        },
        {
            "sounds": [
                "b",
                "u",
                "s"
            ],
            "word": "bus",
            "choices": [
                [
                    "bus",
                    "🚌"
                ],
                [
                    "duck",
                    "🦆"
                ],
                [
                    "fish",
                    "🐟"
                ]
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "audioKeys": [
                "b",
                "u",
                "s"
            ]
        },
        {
            "sounds": [
                "s",
                "o",
                "ck"
            ],
            "word": "sock",
            "choices": [
                [
                    "fish",
                    "🐟"
                ],
                [
                    "sock",
                    "🧦"
                ],
                [
                    "shop",
                    "🏪"
                ]
            ],
            "hint": "Keep ck together as you blend the sounds.",
            "audioKeys": [
                "s",
                "o",
                "k"
            ]
        },
        {
            "sounds": [
                "d",
                "u",
                "ck"
            ],
            "word": "duck",
            "choices": [
                [
                    "shop",
                    "🏪"
                ],
                [
                    "moon",
                    "🌙"
                ],
                [
                    "duck",
                    "🦆"
                ]
            ],
            "hint": "Keep ck together as you blend the sounds.",
            "audioKeys": [
                "d",
                "u",
                "k"
            ]
        },
        {
            "sounds": [
                "f",
                "i",
                "sh"
            ],
            "word": "fish",
            "choices": [
                [
                    "fish",
                    "🐟"
                ],
                [
                    "moon",
                    "🌙"
                ],
                [
                    "boat",
                    "⛵"
                ]
            ],
            "hint": "Keep sh together as you blend the sounds.",
            "audioKeys": [
                "f",
                "i",
                "sh"
            ]
        },
        {
            "sounds": [
                "sh",
                "o",
                "p"
            ],
            "word": "shop",
            "choices": [
                [
                    "boat",
                    "⛵"
                ],
                [
                    "shop",
                    "🏪"
                ],
                [
                    "book",
                    "📖"
                ]
            ],
            "hint": "Keep sh together as you blend the sounds.",
            "audioKeys": [
                "sh",
                "o",
                "p"
            ]
        },
        {
            "sounds": [
                "m",
                "oo",
                "n"
            ],
            "word": "moon",
            "choices": [
                [
                    "book",
                    "📖"
                ],
                [
                    "car",
                    "🚗"
                ],
                [
                    "moon",
                    "🌙"
                ]
            ],
            "hint": "Keep oo together as you blend the sounds.",
            "audioKeys": [
                "m",
                "oo-long",
                "n"
            ]
        },
        {
            "sounds": [
                "b",
                "oa",
                "t"
            ],
            "word": "boat",
            "choices": [
                [
                    "boat",
                    "⛵"
                ],
                [
                    "car",
                    "🚗"
                ],
                [
                    "star",
                    "⭐"
                ]
            ],
            "hint": "Keep oa together as you blend the sounds.",
            "audioKeys": [
                "b",
                "oa",
                "t"
            ]
        },
        {
            "sounds": [
                "b",
                "oo",
                "k"
            ],
            "word": "book",
            "choices": [
                [
                    "star",
                    "⭐"
                ],
                [
                    "book",
                    "📖"
                ],
                [
                    "tree",
                    "🌳"
                ]
            ],
            "hint": "Keep oo together as you blend the sounds.",
            "audioKeys": [
                "b",
                "oo-short",
                "k"
            ]
        },
        {
            "sounds": [
                "c",
                "ar"
            ],
            "word": "car",
            "choices": [
                [
                    "tree",
                    "🌳"
                ],
                [
                    "sheep",
                    "🐑"
                ],
                [
                    "car",
                    "🚗"
                ]
            ],
            "hint": "Keep ar together as you blend the sounds.",
            "audioKeys": [
                "k",
                "ah"
            ]
        },
        {
            "sounds": [
                "s",
                "t",
                "ar"
            ],
            "word": "star",
            "choices": [
                [
                    "star",
                    "⭐"
                ],
                [
                    "sheep",
                    "🐑"
                ],
                [
                    "bee",
                    "🐝"
                ]
            ],
            "hint": "Keep ar together as you blend the sounds.",
            "audioKeys": [
                "s",
                "t",
                "ah"
            ]
        },
        {
            "sounds": [
                "t",
                "r",
                "ee"
            ],
            "word": "tree",
            "choices": [
                [
                    "bee",
                    "🐝"
                ],
                [
                    "tree",
                    "🌳"
                ],
                [
                    "cow",
                    "🐄"
                ]
            ],
            "hint": "Keep ee together as you blend the sounds.",
            "audioKeys": [
                "t",
                "r",
                "ee"
            ]
        },
        {
            "sounds": [
                "sh",
                "ee",
                "p"
            ],
            "word": "sheep",
            "choices": [
                [
                    "cow",
                    "🐄"
                ],
                [
                    "goat",
                    "🐐"
                ],
                [
                    "sheep",
                    "🐑"
                ]
            ],
            "hint": "Keep sh together as you blend the sounds.",
            "audioKeys": [
                "sh",
                "ee",
                "p"
            ]
        },
        {
            "sounds": [
                "b",
                "ee"
            ],
            "word": "bee",
            "choices": [
                [
                    "bee",
                    "🐝"
                ],
                [
                    "goat",
                    "🐐"
                ],
                [
                    "frog",
                    "🐸"
                ]
            ],
            "hint": "Keep ee together as you blend the sounds.",
            "audioKeys": [
                "b",
                "ee"
            ]
        },
        {
            "sounds": [
                "c",
                "ow"
            ],
            "word": "cow",
            "choices": [
                [
                    "frog",
                    "🐸"
                ],
                [
                    "cow",
                    "🐄"
                ],
                [
                    "crab",
                    "🦀"
                ]
            ],
            "hint": "Keep ow together as you blend the sounds.",
            "audioKeys": [
                "k",
                "ou"
            ]
        },
        {
            "sounds": [
                "g",
                "oa",
                "t"
            ],
            "word": "goat",
            "choices": [
                [
                    "crab",
                    "🦀"
                ],
                [
                    "snail",
                    "🐌"
                ],
                [
                    "goat",
                    "🐐"
                ]
            ],
            "hint": "Keep oa together as you blend the sounds.",
            "audioKeys": [
                "g",
                "oa",
                "t"
            ]
        },
        {
            "sounds": [
                "f",
                "r",
                "o",
                "g"
            ],
            "word": "frog",
            "choices": [
                [
                    "frog",
                    "🐸"
                ],
                [
                    "snail",
                    "🐌"
                ],
                [
                    "ship",
                    "🚢"
                ]
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "audioKeys": [
                "f",
                "r",
                "o",
                "g"
            ]
        },
        {
            "sounds": [
                "c",
                "r",
                "a",
                "b"
            ],
            "word": "crab",
            "choices": [
                [
                    "ship",
                    "🚢"
                ],
                [
                    "crab",
                    "🦀"
                ],
                [
                    "cat",
                    "🐈"
                ]
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "audioKeys": [
                "k",
                "r",
                "a",
                "b"
            ]
        },
        {
            "sounds": [
                "s",
                "n",
                "ai",
                "l"
            ],
            "word": "snail",
            "choices": [
                [
                    "cat",
                    "🐈"
                ],
                [
                    "rain",
                    "🌧️"
                ],
                [
                    "snail",
                    "🐌"
                ]
            ],
            "hint": "Keep ai together as you blend the sounds.",
            "audioKeys": [
                "s",
                "n",
                "ai",
                "l"
            ]
        },
        {
            "sounds": [
                "a",
                "n",
                "t"
            ],
            "word": "ant",
            "audioKeys": [
                "a",
                "n",
                "t"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "ant",
                    "🐜"
                ],
                [
                    "queen",
                    "👸"
                ],
                [
                    "grass",
                    "🌱"
                ]
            ]
        },
        {
            "sounds": [
                "a",
                "pp",
                "le"
            ],
            "word": "apple",
            "audioKeys": [
                "a",
                "p",
                "ul"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "ship",
                    "🚢"
                ],
                [
                    "apple",
                    "🍎"
                ],
                [
                    "cat",
                    "🐈"
                ]
            ]
        },
        {
            "sounds": [
                "o",
                "x"
            ],
            "word": "ox",
            "audioKeys": [
                "o",
                "x"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "dog",
                    "🐕"
                ],
                [
                    "sun",
                    "☀️"
                ],
                [
                    "ox",
                    "🐂"
                ]
            ]
        },
        {
            "sounds": [
                "b",
                "a",
                "g"
            ],
            "word": "bag",
            "audioKeys": [
                "b",
                "a",
                "g"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "bag",
                    "🛍️"
                ],
                [
                    "pig",
                    "🐖"
                ],
                [
                    "cup",
                    "☕"
                ]
            ]
        },
        {
            "sounds": [
                "b",
                "a",
                "ll"
            ],
            "word": "ball",
            "audioKeys": [
                "b",
                "or",
                "l"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "net",
                    "🥅"
                ],
                [
                    "ball",
                    "⚽"
                ],
                [
                    "fox",
                    "🦊"
                ]
            ]
        },
        {
            "sounds": [
                "b",
                "a",
                "t"
            ],
            "word": "bat",
            "audioKeys": [
                "b",
                "a",
                "t"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "bus",
                    "🚌"
                ],
                [
                    "sock",
                    "🧦"
                ],
                [
                    "bat",
                    "🦇"
                ]
            ]
        },
        {
            "sounds": [
                "b",
                "e",
                "ll"
            ],
            "word": "bell",
            "audioKeys": [
                "b",
                "e",
                "l"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "bell",
                    "🔔"
                ],
                [
                    "fish",
                    "🐟"
                ],
                [
                    "shop",
                    "🏪"
                ]
            ]
        },
        {
            "sounds": [
                "b",
                "ir",
                "d"
            ],
            "word": "bird",
            "audioKeys": [
                "b",
                "ur",
                "d"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "boat",
                    "⛵"
                ],
                [
                    "bird",
                    "🐦"
                ],
                [
                    "book",
                    "📖"
                ]
            ]
        },
        {
            "sounds": [
                "b",
                "ear"
            ],
            "word": "bear",
            "audioKeys": [
                "b",
                "air"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "star",
                    "⭐"
                ],
                [
                    "tree",
                    "🌳"
                ],
                [
                    "bear",
                    "🐻"
                ]
            ]
        },
        {
            "sounds": [
                "b",
                "oo",
                "t"
            ],
            "word": "boot",
            "audioKeys": [
                "b",
                "oo-long",
                "t"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "boot",
                    "🥾"
                ],
                [
                    "bee",
                    "🐝"
                ],
                [
                    "cow",
                    "🐄"
                ]
            ]
        },
        {
            "sounds": [
                "b",
                "ow",
                "l"
            ],
            "word": "bowl",
            "audioKeys": [
                "b",
                "oa",
                "l"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "frog",
                    "🐸"
                ],
                [
                    "bowl",
                    "🥣"
                ],
                [
                    "crab",
                    "🦀"
                ]
            ]
        },
        {
            "sounds": [
                "b",
                "r",
                "ea",
                "d"
            ],
            "word": "bread",
            "audioKeys": [
                "b",
                "r",
                "e",
                "d"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "ant",
                    "🐜"
                ],
                [
                    "apple",
                    "🍎"
                ],
                [
                    "bread",
                    "🍞"
                ]
            ]
        },
        {
            "sounds": [
                "b",
                "r",
                "u",
                "sh"
            ],
            "word": "brush",
            "audioKeys": [
                "b",
                "r",
                "u",
                "sh"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "brush",
                    "🖌️"
                ],
                [
                    "bag",
                    "🛍️"
                ],
                [
                    "ball",
                    "⚽"
                ]
            ]
        },
        {
            "sounds": [
                "ch",
                "i",
                "ck"
            ],
            "word": "chick",
            "audioKeys": [
                "ch",
                "i",
                "k"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "bell",
                    "🔔"
                ],
                [
                    "chick",
                    "🐥"
                ],
                [
                    "sock",
                    "🧦"
                ]
            ]
        },
        {
            "sounds": [
                "c",
                "l",
                "ou",
                "d"
            ],
            "word": "cloud",
            "audioKeys": [
                "k",
                "l",
                "ou",
                "d"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "boot",
                    "🥾"
                ],
                [
                    "bowl",
                    "🥣"
                ],
                [
                    "cloud",
                    "☁️"
                ]
            ]
        },
        {
            "sounds": [
                "c",
                "oa",
                "t"
            ],
            "word": "coat",
            "audioKeys": [
                "k",
                "oa",
                "t"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "coat",
                    "🧥"
                ],
                [
                    "brush",
                    "🖌️"
                ],
                [
                    "chick",
                    "🐥"
                ]
            ]
        },
        {
            "sounds": [
                "c",
                "oi",
                "n"
            ],
            "word": "coin",
            "audioKeys": [
                "k",
                "oi",
                "n"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "coat",
                    "🧥"
                ],
                [
                    "coin",
                    "🪙"
                ],
                [
                    "corn",
                    "🌽"
                ]
            ]
        },
        {
            "sounds": [
                "c",
                "or",
                "n"
            ],
            "word": "corn",
            "audioKeys": [
                "k",
                "or",
                "n"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "crown",
                    "👑"
                ],
                [
                    "deer",
                    "🦌"
                ],
                [
                    "corn",
                    "🌽"
                ]
            ]
        },
        {
            "sounds": [
                "c",
                "r",
                "ow",
                "n"
            ],
            "word": "crown",
            "audioKeys": [
                "k",
                "r",
                "ou",
                "n"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "crown",
                    "👑"
                ],
                [
                    "doll",
                    "🪆"
                ],
                [
                    "door",
                    "🚪"
                ]
            ]
        },
        {
            "sounds": [
                "d",
                "eer"
            ],
            "word": "deer",
            "audioKeys": [
                "d",
                "ear"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "egg",
                    "🥚"
                ],
                [
                    "deer",
                    "🦌"
                ],
                [
                    "flag",
                    "🚩"
                ]
            ]
        },
        {
            "sounds": [
                "d",
                "i",
                "sh"
            ],
            "word": "dish",
            "audioKeys": [
                "d",
                "i",
                "sh"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "fork",
                    "🍴"
                ],
                [
                    "ghost",
                    "👻"
                ],
                [
                    "dish",
                    "🍽️"
                ]
            ]
        },
        {
            "sounds": [
                "d",
                "o",
                "ll"
            ],
            "word": "doll",
            "audioKeys": [
                "d",
                "o",
                "l"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "doll",
                    "🪆"
                ],
                [
                    "hair",
                    "💇"
                ],
                [
                    "hand",
                    "✋"
                ]
            ]
        },
        {
            "sounds": [
                "d",
                "oor"
            ],
            "word": "door",
            "audioKeys": [
                "d",
                "or"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "horse",
                    "🐎"
                ],
                [
                    "door",
                    "🚪"
                ],
                [
                    "house",
                    "🏠"
                ]
            ]
        },
        {
            "sounds": [
                "d",
                "r",
                "u",
                "m"
            ],
            "word": "drum",
            "audioKeys": [
                "d",
                "r",
                "u",
                "m"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "jar",
                    "🫙"
                ],
                [
                    "jet",
                    "✈️"
                ],
                [
                    "drum",
                    "🥁"
                ]
            ]
        },
        {
            "sounds": [
                "e",
                "gg"
            ],
            "word": "egg",
            "audioKeys": [
                "e",
                "g"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "egg",
                    "🥚"
                ],
                [
                    "leaf",
                    "🍃"
                ],
                [
                    "leg",
                    "🦵"
                ]
            ]
        },
        {
            "sounds": [
                "f",
                "l",
                "a",
                "g"
            ],
            "word": "flag",
            "audioKeys": [
                "f",
                "l",
                "a",
                "g"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "lion",
                    "🦁"
                ],
                [
                    "flag",
                    "🚩"
                ],
                [
                    "lock",
                    "🔒"
                ]
            ]
        },
        {
            "sounds": [
                "f",
                "l",
                "ow",
                "er"
            ],
            "word": "flower",
            "audioKeys": [
                "f",
                "l",
                "ou",
                "schwa"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "mouse",
                    "🐁"
                ],
                [
                    "nest",
                    "🪺"
                ],
                [
                    "flower",
                    "🌸"
                ]
            ]
        },
        {
            "sounds": [
                "f",
                "or",
                "k"
            ],
            "word": "fork",
            "audioKeys": [
                "f",
                "or",
                "k"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "fork",
                    "🍴"
                ],
                [
                    "pear",
                    "🍐"
                ],
                [
                    "pen",
                    "🖊️"
                ]
            ]
        },
        {
            "sounds": [
                "gh",
                "o",
                "s",
                "t"
            ],
            "word": "ghost",
            "audioKeys": [
                "g",
                "oa",
                "s",
                "t"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "peach",
                    "🍑"
                ],
                [
                    "ghost",
                    "👻"
                ],
                [
                    "pot",
                    "🍲"
                ]
            ]
        },
        {
            "sounds": [
                "s",
                "k",
                "u",
                "ll"
            ],
            "word": "skull",
            "audioKeys": [
                "s",
                "k",
                "u",
                "l"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "robot",
                    "🤖"
                ],
                [
                    "shoe",
                    "👟"
                ],
                [
                    "skull",
                    "💀"
                ]
            ]
        },
        {
            "sounds": [
                "h",
                "air"
            ],
            "word": "hair",
            "audioKeys": [
                "h",
                "air"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "hair",
                    "💇"
                ],
                [
                    "tent",
                    "⛺"
                ],
                [
                    "train",
                    "🚂"
                ]
            ]
        },
        {
            "sounds": [
                "h",
                "a",
                "n",
                "d"
            ],
            "word": "hand",
            "audioKeys": [
                "h",
                "a",
                "n",
                "d"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "hat",
                    "🎩"
                ],
                [
                    "hand",
                    "✋"
                ],
                [
                    "web",
                    "🕸️"
                ]
            ]
        },
        {
            "sounds": [
                "h",
                "ear",
                "t"
            ],
            "word": "heart",
            "audioKeys": [
                "h",
                "ah",
                "t"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "vest",
                    "🦺"
                ],
                [
                    "wheel",
                    "🛞"
                ],
                [
                    "heart",
                    "❤️"
                ]
            ]
        },
        {
            "sounds": [
                "h",
                "or",
                "se"
            ],
            "word": "horse",
            "audioKeys": [
                "h",
                "or",
                "s"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "horse",
                    "🐎"
                ],
                [
                    "king",
                    "🤴"
                ],
                [
                    "queen",
                    "👸"
                ]
            ]
        },
        {
            "sounds": [
                "h",
                "ou",
                "se"
            ],
            "word": "house",
            "audioKeys": [
                "h",
                "ou",
                "s"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "dress",
                    "👗"
                ],
                [
                    "house",
                    "🏠"
                ],
                [
                    "ship",
                    "🚢"
                ]
            ]
        },
        {
            "sounds": [
                "j",
                "a",
                "m"
            ],
            "word": "jam",
            "audioKeys": [
                "j",
                "a",
                "m"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "rain",
                    "🌧️"
                ],
                [
                    "dog",
                    "🐕"
                ],
                [
                    "jam",
                    "🍓🫙"
                ]
            ]
        },
        {
            "sounds": [
                "j",
                "ar"
            ],
            "word": "jar",
            "audioKeys": [
                "j",
                "ah"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "jar",
                    "🫙"
                ],
                [
                    "bed",
                    "🛏️"
                ],
                [
                    "pig",
                    "🐖"
                ]
            ]
        },
        {
            "sounds": [
                "j",
                "e",
                "t"
            ],
            "word": "jet",
            "audioKeys": [
                "j",
                "e",
                "t"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "hen",
                    "🐔"
                ],
                [
                    "jet",
                    "✈️"
                ],
                [
                    "net",
                    "🥅"
                ]
            ]
        },
        {
            "sounds": [
                "k",
                "ey"
            ],
            "word": "key",
            "audioKeys": [
                "k",
                "ee"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "box",
                    "📦"
                ],
                [
                    "bus",
                    "🚌"
                ],
                [
                    "key",
                    "🔑"
                ]
            ]
        },
        {
            "sounds": [
                "l",
                "ea",
                "f"
            ],
            "word": "leaf",
            "audioKeys": [
                "l",
                "ee",
                "f"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "leaf",
                    "🍃"
                ],
                [
                    "duck",
                    "🦆"
                ],
                [
                    "fish",
                    "🐟"
                ]
            ]
        },
        {
            "sounds": [
                "l",
                "e",
                "g"
            ],
            "word": "leg",
            "audioKeys": [
                "l",
                "e",
                "g"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "moon",
                    "🌙"
                ],
                [
                    "leg",
                    "🦵"
                ],
                [
                    "boat",
                    "⛵"
                ]
            ]
        },
        {
            "sounds": [
                "l",
                "igh",
                "t"
            ],
            "word": "light",
            "audioKeys": [
                "l",
                "igh",
                "t"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "car",
                    "🚗"
                ],
                [
                    "star",
                    "⭐"
                ],
                [
                    "light",
                    "💡"
                ]
            ]
        },
        {
            "sounds": [
                "l",
                "i",
                "o",
                "n"
            ],
            "word": "lion",
            "audioKeys": [
                "l",
                "igh",
                "schwa",
                "n"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "lion",
                    "🦁"
                ],
                [
                    "sheep",
                    "🐑"
                ],
                [
                    "bee",
                    "🐝"
                ]
            ]
        },
        {
            "sounds": [
                "l",
                "o",
                "ck"
            ],
            "word": "lock",
            "audioKeys": [
                "l",
                "o",
                "k"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "goat",
                    "🐐"
                ],
                [
                    "lock",
                    "🔒"
                ],
                [
                    "frog",
                    "🐸"
                ]
            ]
        },
        {
            "sounds": [
                "l",
                "o",
                "g"
            ],
            "word": "log",
            "audioKeys": [
                "l",
                "o",
                "g"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "snail",
                    "🐌"
                ],
                [
                    "ant",
                    "🐜"
                ],
                [
                    "log",
                    "🪵"
                ]
            ]
        },
        {
            "sounds": [
                "m",
                "ou",
                "se"
            ],
            "word": "mouse",
            "audioKeys": [
                "m",
                "ou",
                "s"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "mouse",
                    "🐁"
                ],
                [
                    "ox",
                    "🐂"
                ],
                [
                    "bag",
                    "🛍️"
                ]
            ]
        },
        {
            "sounds": [
                "n",
                "e",
                "s",
                "t"
            ],
            "word": "nest",
            "audioKeys": [
                "n",
                "e",
                "s",
                "t"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "bat",
                    "🦇"
                ],
                [
                    "nest",
                    "🪺"
                ],
                [
                    "bell",
                    "🔔"
                ]
            ]
        },
        {
            "sounds": [
                "ow",
                "l"
            ],
            "word": "owl",
            "audioKeys": [
                "ou",
                "l"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "bear",
                    "🐻"
                ],
                [
                    "boot",
                    "🥾"
                ],
                [
                    "owl",
                    "🦉"
                ]
            ]
        },
        {
            "sounds": [
                "p",
                "ear"
            ],
            "word": "pear",
            "audioKeys": [
                "p",
                "air"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "pear",
                    "🍐"
                ],
                [
                    "bread",
                    "🍞"
                ],
                [
                    "brush",
                    "🖌️"
                ]
            ]
        },
        {
            "sounds": [
                "p",
                "e",
                "n"
            ],
            "word": "pen",
            "audioKeys": [
                "p",
                "e",
                "n"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "cloud",
                    "☁️"
                ],
                [
                    "pen",
                    "🖊️"
                ],
                [
                    "coat",
                    "🧥"
                ]
            ]
        },
        {
            "sounds": [
                "p",
                "ie"
            ],
            "word": "pie",
            "audioKeys": [
                "p",
                "igh"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "corn",
                    "🌽"
                ],
                [
                    "crown",
                    "👑"
                ],
                [
                    "pie",
                    "🥧"
                ]
            ]
        },
        {
            "sounds": [
                "p",
                "ea",
                "ch"
            ],
            "word": "peach",
            "audioKeys": [
                "p",
                "ee",
                "ch"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "peach",
                    "🍑"
                ],
                [
                    "dish",
                    "🍽️"
                ],
                [
                    "doll",
                    "🪆"
                ]
            ]
        },
        {
            "sounds": [
                "p",
                "o",
                "t"
            ],
            "word": "pot",
            "audioKeys": [
                "p",
                "o",
                "t"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "drum",
                    "🥁"
                ],
                [
                    "pot",
                    "🍲"
                ],
                [
                    "egg",
                    "🥚"
                ]
            ]
        },
        {
            "sounds": [
                "r",
                "i",
                "ng"
            ],
            "word": "ring",
            "audioKeys": [
                "r",
                "i",
                "ng"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "flower",
                    "🌸"
                ],
                [
                    "fork",
                    "🍴"
                ],
                [
                    "ring",
                    "💍"
                ]
            ]
        },
        {
            "sounds": [
                "r",
                "o",
                "b",
                "o",
                "t"
            ],
            "word": "robot",
            "audioKeys": [
                "r",
                "oa",
                "b",
                "o",
                "t"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "robot",
                    "🤖"
                ],
                [
                    "skull",
                    "💀"
                ],
                [
                    "hair",
                    "💇"
                ]
            ]
        },
        {
            "sounds": [
                "sh",
                "oe"
            ],
            "word": "shoe",
            "audioKeys": [
                "sh",
                "oo-long"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "heart",
                    "❤️"
                ],
                [
                    "shoe",
                    "👟"
                ],
                [
                    "horse",
                    "🐎"
                ]
            ]
        },
        {
            "sounds": [
                "s",
                "p",
                "oo",
                "n"
            ],
            "word": "spoon",
            "audioKeys": [
                "s",
                "p",
                "oo-long",
                "n"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "jam",
                    "🍓🫙"
                ],
                [
                    "jar",
                    "🫙"
                ],
                [
                    "spoon",
                    "🥄"
                ]
            ]
        },
        {
            "sounds": [
                "t",
                "e",
                "n",
                "t"
            ],
            "word": "tent",
            "audioKeys": [
                "t",
                "e",
                "n",
                "t"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "tent",
                    "⛺"
                ],
                [
                    "key",
                    "🔑"
                ],
                [
                    "leaf",
                    "🍃"
                ]
            ]
        },
        {
            "sounds": [
                "t",
                "r",
                "ai",
                "n"
            ],
            "word": "train",
            "audioKeys": [
                "t",
                "r",
                "ai",
                "n"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "light",
                    "💡"
                ],
                [
                    "train",
                    "🚂"
                ],
                [
                    "lion",
                    "🦁"
                ]
            ]
        },
        {
            "sounds": [
                "sh",
                "e",
                "ll"
            ],
            "word": "shell",
            "audioKeys": [
                "sh",
                "e",
                "l"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "log",
                    "🪵"
                ],
                [
                    "mouse",
                    "🐁"
                ],
                [
                    "shell",
                    "🐚"
                ]
            ]
        },
        {
            "sounds": [
                "h",
                "a",
                "t"
            ],
            "word": "hat",
            "audioKeys": [
                "h",
                "a",
                "t"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "hat",
                    "🎩"
                ],
                [
                    "owl",
                    "🦉"
                ],
                [
                    "pear",
                    "🍐"
                ]
            ]
        },
        {
            "sounds": [
                "w",
                "e",
                "b"
            ],
            "word": "web",
            "audioKeys": [
                "w",
                "e",
                "b"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "pie",
                    "🥧"
                ],
                [
                    "web",
                    "🕸️"
                ],
                [
                    "peach",
                    "🍑"
                ]
            ]
        },
        {
            "sounds": [
                "z",
                "i",
                "p"
            ],
            "word": "zip",
            "audioKeys": [
                "z",
                "i",
                "p"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "ring",
                    "💍"
                ],
                [
                    "robot",
                    "🤖"
                ],
                [
                    "zip",
                    "🤐"
                ]
            ]
        },
        {
            "sounds": [
                "v",
                "e",
                "s",
                "t"
            ],
            "word": "vest",
            "audioKeys": [
                "v",
                "e",
                "s",
                "t"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "vest",
                    "🦺"
                ],
                [
                    "spoon",
                    "🥄"
                ],
                [
                    "tent",
                    "⛺"
                ]
            ]
        },
        {
            "sounds": [
                "wh",
                "ee",
                "l"
            ],
            "word": "wheel",
            "audioKeys": [
                "w",
                "ee",
                "l"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "shell",
                    "🐚"
                ],
                [
                    "wheel",
                    "🛞"
                ],
                [
                    "hat",
                    "🎩"
                ]
            ]
        },
        {
            "sounds": [
                "w",
                "i",
                "ng"
            ],
            "word": "wing",
            "audioKeys": [
                "w",
                "i",
                "ng"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "zip",
                    "🤐"
                ],
                [
                    "vest",
                    "🦺"
                ],
                [
                    "wing",
                    "🪽"
                ]
            ]
        },
        {
            "sounds": [
                "k",
                "i",
                "ng"
            ],
            "word": "king",
            "audioKeys": [
                "k",
                "i",
                "ng"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "king",
                    "🤴"
                ],
                [
                    "wing",
                    "🪽"
                ],
                [
                    "queen",
                    "👸"
                ]
            ]
        },
        {
            "sounds": [
                "qu",
                "ee",
                "n"
            ],
            "word": "queen",
            "audioKeys": [
                "kw",
                "ee",
                "n"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "grass",
                    "🌱"
                ],
                [
                    "queen",
                    "👸"
                ],
                [
                    "dress",
                    "👗"
                ]
            ]
        },
        {
            "sounds": [
                "g",
                "r",
                "a",
                "ss"
            ],
            "word": "grass",
            "audioKeys": [
                "g",
                "r",
                "ah",
                "s"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "cat",
                    "🐈"
                ],
                [
                    "rain",
                    "🌧️"
                ],
                [
                    "grass",
                    "🌱"
                ]
            ]
        },
        {
            "sounds": [
                "d",
                "r",
                "e",
                "ss"
            ],
            "word": "dress",
            "audioKeys": [
                "d",
                "r",
                "e",
                "s"
            ],
            "hint": "Say each sound slowly, then blend them together.",
            "choices": [
                [
                    "dress",
                    "👗"
                ],
                [
                    "sun",
                    "☀️"
                ],
                [
                    "bed",
                    "🛏️"
                ]
            ]
        }
    ],
    "ks2": [
        {
            "sounds": [
                "s",
                "u",
                "n",
                "s",
                "e",
                "t"
            ],
            "word": "sunset",
            "choices": [
                [
                    "volcano",
                    "🌋"
                ],
                [
                    "sunset",
                    "🌇"
                ],
                [
                    "rain",
                    "🌧️"
                ]
            ],
            "hint": "Blend the first three sounds, then the last three.",
            "audioKeys": [
                "s",
                "u",
                "n",
                "s",
                "e",
                "t"
            ]
        },
        {
            "sounds": [
                "f",
                "oo",
                "t",
                "b",
                "a",
                "ll"
            ],
            "word": "football",
            "choices": [
                [
                    "basketball",
                    "🏀"
                ],
                [
                    "tennis",
                    "🎾"
                ],
                [
                    "football",
                    "⚽"
                ]
            ],
            "hint": "Look for two smaller words inside the word.",
            "audioKeys": [
                "f",
                "oo-short",
                "t",
                "b",
                "a",
                "l"
            ]
        },
        {
            "sounds": [
                "t",
                "oo",
                "th",
                "b",
                "r",
                "u",
                "sh"
            ],
            "word": "toothbrush",
            "choices": [
                [
                    "toothbrush",
                    "🪥"
                ],
                [
                    "soap",
                    "🧼"
                ],
                [
                    "tooth",
                    "🦷"
                ]
            ],
            "hint": "Keep oo, th and sh together as you blend.",
            "audioKeys": [
                "t",
                "oo-long",
                "th",
                "b",
                "r",
                "u",
                "sh"
            ]
        },
        {
            "sounds": [
                "r",
                "ai",
                "n",
                "b",
                "ow"
            ],
            "word": "rainbow",
            "choices": [
                [
                    "rainbow",
                    "🌈"
                ],
                [
                    "sunflower",
                    "🌻"
                ],
                [
                    "thunderstorm",
                    "⛈️"
                ]
            ],
            "hint": "Keep ai together as you blend the sounds.",
            "audioKeys": [
                "r",
                "ai",
                "n",
                "b",
                "oa"
            ]
        },
        {
            "sounds": [
                "s",
                "n",
                "ow",
                "m",
                "a",
                "n"
            ],
            "word": "snowman",
            "choices": [
                [
                    "thunderstorm",
                    "⛈️"
                ],
                [
                    "snowman",
                    "☃️"
                ],
                [
                    "dustbin",
                    "🗑️"
                ]
            ],
            "hint": "Keep ow together as you blend the sounds.",
            "audioKeys": [
                "s",
                "n",
                "oa",
                "m",
                "a",
                "n"
            ]
        },
        {
            "sounds": [
                "s",
                "u",
                "n",
                "f",
                "l",
                "ow",
                "er"
            ],
            "word": "sunflower",
            "choices": [
                [
                    "dustbin",
                    "🗑️"
                ],
                [
                    "sailboat",
                    "⛵"
                ],
                [
                    "sunflower",
                    "🌻"
                ]
            ],
            "hint": "Keep ow together as you blend the sounds.",
            "audioKeys": [
                "s",
                "u",
                "n",
                "f",
                "l",
                "ou",
                "schwa"
            ]
        },
        {
            "sounds": [
                "th",
                "u",
                "n",
                "d",
                "er",
                "s",
                "t",
                "or",
                "m"
            ],
            "word": "thunderstorm",
            "choices": [
                [
                    "thunderstorm",
                    "⛈️"
                ],
                [
                    "sailboat",
                    "⛵"
                ],
                [
                    "letterbox",
                    "📬"
                ]
            ],
            "hint": "Keep th together as you blend the sounds.",
            "audioKeys": [
                "th",
                "u",
                "n",
                "d",
                "schwa",
                "s",
                "t",
                "or",
                "m"
            ]
        },
        {
            "sounds": [
                "d",
                "u",
                "s",
                "t",
                "b",
                "i",
                "n"
            ],
            "word": "dustbin",
            "choices": [
                [
                    "letterbox",
                    "📬"
                ],
                [
                    "dustbin",
                    "🗑️"
                ],
                [
                    "backpack",
                    "🎒"
                ]
            ],
            "hint": "Blend a few sounds at a time, then join the parts together.",
            "audioKeys": [
                "d",
                "u",
                "s",
                "t",
                "b",
                "i",
                "n"
            ]
        },
        {
            "sounds": [
                "s",
                "ai",
                "l",
                "b",
                "oa",
                "t"
            ],
            "word": "sailboat",
            "choices": [
                [
                    "backpack",
                    "🎒"
                ],
                [
                    "handbag",
                    "👜"
                ],
                [
                    "sailboat",
                    "⛵"
                ]
            ],
            "hint": "Keep ai together as you blend the sounds.",
            "audioKeys": [
                "s",
                "ai",
                "l",
                "b",
                "oa",
                "t"
            ]
        },
        {
            "sounds": [
                "l",
                "e",
                "tt",
                "er",
                "b",
                "o",
                "x"
            ],
            "word": "letterbox",
            "choices": [
                [
                    "letterbox",
                    "📬"
                ],
                [
                    "handbag",
                    "👜"
                ],
                [
                    "laptop",
                    "💻"
                ]
            ],
            "hint": "Blend the first part, then the second part, and join them together.",
            "audioKeys": [
                "l",
                "e",
                "t",
                "schwa",
                "b",
                "o",
                "x"
            ]
        },
        {
            "sounds": [
                "b",
                "a",
                "ck",
                "p",
                "a",
                "ck"
            ],
            "word": "backpack",
            "choices": [
                [
                    "laptop",
                    "💻"
                ],
                [
                    "backpack",
                    "🎒"
                ],
                [
                    "popcorn",
                    "🍿"
                ]
            ],
            "hint": "Keep ck together as you blend the sounds.",
            "audioKeys": [
                "b",
                "a",
                "k",
                "p",
                "a",
                "k"
            ]
        },
        {
            "sounds": [
                "h",
                "a",
                "n",
                "d",
                "b",
                "a",
                "g"
            ],
            "word": "handbag",
            "choices": [
                [
                    "popcorn",
                    "🍿"
                ],
                [
                    "sandwich",
                    "🥪"
                ],
                [
                    "handbag",
                    "👜"
                ]
            ],
            "hint": "Blend a few sounds at a time, then join the parts together.",
            "audioKeys": [
                "h",
                "a",
                "n",
                "d",
                "b",
                "a",
                "g"
            ]
        },
        {
            "sounds": [
                "l",
                "a",
                "p",
                "t",
                "o",
                "p"
            ],
            "word": "laptop",
            "choices": [
                [
                    "laptop",
                    "💻"
                ],
                [
                    "sandwich",
                    "🥪"
                ],
                [
                    "chestnut",
                    "🌰"
                ]
            ],
            "hint": "Blend a few sounds at a time, then join the parts together.",
            "audioKeys": [
                "l",
                "a",
                "p",
                "t",
                "o",
                "p"
            ]
        },
        {
            "sounds": [
                "p",
                "o",
                "p",
                "c",
                "or",
                "n"
            ],
            "word": "popcorn",
            "choices": [
                [
                    "chestnut",
                    "🌰"
                ],
                [
                    "popcorn",
                    "🍿"
                ],
                [
                    "teapot",
                    "🫖"
                ]
            ],
            "hint": "Keep or together as you blend the sounds.",
            "audioKeys": [
                "p",
                "o",
                "p",
                "k",
                "or",
                "n"
            ]
        },
        {
            "sounds": [
                "s",
                "a",
                "n",
                "d",
                "w",
                "i",
                "ch"
            ],
            "word": "sandwich",
            "choices": [
                [
                    "teapot",
                    "🫖"
                ],
                [
                    "teaspoon",
                    "🥄"
                ],
                [
                    "sandwich",
                    "🥪"
                ]
            ],
            "hint": "Keep ch together as you blend the sounds.",
            "audioKeys": [
                "s",
                "a",
                "n",
                "d",
                "w",
                "i",
                "ch"
            ]
        },
        {
            "sounds": [
                "ch",
                "e",
                "s",
                "t",
                "n",
                "u",
                "t"
            ],
            "word": "chestnut",
            "choices": [
                [
                    "chestnut",
                    "🌰"
                ],
                [
                    "teaspoon",
                    "🥄"
                ],
                [
                    "paintbrush",
                    "🖌️"
                ]
            ],
            "hint": "Keep ch together as you blend the sounds.",
            "audioKeys": [
                "ch",
                "e",
                "s",
                "t",
                "n",
                "u",
                "t"
            ]
        },
        {
            "sounds": [
                "t",
                "ea",
                "p",
                "o",
                "t"
            ],
            "word": "teapot",
            "choices": [
                [
                    "paintbrush",
                    "🖌️"
                ],
                [
                    "teapot",
                    "🫖"
                ],
                [
                    "bedroom",
                    "🛏️"
                ]
            ],
            "hint": "Keep ea together as you blend the sounds.",
            "audioKeys": [
                "t",
                "ee",
                "p",
                "o",
                "t"
            ]
        },
        {
            "sounds": [
                "t",
                "ea",
                "s",
                "p",
                "oo",
                "n"
            ],
            "word": "teaspoon",
            "choices": [
                [
                    "bedroom",
                    "🛏️"
                ],
                [
                    "bathroom",
                    "🛁"
                ],
                [
                    "teaspoon",
                    "🥄"
                ]
            ],
            "hint": "Keep ea together as you blend the sounds.",
            "audioKeys": [
                "t",
                "ee",
                "s",
                "p",
                "oo-long",
                "n"
            ]
        },
        {
            "sounds": [
                "p",
                "ai",
                "n",
                "t",
                "b",
                "r",
                "u",
                "sh"
            ],
            "word": "paintbrush",
            "choices": [
                [
                    "paintbrush",
                    "🖌️"
                ],
                [
                    "bathroom",
                    "🛁"
                ],
                [
                    "playground",
                    "🛝"
                ]
            ],
            "hint": "Keep ai together as you blend the sounds.",
            "audioKeys": [
                "p",
                "ai",
                "n",
                "t",
                "b",
                "r",
                "u",
                "sh"
            ]
        },
        {
            "sounds": [
                "b",
                "e",
                "d",
                "r",
                "oo",
                "m"
            ],
            "word": "bedroom",
            "choices": [
                [
                    "playground",
                    "🛝"
                ],
                [
                    "bedroom",
                    "🛏️"
                ],
                [
                    "armchair",
                    "🪑"
                ]
            ],
            "hint": "Keep oo together as you blend the sounds.",
            "audioKeys": [
                "b",
                "e",
                "d",
                "r",
                "oo-long",
                "m"
            ]
        },
        {
            "sounds": [
                "b",
                "a",
                "th",
                "r",
                "oo",
                "m"
            ],
            "word": "bathroom",
            "choices": [
                [
                    "armchair",
                    "🪑"
                ],
                [
                    "butterfly",
                    "🦋"
                ],
                [
                    "bathroom",
                    "🛁"
                ]
            ],
            "hint": "Keep th together as you blend the sounds.",
            "audioKeys": [
                "b",
                "ah",
                "th",
                "r",
                "oo-long",
                "m"
            ]
        },
        {
            "sounds": [
                "p",
                "l",
                "ay",
                "g",
                "r",
                "ou",
                "n",
                "d"
            ],
            "word": "playground",
            "choices": [
                [
                    "playground",
                    "🛝"
                ],
                [
                    "butterfly",
                    "🦋"
                ],
                [
                    "dolphin",
                    "🐬"
                ]
            ],
            "hint": "Keep ay together as you blend the sounds.",
            "audioKeys": [
                "p",
                "l",
                "ai",
                "g",
                "r",
                "ou",
                "n",
                "d"
            ]
        },
        {
            "sounds": [
                "ar",
                "m",
                "ch",
                "air"
            ],
            "word": "armchair",
            "choices": [
                [
                    "dolphin",
                    "🐬"
                ],
                [
                    "armchair",
                    "🪑"
                ],
                [
                    "stopwatch",
                    "⏱️"
                ]
            ],
            "hint": "Keep ar together as you blend the sounds.",
            "audioKeys": [
                "ah",
                "m",
                "ch",
                "air"
            ]
        },
        {
            "sounds": [
                "b",
                "u",
                "tt",
                "er",
                "f",
                "l",
                "y"
            ],
            "word": "butterfly",
            "choices": [
                [
                    "stopwatch",
                    "⏱️"
                ],
                [
                    "firework",
                    "🎆"
                ],
                [
                    "butterfly",
                    "🦋"
                ]
            ],
            "hint": "Keep the letters that work together as one sound together when you blend.",
            "audioKeys": [
                "b",
                "u",
                "t",
                "schwa",
                "f",
                "l",
                "igh"
            ]
        },
        {
            "sounds": [
                "d",
                "o",
                "l",
                "ph",
                "i",
                "n"
            ],
            "word": "dolphin",
            "choices": [
                [
                    "dolphin",
                    "🐬"
                ],
                [
                    "firework",
                    "🎆"
                ],
                [
                    "jellyfish",
                    "🪼"
                ]
            ],
            "hint": "Keep the letters that work together as one sound together when you blend.",
            "audioKeys": [
                "d",
                "o",
                "l",
                "f",
                "i",
                "n"
            ]
        },
        {
            "sounds": [
                "s",
                "t",
                "o",
                "p",
                "w",
                "a",
                "t",
                "ch"
            ],
            "word": "stopwatch",
            "choices": [
                [
                    "jellyfish",
                    "🪼"
                ],
                [
                    "stopwatch",
                    "⏱️"
                ],
                [
                    "elephant",
                    "🐘"
                ]
            ],
            "hint": "Keep ch together as you blend the sounds.",
            "audioKeys": [
                "s",
                "t",
                "o",
                "p",
                "w",
                "o",
                "t",
                "ch"
            ]
        },
        {
            "sounds": [
                "f",
                "ire",
                "w",
                "or",
                "k"
            ],
            "word": "firework",
            "choices": [
                [
                    "elephant",
                    "🐘"
                ],
                [
                    "footprint",
                    "👣"
                ],
                [
                    "firework",
                    "🎆"
                ]
            ],
            "hint": "Keep ire together as you blend the sounds.",
            "audioKeys": [
                "f",
                "ire",
                "w",
                "or",
                "k"
            ]
        },
        {
            "sounds": [
                "j",
                "e",
                "ll",
                "y",
                "f",
                "i",
                "sh"
            ],
            "word": "jellyfish",
            "choices": [
                [
                    "jellyfish",
                    "🪼"
                ],
                [
                    "footprint",
                    "👣"
                ],
                [
                    "sunset",
                    "🌇"
                ]
            ],
            "hint": "Keep ll together as you blend the sounds.",
            "audioKeys": [
                "j",
                "e",
                "l",
                "ee",
                "f",
                "i",
                "sh"
            ]
        },
        {
            "sounds": [
                "e",
                "l",
                "e",
                "ph",
                "a",
                "n",
                "t"
            ],
            "word": "elephant",
            "choices": [
                [
                    "sunset",
                    "🌇"
                ],
                [
                    "elephant",
                    "🐘"
                ],
                [
                    "football",
                    "⚽"
                ]
            ],
            "hint": "Keep the letters that work together as one sound together when you blend.",
            "audioKeys": [
                "e",
                "l",
                "e",
                "f",
                "schwa",
                "n",
                "t"
            ]
        },
        {
            "sounds": [
                "f",
                "oo",
                "t",
                "p",
                "r",
                "i",
                "n",
                "t"
            ],
            "word": "footprint",
            "choices": [
                [
                    "football",
                    "⚽"
                ],
                [
                    "toothbrush",
                    "🪥"
                ],
                [
                    "footprint",
                    "👣"
                ]
            ],
            "hint": "Keep oo together as you blend the sounds.",
            "audioKeys": [
                "f",
                "oo-short",
                "t",
                "p",
                "r",
                "i",
                "n",
                "t"
            ]
        },
        {
            "sounds": [
                "h",
                "e",
                "dge",
                "h",
                "o",
                "g"
            ],
            "word": "hedgehog",
            "audioKeys": [
                "h",
                "e",
                "j",
                "h",
                "o",
                "g"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "hedgehog",
                    "🦔"
                ],
                [
                    "basketball",
                    "🏀"
                ],
                [
                    "tennis",
                    "🎾"
                ]
            ]
        },
        {
            "sounds": [
                "a",
                "ll",
                "i",
                "g",
                "a",
                "t",
                "or"
            ],
            "word": "alligator",
            "audioKeys": [
                "a",
                "l",
                "i",
                "g",
                "ai",
                "t",
                "schwa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "sunset",
                    "🌇"
                ],
                [
                    "alligator",
                    "🐊"
                ],
                [
                    "football",
                    "⚽"
                ]
            ]
        },
        {
            "sounds": [
                "f",
                "l",
                "a",
                "m",
                "i",
                "n",
                "g",
                "o"
            ],
            "word": "flamingo",
            "audioKeys": [
                "f",
                "l",
                "schwa",
                "m",
                "i",
                "ng",
                "g",
                "oa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "rainbow",
                    "🌈"
                ],
                [
                    "snowman",
                    "☃️"
                ],
                [
                    "flamingo",
                    "🦩"
                ]
            ]
        },
        {
            "sounds": [
                "k",
                "a",
                "n",
                "g",
                "a",
                "r",
                "oo"
            ],
            "word": "kangaroo",
            "audioKeys": [
                "k",
                "a",
                "ng",
                "g",
                "schwa",
                "r",
                "oo-long"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "kangaroo",
                    "🦘"
                ],
                [
                    "thunderstorm",
                    "⛈️"
                ],
                [
                    "dustbin",
                    "🗑️"
                ]
            ]
        },
        {
            "sounds": [
                "o",
                "c",
                "t",
                "o",
                "p",
                "u",
                "s"
            ],
            "word": "octopus",
            "audioKeys": [
                "o",
                "k",
                "t",
                "schwa",
                "p",
                "schwa",
                "s"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "letterbox",
                    "📬"
                ],
                [
                    "octopus",
                    "🐙"
                ],
                [
                    "backpack",
                    "🎒"
                ]
            ]
        },
        {
            "sounds": [
                "p",
                "e",
                "n",
                "g",
                "ui",
                "n"
            ],
            "word": "penguin",
            "audioKeys": [
                "p",
                "e",
                "ng",
                "g",
                "wi",
                "n"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "laptop",
                    "💻"
                ],
                [
                    "popcorn",
                    "🍿"
                ],
                [
                    "penguin",
                    "🐧"
                ]
            ]
        },
        {
            "sounds": [
                "g",
                "o",
                "r",
                "i",
                "ll",
                "a"
            ],
            "word": "gorilla",
            "audioKeys": [
                "g",
                "schwa",
                "r",
                "i",
                "l",
                "schwa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "gorilla",
                    "🦍"
                ],
                [
                    "chestnut",
                    "🌰"
                ],
                [
                    "teapot",
                    "🫖"
                ]
            ]
        },
        {
            "sounds": [
                "o",
                "r",
                "a",
                "ng",
                "u",
                "t",
                "a",
                "n"
            ],
            "word": "orangutan",
            "audioKeys": [
                "schwa",
                "r",
                "a",
                "ng",
                "oo-long",
                "t",
                "a",
                "n"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "paintbrush",
                    "🖌️"
                ],
                [
                    "orangutan",
                    "🦧"
                ],
                [
                    "bedroom",
                    "🛏️"
                ]
            ]
        },
        {
            "sounds": [
                "rh",
                "i",
                "n",
                "o"
            ],
            "word": "rhino",
            "audioKeys": [
                "r",
                "igh",
                "n",
                "oa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "playground",
                    "🛝"
                ],
                [
                    "armchair",
                    "🪑"
                ],
                [
                    "rhino",
                    "🦏"
                ]
            ]
        },
        {
            "sounds": [
                "h",
                "i",
                "pp",
                "o"
            ],
            "word": "hippo",
            "audioKeys": [
                "h",
                "i",
                "p",
                "oa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "hippo",
                    "🦛"
                ],
                [
                    "dolphin",
                    "🐬"
                ],
                [
                    "stopwatch",
                    "⏱️"
                ]
            ]
        },
        {
            "sounds": [
                "d",
                "i",
                "n",
                "o",
                "s",
                "aur"
            ],
            "word": "dinosaur",
            "audioKeys": [
                "d",
                "igh",
                "n",
                "schwa",
                "s",
                "or"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "jellyfish",
                    "🪼"
                ],
                [
                    "dinosaur",
                    "🦖"
                ],
                [
                    "elephant",
                    "🐘"
                ]
            ]
        },
        {
            "sounds": [
                "u",
                "n",
                "i",
                "c",
                "or",
                "n"
            ],
            "word": "unicorn",
            "audioKeys": [
                "yoo",
                "n",
                "i",
                "k",
                "or",
                "n"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "hedgehog",
                    "🦔"
                ],
                [
                    "alligator",
                    "🐊"
                ],
                [
                    "unicorn",
                    "🦄"
                ]
            ]
        },
        {
            "sounds": [
                "d",
                "r",
                "a",
                "g",
                "o",
                "n"
            ],
            "word": "dragon",
            "audioKeys": [
                "d",
                "r",
                "a",
                "g",
                "schwa",
                "n"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "dragon",
                    "🐉"
                ],
                [
                    "kangaroo",
                    "🦘"
                ],
                [
                    "octopus",
                    "🐙"
                ]
            ]
        },
        {
            "sounds": [
                "m",
                "o",
                "s",
                "qu",
                "i",
                "t",
                "o"
            ],
            "word": "mosquito",
            "audioKeys": [
                "m",
                "schwa",
                "s",
                "k",
                "ee",
                "t",
                "oa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "gorilla",
                    "🦍"
                ],
                [
                    "mosquito",
                    "🦟"
                ],
                [
                    "orangutan",
                    "🦧"
                ]
            ]
        },
        {
            "sounds": [
                "l",
                "a",
                "d",
                "y",
                "b",
                "ir",
                "d"
            ],
            "word": "ladybird",
            "audioKeys": [
                "l",
                "ai",
                "d",
                "ee",
                "b",
                "ur",
                "d"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "hippo",
                    "🦛"
                ],
                [
                    "dinosaur",
                    "🦖"
                ],
                [
                    "ladybird",
                    "🐞"
                ]
            ]
        },
        {
            "sounds": [
                "s",
                "c",
                "or",
                "p",
                "i",
                "o",
                "n"
            ],
            "word": "scorpion",
            "audioKeys": [
                "s",
                "k",
                "or",
                "p",
                "ee",
                "schwa",
                "n"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "scorpion",
                    "🦂"
                ],
                [
                    "dragon",
                    "🐉"
                ],
                [
                    "mosquito",
                    "🦟"
                ]
            ]
        },
        {
            "sounds": [
                "s",
                "p",
                "i",
                "d",
                "er"
            ],
            "word": "spider",
            "audioKeys": [
                "s",
                "p",
                "igh",
                "d",
                "schwa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "scorpion",
                    "🦂"
                ],
                [
                    "spider",
                    "🕷️"
                ],
                [
                    "squirrel",
                    "🐿️"
                ]
            ]
        },
        {
            "sounds": [
                "s",
                "qu",
                "i",
                "rr",
                "e",
                "l"
            ],
            "word": "squirrel",
            "audioKeys": [
                "s",
                "kw",
                "i",
                "r",
                "schwa",
                "l"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "raccoon",
                    "🦝"
                ],
                [
                    "badger",
                    "🦡"
                ],
                [
                    "squirrel",
                    "🐿️"
                ]
            ]
        },
        {
            "sounds": [
                "r",
                "a",
                "cc",
                "oo",
                "n"
            ],
            "word": "raccoon",
            "audioKeys": [
                "r",
                "schwa",
                "k",
                "oo-long",
                "n"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "raccoon",
                    "🦝"
                ],
                [
                    "beaver",
                    "🦫"
                ],
                [
                    "hamster",
                    "🐹"
                ]
            ]
        },
        {
            "sounds": [
                "b",
                "a",
                "dg",
                "er"
            ],
            "word": "badger",
            "audioKeys": [
                "b",
                "a",
                "j",
                "schwa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "parrot",
                    "🦜"
                ],
                [
                    "badger",
                    "🦡"
                ],
                [
                    "peacock",
                    "🦚"
                ]
            ]
        },
        {
            "sounds": [
                "o",
                "tt",
                "er"
            ],
            "word": "otter",
            "audioKeys": [
                "o",
                "t",
                "schwa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "chicken",
                    "🐓"
                ],
                [
                    "eagle",
                    "🦅"
                ],
                [
                    "otter",
                    "🦦"
                ]
            ]
        },
        {
            "sounds": [
                "b",
                "ea",
                "v",
                "er"
            ],
            "word": "beaver",
            "audioKeys": [
                "b",
                "ee",
                "v",
                "schwa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "beaver",
                    "🦫"
                ],
                [
                    "turtle",
                    "🐢"
                ],
                [
                    "lobster",
                    "🦞"
                ]
            ]
        },
        {
            "sounds": [
                "h",
                "a",
                "m",
                "s",
                "t",
                "er"
            ],
            "word": "hamster",
            "audioKeys": [
                "h",
                "a",
                "m",
                "s",
                "t",
                "schwa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "shark",
                    "🦈"
                ],
                [
                    "hamster",
                    "🐹"
                ],
                [
                    "goldfish",
                    "🐠"
                ]
            ]
        },
        {
            "sounds": [
                "r",
                "a",
                "bb",
                "i",
                "t"
            ],
            "word": "rabbit",
            "audioKeys": [
                "r",
                "a",
                "b",
                "i",
                "t"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "strawberry",
                    "🍓"
                ],
                [
                    "blueberry",
                    "🫐"
                ],
                [
                    "rabbit",
                    "🐇"
                ]
            ]
        },
        {
            "sounds": [
                "p",
                "a",
                "rr",
                "o",
                "t"
            ],
            "word": "parrot",
            "audioKeys": [
                "p",
                "a",
                "r",
                "schwa",
                "t"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "parrot",
                    "🦜"
                ],
                [
                    "watermelon",
                    "🍉"
                ],
                [
                    "coconut",
                    "🥥"
                ]
            ]
        },
        {
            "sounds": [
                "p",
                "ea",
                "c",
                "o",
                "ck"
            ],
            "word": "peacock",
            "audioKeys": [
                "p",
                "ee",
                "k",
                "o",
                "k"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "tomato",
                    "🍅"
                ],
                [
                    "peacock",
                    "🦚"
                ],
                [
                    "broccoli",
                    "🥦"
                ]
            ]
        },
        {
            "sounds": [
                "t",
                "ur",
                "k",
                "ey"
            ],
            "word": "turkey",
            "audioKeys": [
                "t",
                "ur",
                "k",
                "ee"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "cucumber",
                    "🥒"
                ],
                [
                    "mushroom",
                    "🍄"
                ],
                [
                    "turkey",
                    "🦃"
                ]
            ]
        },
        {
            "sounds": [
                "ch",
                "i",
                "ck",
                "e",
                "n"
            ],
            "word": "chicken",
            "audioKeys": [
                "ch",
                "i",
                "k",
                "i",
                "n"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "chicken",
                    "🐓"
                ],
                [
                    "potato",
                    "🥔"
                ],
                [
                    "pumpkin",
                    "🎃"
                ]
            ]
        },
        {
            "sounds": [
                "ea",
                "g",
                "le"
            ],
            "word": "eagle",
            "audioKeys": [
                "ee",
                "g",
                "ul"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "hamburger",
                    "🍔"
                ],
                [
                    "eagle",
                    "🦅"
                ],
                [
                    "pizza",
                    "🍕"
                ]
            ]
        },
        {
            "sounds": [
                "f",
                "ea",
                "th",
                "er"
            ],
            "word": "feather",
            "audioKeys": [
                "f",
                "e",
                "th-voiced",
                "schwa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "biscuit",
                    "🍪"
                ],
                [
                    "chocolate",
                    "🍫"
                ],
                [
                    "feather",
                    "🪶"
                ]
            ]
        },
        {
            "sounds": [
                "t",
                "ur",
                "t",
                "le"
            ],
            "word": "turtle",
            "audioKeys": [
                "t",
                "ur",
                "t",
                "ul"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "turtle",
                    "🐢"
                ],
                [
                    "doughnut",
                    "🍩"
                ],
                [
                    "helicopter",
                    "🚁"
                ]
            ]
        },
        {
            "sounds": [
                "l",
                "o",
                "b",
                "s",
                "t",
                "er"
            ],
            "word": "lobster",
            "audioKeys": [
                "l",
                "o",
                "b",
                "s",
                "t",
                "schwa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "motorcar",
                    "🚗"
                ],
                [
                    "lobster",
                    "🦞"
                ],
                [
                    "tractor",
                    "🚜"
                ]
            ]
        },
        {
            "sounds": [
                "sh",
                "r",
                "i",
                "m",
                "p"
            ],
            "word": "shrimp",
            "audioKeys": [
                "sh",
                "r",
                "i",
                "m",
                "p"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "rocket",
                    "🚀"
                ],
                [
                    "keyboard",
                    "⌨️"
                ],
                [
                    "shrimp",
                    "🦐"
                ]
            ]
        },
        {
            "sounds": [
                "sh",
                "ar",
                "k"
            ],
            "word": "shark",
            "audioKeys": [
                "sh",
                "ah",
                "k"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "shark",
                    "🦈"
                ],
                [
                    "violin",
                    "🎻"
                ],
                [
                    "basketball",
                    "🏀"
                ]
            ]
        },
        {
            "sounds": [
                "g",
                "o",
                "l",
                "d",
                "f",
                "i",
                "sh"
            ],
            "word": "goldfish",
            "audioKeys": [
                "g",
                "oa",
                "l",
                "d",
                "f",
                "i",
                "sh"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "trophy",
                    "🏆"
                ],
                [
                    "goldfish",
                    "🐠"
                ],
                [
                    "sunset",
                    "🌇"
                ]
            ]
        },
        {
            "sounds": [
                "ch",
                "e",
                "rr",
                "y"
            ],
            "word": "cherry",
            "audioKeys": [
                "ch",
                "e",
                "r",
                "ee"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "toothbrush",
                    "🪥"
                ],
                [
                    "rainbow",
                    "🌈"
                ],
                [
                    "cherry",
                    "🍒"
                ]
            ]
        },
        {
            "sounds": [
                "s",
                "t",
                "r",
                "aw",
                "b",
                "e",
                "rr",
                "y"
            ],
            "word": "strawberry",
            "audioKeys": [
                "s",
                "t",
                "r",
                "or",
                "b",
                "schwa",
                "r",
                "ee"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "strawberry",
                    "🍓"
                ],
                [
                    "sunflower",
                    "🌻"
                ],
                [
                    "thunderstorm",
                    "⛈️"
                ]
            ]
        },
        {
            "sounds": [
                "b",
                "l",
                "ue",
                "b",
                "e",
                "rr",
                "y"
            ],
            "word": "blueberry",
            "audioKeys": [
                "b",
                "l",
                "oo-long",
                "b",
                "schwa",
                "r",
                "ee"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "sailboat",
                    "⛵"
                ],
                [
                    "blueberry",
                    "🫐"
                ],
                [
                    "letterbox",
                    "📬"
                ]
            ]
        },
        {
            "sounds": [
                "b",
                "a",
                "n",
                "a",
                "n",
                "a"
            ],
            "word": "banana",
            "audioKeys": [
                "b",
                "schwa",
                "n",
                "ah",
                "n",
                "schwa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "handbag",
                    "👜"
                ],
                [
                    "laptop",
                    "💻"
                ],
                [
                    "banana",
                    "🍌"
                ]
            ]
        },
        {
            "sounds": [
                "w",
                "a",
                "t",
                "er",
                "m",
                "e",
                "l",
                "o",
                "n"
            ],
            "word": "watermelon",
            "audioKeys": [
                "w",
                "or",
                "t",
                "schwa",
                "m",
                "e",
                "l",
                "schwa",
                "n"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "watermelon",
                    "🍉"
                ],
                [
                    "sandwich",
                    "🥪"
                ],
                [
                    "chestnut",
                    "🌰"
                ]
            ]
        },
        {
            "sounds": [
                "c",
                "o",
                "c",
                "o",
                "n",
                "u",
                "t"
            ],
            "word": "coconut",
            "audioKeys": [
                "k",
                "oa",
                "k",
                "schwa",
                "n",
                "u",
                "t"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "teaspoon",
                    "🥄"
                ],
                [
                    "coconut",
                    "🥥"
                ],
                [
                    "paintbrush",
                    "🖌️"
                ]
            ]
        },
        {
            "sounds": [
                "a",
                "v",
                "o",
                "c",
                "a",
                "d",
                "o"
            ],
            "word": "avocado",
            "audioKeys": [
                "a",
                "v",
                "schwa",
                "k",
                "ah",
                "d",
                "oa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "bathroom",
                    "🛁"
                ],
                [
                    "playground",
                    "🛝"
                ],
                [
                    "avocado",
                    "🥑"
                ]
            ]
        },
        {
            "sounds": [
                "t",
                "o",
                "m",
                "a",
                "t",
                "o"
            ],
            "word": "tomato",
            "audioKeys": [
                "t",
                "schwa",
                "m",
                "ah",
                "t",
                "oa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "tomato",
                    "🍅"
                ],
                [
                    "butterfly",
                    "🦋"
                ],
                [
                    "dolphin",
                    "🐬"
                ]
            ]
        },
        {
            "sounds": [
                "b",
                "r",
                "o",
                "cc",
                "o",
                "l",
                "i"
            ],
            "word": "broccoli",
            "audioKeys": [
                "b",
                "r",
                "o",
                "k",
                "schwa",
                "l",
                "ee"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "firework",
                    "🎆"
                ],
                [
                    "broccoli",
                    "🥦"
                ],
                [
                    "jellyfish",
                    "🪼"
                ]
            ]
        },
        {
            "sounds": [
                "p",
                "o",
                "s",
                "t",
                "b",
                "o",
                "x"
            ],
            "word": "postbox",
            "audioKeys": [
                "p",
                "oa",
                "s",
                "t",
                "b",
                "o",
                "x"
            ],
            "hint": "Blend the first part, then the second part, and join them together.",
            "choices": [
                [
                    "footprint",
                    "👣"
                ],
                [
                    "hedgehog",
                    "🦔"
                ],
                [
                    "postbox",
                    "📮"
                ]
            ]
        },
        {
            "sounds": [
                "c",
                "u",
                "c",
                "u",
                "m",
                "b",
                "er"
            ],
            "word": "cucumber",
            "audioKeys": [
                "k",
                "yoo",
                "k",
                "u",
                "m",
                "b",
                "schwa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "cucumber",
                    "🥒"
                ],
                [
                    "flamingo",
                    "🦩"
                ],
                [
                    "kangaroo",
                    "🦘"
                ]
            ]
        },
        {
            "sounds": [
                "m",
                "u",
                "sh",
                "r",
                "oo",
                "m"
            ],
            "word": "mushroom",
            "audioKeys": [
                "m",
                "u",
                "sh",
                "r",
                "oo-long",
                "m"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "penguin",
                    "🐧"
                ],
                [
                    "mushroom",
                    "🍄"
                ],
                [
                    "gorilla",
                    "🦍"
                ]
            ]
        },
        {
            "sounds": [
                "c",
                "a",
                "rr",
                "o",
                "t"
            ],
            "word": "carrot",
            "audioKeys": [
                "k",
                "a",
                "r",
                "schwa",
                "t"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "rhino",
                    "🦏"
                ],
                [
                    "hippo",
                    "🦛"
                ],
                [
                    "carrot",
                    "🥕"
                ]
            ]
        },
        {
            "sounds": [
                "p",
                "o",
                "t",
                "a",
                "t",
                "o"
            ],
            "word": "potato",
            "audioKeys": [
                "p",
                "schwa",
                "t",
                "ai",
                "t",
                "oa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "potato",
                    "🥔"
                ],
                [
                    "unicorn",
                    "🦄"
                ],
                [
                    "dragon",
                    "🐉"
                ]
            ]
        },
        {
            "sounds": [
                "p",
                "u",
                "m",
                "p",
                "k",
                "i",
                "n"
            ],
            "word": "pumpkin",
            "audioKeys": [
                "p",
                "u",
                "m",
                "p",
                "k",
                "i",
                "n"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "ladybird",
                    "🐞"
                ],
                [
                    "pumpkin",
                    "🎃"
                ],
                [
                    "scorpion",
                    "🦂"
                ]
            ]
        },
        {
            "sounds": [
                "p",
                "r",
                "e",
                "tz",
                "e",
                "l"
            ],
            "word": "pretzel",
            "audioKeys": [
                "p",
                "r",
                "e",
                "ts",
                "schwa",
                "l"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "squirrel",
                    "🐿️"
                ],
                [
                    "raccoon",
                    "🦝"
                ],
                [
                    "pretzel",
                    "🥨"
                ]
            ]
        },
        {
            "sounds": [
                "h",
                "a",
                "m",
                "b",
                "ur",
                "g",
                "er"
            ],
            "word": "hamburger",
            "audioKeys": [
                "h",
                "a",
                "m",
                "b",
                "ur",
                "g",
                "schwa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "hamburger",
                    "🍔"
                ],
                [
                    "otter",
                    "🦦"
                ],
                [
                    "beaver",
                    "🦫"
                ]
            ]
        },
        {
            "sounds": [
                "p",
                "i",
                "zz",
                "a"
            ],
            "word": "pizza",
            "audioKeys": [
                "p",
                "ee",
                "ts",
                "schwa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "rabbit",
                    "🐇"
                ],
                [
                    "pizza",
                    "🍕"
                ],
                [
                    "parrot",
                    "🦜"
                ]
            ]
        },
        {
            "sounds": [
                "s",
                "p",
                "a",
                "gh",
                "e",
                "tt",
                "i"
            ],
            "word": "spaghetti",
            "audioKeys": [
                "s",
                "p",
                "schwa",
                "g",
                "e",
                "t",
                "ee"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "turkey",
                    "🦃"
                ],
                [
                    "chicken",
                    "🐓"
                ],
                [
                    "spaghetti",
                    "🍝"
                ]
            ]
        },
        {
            "sounds": [
                "b",
                "i",
                "s",
                "c",
                "ui",
                "t"
            ],
            "word": "biscuit",
            "audioKeys": [
                "b",
                "i",
                "s",
                "k",
                "i",
                "t"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "biscuit",
                    "🍪"
                ],
                [
                    "feather",
                    "🪶"
                ],
                [
                    "turtle",
                    "🐢"
                ]
            ]
        },
        {
            "sounds": [
                "ch",
                "o",
                "co",
                "l",
                "a",
                "te"
            ],
            "word": "chocolate",
            "audioKeys": [
                "ch",
                "o",
                "k",
                "l",
                "schwa",
                "t"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "shrimp",
                    "🦐"
                ],
                [
                    "chocolate",
                    "🍫"
                ],
                [
                    "shark",
                    "🦈"
                ]
            ]
        },
        {
            "sounds": [
                "l",
                "o",
                "ll",
                "i",
                "p",
                "o",
                "p"
            ],
            "word": "lollipop",
            "audioKeys": [
                "l",
                "o",
                "l",
                "ee",
                "p",
                "o",
                "p"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "cherry",
                    "🍒"
                ],
                [
                    "strawberry",
                    "🍓"
                ],
                [
                    "lollipop",
                    "🍭"
                ]
            ]
        },
        {
            "sounds": [
                "d",
                "ough",
                "n",
                "u",
                "t"
            ],
            "word": "doughnut",
            "audioKeys": [
                "d",
                "oa",
                "n",
                "u",
                "t"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "doughnut",
                    "🍩"
                ],
                [
                    "banana",
                    "🍌"
                ],
                [
                    "watermelon",
                    "🍉"
                ]
            ]
        },
        {
            "sounds": [
                "h",
                "e",
                "l",
                "i",
                "c",
                "o",
                "p",
                "t",
                "er"
            ],
            "word": "helicopter",
            "audioKeys": [
                "h",
                "e",
                "l",
                "i",
                "k",
                "o",
                "p",
                "t",
                "schwa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "avocado",
                    "🥑"
                ],
                [
                    "helicopter",
                    "🚁"
                ],
                [
                    "tomato",
                    "🍅"
                ]
            ]
        },
        {
            "sounds": [
                "u",
                "m",
                "b",
                "r",
                "e",
                "ll",
                "a"
            ],
            "word": "umbrella",
            "audioKeys": [
                "u",
                "m",
                "b",
                "r",
                "e",
                "l",
                "schwa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "postbox",
                    "📮"
                ],
                [
                    "cucumber",
                    "🥒"
                ],
                [
                    "umbrella",
                    "☂️"
                ]
            ]
        },
        {
            "sounds": [
                "m",
                "o",
                "t",
                "or",
                "c",
                "ar"
            ],
            "word": "motorcar",
            "audioKeys": [
                "m",
                "oa",
                "t",
                "schwa",
                "k",
                "ah"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "motorcar",
                    "🚗"
                ],
                [
                    "carrot",
                    "🥕"
                ],
                [
                    "potato",
                    "🥔"
                ]
            ]
        },
        {
            "sounds": [
                "t",
                "r",
                "a",
                "c",
                "t",
                "or"
            ],
            "word": "tractor",
            "audioKeys": [
                "t",
                "r",
                "a",
                "k",
                "t",
                "schwa"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "pretzel",
                    "🥨"
                ],
                [
                    "tractor",
                    "🚜"
                ],
                [
                    "hamburger",
                    "🍔"
                ]
            ]
        },
        {
            "sounds": [
                "a",
                "m",
                "b",
                "u",
                "l",
                "a",
                "n",
                "ce"
            ],
            "word": "ambulance",
            "audioKeys": [
                "a",
                "m",
                "b",
                "yoo",
                "l",
                "schwa",
                "n",
                "s"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "spaghetti",
                    "🍝"
                ],
                [
                    "biscuit",
                    "🍪"
                ],
                [
                    "ambulance",
                    "🚑"
                ]
            ]
        },
        {
            "sounds": [
                "r",
                "o",
                "ck",
                "e",
                "t"
            ],
            "word": "rocket",
            "audioKeys": [
                "r",
                "o",
                "k",
                "i",
                "t"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "rocket",
                    "🚀"
                ],
                [
                    "lollipop",
                    "🍭"
                ],
                [
                    "doughnut",
                    "🍩"
                ]
            ]
        },
        {
            "sounds": [
                "k",
                "ey",
                "b",
                "oar",
                "d"
            ],
            "word": "keyboard",
            "audioKeys": [
                "k",
                "ee",
                "b",
                "or",
                "d"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "umbrella",
                    "☂️"
                ],
                [
                    "keyboard",
                    "⌨️"
                ],
                [
                    "motorcar",
                    "🚗"
                ]
            ]
        },
        {
            "sounds": [
                "t",
                "r",
                "u",
                "m",
                "p",
                "e",
                "t"
            ],
            "word": "trumpet",
            "audioKeys": [
                "t",
                "r",
                "u",
                "m",
                "p",
                "i",
                "t"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "ambulance",
                    "🚑"
                ],
                [
                    "rocket",
                    "🚀"
                ],
                [
                    "trumpet",
                    "🎺"
                ]
            ]
        },
        {
            "sounds": [
                "v",
                "i",
                "o",
                "l",
                "i",
                "n"
            ],
            "word": "violin",
            "audioKeys": [
                "v",
                "igh",
                "schwa",
                "l",
                "i",
                "n"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "violin",
                    "🎻"
                ],
                [
                    "trumpet",
                    "🎺"
                ],
                [
                    "basketball",
                    "🏀"
                ]
            ]
        },
        {
            "sounds": [
                "b",
                "a",
                "s",
                "k",
                "e",
                "t",
                "b",
                "a",
                "ll"
            ],
            "word": "basketball",
            "audioKeys": [
                "b",
                "ah",
                "s",
                "k",
                "i",
                "t",
                "b",
                "or",
                "l"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "tennis",
                    "🎾"
                ],
                [
                    "basketball",
                    "🏀"
                ],
                [
                    "trophy",
                    "🏆"
                ]
            ]
        },
        {
            "sounds": [
                "t",
                "e",
                "nn",
                "i",
                "s"
            ],
            "word": "tennis",
            "audioKeys": [
                "t",
                "e",
                "n",
                "i",
                "s"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "football",
                    "⚽"
                ],
                [
                    "toothbrush",
                    "🪥"
                ],
                [
                    "tennis",
                    "🎾"
                ]
            ]
        },
        {
            "sounds": [
                "t",
                "r",
                "o",
                "ph",
                "y"
            ],
            "word": "trophy",
            "audioKeys": [
                "t",
                "r",
                "oa",
                "f",
                "ee"
            ],
            "hint": "Blend a few sounds at a time, then join them together.",
            "choices": [
                [
                    "trophy",
                    "🏆"
                ],
                [
                    "snowman",
                    "☃️"
                ],
                [
                    "sunflower",
                    "🌻"
                ]
            ]
        }
    ]
};

if (typeof module === "object" && module.exports) module.exports = challenges;
else globalThis.SAFARI_CHALLENGES = challenges;
