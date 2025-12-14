import { Card } from './card';

export class Deck {
    size: number = $state(0);
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

    draw() {
        if (this.size > 0) {
            this.size--;
            return this.cards.pop()
        } else {
            return null;
        }
    }

    clear() {
        this.cards = [];
        this.size = 0;
    }

    remove(suit: string, rank: number) {
        for (let i: number = 0; i < this.size; i++) {
            if (this.cards[i].suit == suit && this.cards[i].rank == rank) {
                console.log("Removing " + this.cards[i].toString());
                this.cards.splice(i);
                this.size--;
            } else {
                console.log("didn't remove " + this.cards[i].toString());
            }
        }
    }

    scoundrelSetup() {
        this.populate();

        // remove all red face cards
        this.remove('Heart', 14);
        this.remove('Heart', 13);
        this.remove('Heart', 12);
        this.remove("Heart", 11);
        this.remove('Diamond', 14);
        this.remove('Diamond', 13);
        this.remove('Diamond', 12);
        this.remove('Diamond', 11);

        this.shuffle()
    }
}

