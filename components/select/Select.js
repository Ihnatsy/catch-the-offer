import {gameData} from "../../data/game.data.js";
import {settingsData} from "../../data/settingsData.js";

export function Select(settingType) {
    const container = document.createElement('div')

    const title = document.createElement('span')
    title.innerText = settingType.title
    container.append(title)

    const selectElement = document.createElement('select')

    for (let i = 0; i < settingType.inputValue.length; i++) {
        const optionElement = document.createElement('option')
        optionElement.innerText = settingType.textValue[i]
        optionElement.value = settingType.inputValue[i]
        // if (settingType === settingsData.Grid && Number(optionElement.value) === Number(gameData.gridSize.rowsCount)) {
        //     optionElement.selected = true
        // } else if (settingType === settingsData['Points to win'] && Number(optionElement.value) === Number(gameData.pointToWin)) {
        //     optionElement.selected = true
        // } else if (settingType === settingsData['ms after catch'] && Number(optionElement.value) === Number(gameData["ms catch"])) {
        //     optionElement.selected = true
        // } else if (settingType === settingsData['misses count'] && Number(optionElement.value) === Number(gameData["misses to loose"])) {
        //     optionElement.selected = true
        // }
        if (settingType === settingsData.Grid && Number(optionElement.value) === Number(gameData.gridSize.rowsCount)
            || settingType === settingsData['Points to win'] && Number(optionElement.value) === Number(gameData.pointToWin)
            || settingType === settingsData['ms after catch'] && Number(optionElement.value) === Number(gameData["ms catch"])
            || settingType === settingsData['misses count'] && Number(optionElement.value) === Number(gameData["misses to loose"])) {
            optionElement.selected = true
        }
        selectElement.append(optionElement)
    }
//для каждого вида select
    selectElement.addEventListener('change', function () {
        if (settingType === settingsData.Grid) {
            gameData.gridSize.rowsCount = this.value
            gameData.gridSize.columnsCount = this.value
        } else if (settingType === settingsData['Points to win']) {
            gameData.pointToWin = this.value
        } else if (settingType === settingsData['ms after catch']) {
            gameData["ms catch"] = this.value
        } else if (settingType === settingsData['misses count']) {
            gameData['misses to loose'] = this.value
        }
    })

    container.append(selectElement)
    return container
}





