import {gameData, makeDefaultSettings} from "../../data/game.data.js";
import {renderButton} from "../button/renderButton.js";

export function renderLooseElement() {
    const looseElement = document.createElement('div')
    looseElement.className = 'result-element'

    const result = document.createElement('span')
    result.className = 'span_1'
    result.append('You Lose!!!')

    const advice = document.createElement('span')
    advice.className = 'type_2'
    advice.append("You\'ll be lucky next time")

    const resultPoints = document.createElement('div')
    resultPoints.className = 'type_2'
    const catchPoints = document.createElement('div')
    catchPoints.append('Catch:', Number(gameData.points.catchPoints))

    const missPoints = document.createElement('div')
    missPoints.append('Miss:', Number(gameData.points.missPoints))

    const playTime = document.createElement('div')
    playTime.append('Time:',  gameData.time["elapsed time"])

    resultPoints.append(catchPoints, missPoints, playTime)
    looseElement.append(result, advice, resultPoints)

    const playAgainButton = renderButton("Play again", makeDefaultSettings, 'again-button')
    looseElement.append(playAgainButton)
    return looseElement
}