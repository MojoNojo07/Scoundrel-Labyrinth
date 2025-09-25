import { Deck } from './deck'

var deck: Deck = new Deck()

export function populate() {
    deck.populate()
}

export function shuffle() {
    deck.shuffle();
}

export function clear() {
    deck.clear();
}

export function printToLog() {
    if (deck.size == 0) {
        console.log("No cards in deck!")
    } else {
        for (let i: number = 0; i < deck.size; i++){
            let card = deck.getCard(i);
            console.log((i+1) + ": " + card.toString());
        }
    }
}