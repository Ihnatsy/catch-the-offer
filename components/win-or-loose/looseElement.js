import {gameData, makeDefaultSettings} from "../../data/game.data.js";
import {renderButton} from "../button/renderButton.js";

export function renderLooseElement() {
    const looseElement = document.createElement('div')
    looseElement.append(`YOU LOOSE!!! with ${gameData["misses to loose"]} elapsed time ${gameData.time["elapsed time"]} `)
    const playAgainButton = renderButton("Play Again", makeDefaultSettings)
    looseElement.append(playAgainButton)
    return looseElement
}