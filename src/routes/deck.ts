import { Card } from './card';

export class Deck {
    size: number = 0;
    cards: Card[] = [];

    populate(): void {
        if (this.cards.length > 0 || this.size > 0) {
            this.clear();
        }
        for (var s: number = 0; s < 4; s++) {
            let currentSuit: string = '';
            if (s == 0) {
                currentSuit = "Club"   ;
            } else if (s == 1) {
                currentSuit = "Diamond";
            } else if (s == 2) {
                currentSuit = "Heart";
            } else if (s == 3) {
                currentSuit = "Spade";
            }

            for (let i: number = 2; i < 15; i++) {
                let card: Card = new Card();
                card.suit = currentSuit;
                card.rank = i;

                this.cards.push(card);
                this.size++;
            }
        }
    }

    getCard(index: number): Card {
        return this.cards[index];
    }

    shuffle() {
        for (let i: number = 0; i < this.size; i++) {
            let shuffleNum: number = Math.floor(Math.random() * this.size);
            let temp: Card = this.cards[i];
            this.cards[i] = this.cards[shuffleNum];
            this.cards[shuffleNum] = temp;
        }
    }

    clear() {
        this.cards = [];
        this.size = 0;
    }
}

