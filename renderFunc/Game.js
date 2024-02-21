import {GAME_STATUSES, gameData, startGame} from "../data/game.data.js";
import {renderSettings} from "./renderSettings.js";
import {renderGrid} from "./renderGrid.js";
import {renderButton} from "../components/button/renderButton.js";

export function Game() {
    const gameContainer = document.createElement('div')

    const selectContainer = document.createElement('div')
    selectContainer.append(renderSettings())

    if (gameData.gameStatus === GAME_STATUSES.before) {
        const startGameBtn = renderButton('startGame', startGame)
        gameContainer.append(selectContainer, startGameBtn)
    } else if (gameData.gameStatus === GAME_STATUSES.inProcess) {
        const playField = document.createElement('div')
        playField.append(renderGrid())
        gameContainer.append(selectContainer, playField)
    }

    return gameContainer
}