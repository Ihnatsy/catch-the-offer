import {gameData} from "../data/game.data.js";
import {renderOffer} from "../components/offer/renderOffer.js";

export function renderGrid() {
    const container = document.createElement('div')

    const pointsContainer = document.createElement('div')
    pointsContainer.className = 'points'
    const catchPoints = document.createElement('div')
    catchPoints.className = 'point-value'
    catchPoints.append(`Catch: ${gameData.points.catchPoints}`)
    const missPoints = document.createElement('div')
    missPoints.className = 'point-value'
    missPoints.append(`Miss: ${gameData.points.missPoints}`)

    pointsContainer.append(catchPoints, missPoints)

    const fieldContainer = document.createElement('table')
    for (let i = 0; i < gameData.gridSize.rowsCount; i++) {
        const row = document.createElement('tr')
        for (let j = 0; j < gameData.gridSize.columnsCount; j++) {
            const column = document.createElement('td')
            if (i === gameData.offerCoordinates.y && j === gameData.offerCoordinates.x) {
                const offer = renderOffer()
                column.append(offer)
            }
            row.append(column)
        }
        fieldContainer.append(row)
    }
    container.append(pointsContainer, fieldContainer)
    return container
}

