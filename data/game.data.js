import {settingsData} from "./settingsData.js";

export const GAME_STATUSES = {
    before: 'before',
    inProcess: 'inProcess',
}

export const OFFER_STATUSES = {
    default: 'default',
    catch: 'catch',
    miss: 'miss'
}

export const gameData = {
    gameStatus: GAME_STATUSES.before,
    gridSize: {
        rowsCount: 3,
        columnsCount: 3
    },

    points: {
        catchPoints: 0,
        missPoints: 0,
    },

    pointToWin: 3,
    'ms catch': 100,
    'misses to loose': 3,
    offerStatus: OFFER_STATUSES.default,

    winStatus: false,
    looseStatus: false,

    offer: {
        offerUrl: './images/Offer.png',
        offerCatchUrl: './images/OfferCatch.png',
        offerMissUrl: './images/OfferMiss.png',
    },

    offerCoordinates: {
        x: Math.floor(Math.random() * settingsData.Grid.inputValue.selected),
        y: Math.floor(Math.random() * settingsData.Grid.inputValue.selected)
    },

    time: {
        ['elapsed time']: ''
    }
}

let start
let end
let elapsed

let notifySubscriber = null

export function subscribe(subscriber) {
    notifySubscriber = subscriber
}

let missId

function changeOfferCoordinates() {
    let NewX = Math.floor(Math.random() * gameData.gridSize.columnsCount)
    let NewY = Math.floor(Math.random() * gameData.gridSize.rowsCount)
    while (NewX === gameData.offerCoordinates.x && NewY === gameData.offerCoordinates.y) {
        NewX = Math.floor(Math.random() * gameData.gridSize.columnsCount)
        NewY = Math.floor(Math.random() * gameData.gridSize.rowsCount)
    }
    gameData.offerCoordinates.x = NewX
    gameData.offerCoordinates.y = NewY
    gameData.offerStatus = OFFER_STATUSES.default
}

export function startGame() {
    gameData.gameStatus = GAME_STATUSES.inProcess
    start = new Date()
    changeOfferCoordinates()
    notifySubscriber()
    missId = setInterval(missOffer, 1000)
}

export function catchOffer() {
    if (gameData.offerStatus === OFFER_STATUSES.default) {
        clearInterval(missId)
        gameData.offerStatus = OFFER_STATUSES.catch
        ++gameData.points.catchPoints
        if (Number(gameData.pointToWin) === Number(gameData.points.catchPoints)) {
            gameData.winStatus = true
            end = new Date()
            elapsed = end.getTime() - start.getTime()
            gameData.time['elapsed time'] = millisToMinutesAndSeconds(elapsed)
        } else {
            setTimeout(continueFunc, 500)
        }
        notifySubscriber()
    }
}

export function missOffer() {
    clearInterval(missId)
    gameData.offerStatus = OFFER_STATUSES.miss
    ++gameData.points.missPoints
    if (Number(gameData.points.missPoints) === Number(gameData['misses to loose'])) {
        gameData.looseStatus = true
        end = new Date()
        elapsed = end.getTime() - start.getTime()
        gameData.time['elapsed time'] = millisToMinutesAndSeconds(elapsed)
    } else {
        setTimeout(continueFunc, 500)
    }
    notifySubscriber()
}

function millisToMinutesAndSeconds(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + "m " + (seconds < 10 ? '0' : '') + seconds + 'sec';
}

function continueFunc() {
    changeOfferCoordinates()
    notifySubscriber()
    missId = setInterval(missOffer, 1000)
}

export function makeDefaultSettings() {
    gameData.gameStatus = GAME_STATUSES.before
    gameData.gridSize.rowsCount = 3
    gameData.gridSize.columnsCount = 3
    gameData.points.catchPoints = 0
    gameData.points.missPoints = 0
    gameData.pointToWin = 3
    gameData['misses to loose'] = 3
    gameData.offerStatus = OFFER_STATUSES.default
    gameData.winStatus = false
    gameData.looseStatus = false
    notifySubscriber()
}

