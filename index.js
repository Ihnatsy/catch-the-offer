import {Game} from "./renderFunc/Game.js";
import {gameData, subscribe} from "./data/game.data.js";
import {renderWinElement} from "./components/win-or-loose/winElement.js";
import {renderLooseElement} from "./components/win-or-loose/looseElement.js";

const rootElement = document.getElementById('root')

function gameUI() {
    rootElement.innerHTML = ''
    if (gameData.winStatus) {
        rootElement.append(renderWinElement())
    } else if(gameData.looseStatus) {
        rootElement.append(renderLooseElement())
    } else {
        rootElement.append(Game())
    }

}

gameUI()
subscribe(gameUI)

