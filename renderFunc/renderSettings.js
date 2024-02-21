import {Select} from "../components/select/Select.js";
import {settingsData} from "../data/settingsData.js";

export function renderSettings() {
    const container = document.createElement('div')
    container.className = 'settings'

    const el1 = Select(settingsData.Grid)
    const el2 = Select(settingsData["Points to win"])
    const el3 = Select(settingsData["ms after catch"])
    const el4 = Select(settingsData["misses count"])
    container.append(el1, el2, el3, el4)

    return container
}