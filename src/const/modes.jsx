export const MODES = [
    {
        genre: "Solo Play",
        modes: [
            {
                id: "classic-duel",
                name: "Classic Duel",
                description: "Two players play against each other.",
            },
            {
                id: "classic-practice",
                name: "Classic Practice",
                description: "A player plays against the computer.",
            }
        ]
    },
    {
        genre: "Hybrid",
        modes: [
            {
                id: "brain-practice",
                name: "Brain Practice",
                description: "A player makes decisions while the computer moves the pieces."
            },
            {
                id: "hand-practice",
                name: "Hand Practice",
                description: "A player moves the pieces while the computer makes decisions."
            },
            {
                id: "brain-duel",
                name: "Brain Duel",
                description: "Two players play against each other with one player making decisions and the other moving the pieces."
            },
            {
                id: "hand-duel",
                name: "Hand Duel",
                description: "Two players play against each other with one player moving the pieces and the other making decisions."
            }
        ]
    },
    {
        genre: "Multiplayer",
        modes: [
            {
                id: "hand-and-brain-duel",
                name: "Hand And Brain Duel",
                description: "Four players play against each other with two players making decisions and the other two moving the pieces."
            }
        ]
    }
];