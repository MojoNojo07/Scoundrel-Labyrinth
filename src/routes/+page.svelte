<style>
    
    .table {
        background-color: black;
        border: 5px solid purple;
        width: 1300px;
        height: 375px;
        padding:20px;
        display:block;
        align-items: start;
    }
    .table .deck {
        margin: auto;
        margin-top: auto;
        background-color: red;
        border: 5px solid white;
        border-radius: 2px;
        width: 230px;
        height: 350px;
    }
</style>

<h1>The Deck</h1>
<p>HP: {health}</p>
<p>Deck size: {deck.size}</p>
<br>
<div class="table" id="table">
    <button onclick={draw} class="deck">Scoundrel</button>
</div>
<button onclick={remove_card}>Remove Card</button>
<br>
<button onclick={printToLog}>Log all cards</button>
<button onclick={populate}>Populate Deck</button>
<button onclick={shuffle}>Shuffle the Deck</button>
<button onclick={clear}>Clear the Deck</button>
<br>
<button onclick={() => health++}>Increment HP</button>
<button onclick={() => health--}>Decrement HP</button>
<br>
<p id="coords">Coords: 0x 0y</p>

<script lang="ts">
    import { mount, onMount, unmount } from 'svelte';
    import { Deck } from './deck.svelte.ts';
    import Card from './Card.svelte';

    var coordsElement = document.getElementById('coords');

    var deck: Deck = new Deck();
    var card_count = 0;
    var cards_out: Card[] = []

    // onMount(() => {
    //     let table = document.getElementById("table");
    //     let deck_element = mount(Deck, {
    //         target: table!
    //     })
    // })

    function populate() {
        deck.populate();
    }

    function shuffle() {
        deck.shuffle();
    }

    function clear() {
        deck.clear();
    }

    document.addEventListener('mousemove', function(e) {
        const x = e.clientX;
        const y = e.clientY;
        if (coordsElement != null) {
            console.log("squeaking at " + x + "x " + y + "y");
            coordsElement.textContent = "Coords: " + x + "x " + y + "y";
        }
    });

    function draw() {
        if (card_count >= 4) {
            console.log("Already have 4 cards out!");
        } else {
            let card = deck.draw();
            if (card === null) {
                console.log("Deck is empty!");
            } else {
                card_count++;
                let table = document.getElementById("table")
                let card_element = mount(Card, {
                    target: table!,
                    props: {card_id: card_count, card: card}
                })
                cards_out.push(card_element);
            }
        }
    }

    function remove_card() {
        let card = cards_out.pop()
        if (card) {
            card_count--;
            unmount(card)
        }
    } 

    function printToLog() {
        if (deck.size == 0) {
            console.log("No cards in deck!")
        } else {
            for (let i: number = 0; i < deck.size; i++){
                let card = deck.getCard(i);
                console.log((i+1) + ": " + card.toString());
            }
        }
    }
    let health: number = $state(20)
</script>