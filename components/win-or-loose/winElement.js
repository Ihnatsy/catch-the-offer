import {gameData, makeDefaultSettings} from "../../data/game.data.js";
import {renderButton} from "../button/renderButton.js";

export function renderWinElement() {
    const winElement = document.createElement('div')
    winElement.className = 'result-element'

    const result = document.createElement('span')
    result.className = 'span_1'
    result.append('You Win!!!')

    const advice = document.createElement('span')
    advice.className = 'type_2'
    advice.append("Congratulations")

    const resultPoints = document.createElement('div')
    resultPoints.className = 'type_2'
    const catchPoints = document.createElement('div')
    catchPoints.append('Catch:', Number(gameData.points.catchPoints))

    const missPoints = document.createElement('div')
    missPoints.append('Miss:', Number(gameData.points.missPoints))

    const playTime = document.createElement('div')
    playTime.append('Time:',  gameData.time["elapsed time"])

    resultPoints.append(catchPoints, missPoints, playTime)


    winElement.append(result, advice, resultPoints)

    const playAgainButton = renderButton("Play again", makeDefaultSettings, 'again-button')
    winElement.append(playAgainButton)
    return winElement
}