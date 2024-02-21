import {gameData, makeDefaultSettings} from "../../data/game.data.js";
import {renderButton} from "../button/renderButton.js";

export function renderWinElement() {
    const winElement = document.createElement('div')
    winElement.innerText = `YOU WIN!!! ${gameData.points.catchPoints} elapsed time ${gameData.time["elapsed time"]}`

    const playAgainButton = renderButton("Play Again", makeDefaultSettings)
    winElement.append(playAgainButton)
    return winElement
}