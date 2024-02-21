import {catchOffer, gameData, OFFER_STATUSES} from "../../data/game.data.js";

export function renderOffer() {
    const offerElement = document.createElement('img')
    if (gameData.offerStatus === OFFER_STATUSES.default) {
        offerElement.src = gameData.offer.offerUrl
    } else if (gameData.offerStatus === OFFER_STATUSES.miss) {
        offerElement.src = gameData.offer.offerMissUrl
    } else if (gameData.offerStatus === OFFER_STATUSES.catch) {
        offerElement.src = gameData.offer.offerCatchUrl
    }
    offerElement.addEventListener('click', catchOffer)
    return offerElement
}