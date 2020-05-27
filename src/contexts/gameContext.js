import React from "react";

// This context is gonna be replaced in App, but here we have the main structure of it (just to know it)
const GameContext = React.createContext({
    board: ["", "", "", "", "", "", "", "", ""],
    isPlayerX: true,
    gameStatus: "", // victory, loss, draw, game in progress
    isNextX: true
});

export default GameContext;