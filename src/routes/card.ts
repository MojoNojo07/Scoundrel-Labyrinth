export class Card {
    suit: string = '';
    rank: number = 0;

    toString(): string {
        let returnString: string = '';
        if (this.rank < 11) {
            returnString += this.rank;
        } else if (this.rank == 11) {
            returnString += "Jack";
        } else if (this.rank == 12) {
            returnString += "Queen";
        } else if (this.rank == 13) {
            returnString += "King";
        } else if (this.rank == 14) {
            returnString += "Ace";
        }

        returnString += " of " + this.suit + "s";

        return returnString;
    }
}
