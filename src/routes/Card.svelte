<button class="card" onmousemove={() => {if($click) toMouse()}} id="newCard">
    {card.toString()}
</button>

<style>
    
    button {
        all: unset;
        user-select: none;
        color:black;
        border: 5px solid white;
        border-radius: 2px;
        position: absolute;
        width:200px;
        height: 350px;
        margin: auto;
        margin-top: auto;
        margin-left:50px;
        transition: transform 0.1s;
        text-align: center;
    }

    button:hover {
        transform:translateY(-10px);
    }
</style>

<script lang="ts">
    import { onMount } from 'svelte';
    import { mousePosition, clickState } from './mousehandler.svelte';

    let { card_id, card } = $props();
    var thisCard: HTMLElement | null;
    var selected: boolean = false;
    const cursor = mousePosition();
    const click = clickState();


    onMount(() => {

        console.log("mounted " + card.toString() + " with ID " + card_id);
        thisCard = document.getElementById("newCard");
        if(thisCard === null) {
            console.log("card load error");
        } else {
            thisCard.id = "card" + card_id;
            thisCard = document.getElementById("card" + card_id);
            if (thisCard != null) {
                if (card.suit == "Spade" || card.suit == "Club") {
                    thisCard.style.backgroundColor = "gray";
                } else {
                    thisCard.style.backgroundColor = "pink";
                }
            }
        }
    })

    function select() {
        selected = !selected;

        if (thisCard != null) {
            if (selected) {
                thisCard.style.borderColor = "yellow";
                // console.log("selected " + card.toString() + " with ID " + thisCard.id);
            } else {
                thisCard.style.borderColor = "white";
                // console.log("deselected " + card.toString() + " with ID " + card_id);
            }
        }
    }

    function toMouse() {
        if (thisCard != null){
            console.log("moving card to " + $cursor.x + "x " + $cursor.y + "y")
            thisCard.style.top = ($cursor.y - 175) + "px";
            thisCard.style.left = ($cursor.x - 150) + "px";
        }
    }
</script>