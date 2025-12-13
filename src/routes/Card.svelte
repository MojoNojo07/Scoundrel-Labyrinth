<button class="card" onmousedown={select} id="newCard">
    {card_id} <br>
    {card.toString()}

</button>

<style>
    
    button {
        all: unset;
        color:black;
        border: 5px solid white;
        width:200px;
        margin-left:50px;
        transition: transform 0.1s;
        text-align: center;
    }

    button:hover {
        transform:translateY(-10px);
    }
</style>

<script>
    let { card_id, card } = $props();
    /**
     * @type {HTMLElement | null}
     */
    var thisCard;
    var selected = false;

    import { onMount } from 'svelte';

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
                console.log("selected " + card.toString() + " with ID " + thisCard.id);
            } else {
                thisCard.style.borderColor = "white";
                console.log("deselected " + card.toString() + " with ID " + card_id);
            }
        }
    }
</script>