<div class="card" onmousedown={clickLog}>
    {card_id} <br>
    {card.toString()}

</div>

<style>
    .card {
        background-color:pink;
        color:black;
        border: 5px solid white;
        width:200px;
        margin-left:50px;
        transition: transform 0.1s;
        text-align: center;
    }

    .card:hover {
        transform:translateY(-10px);
    }
</style>

<script>
    let { card_id, card } = $props();

    function clickLog() {
        console.log("Clicked " + card.toString() + " with ID " + card_id);
    }
</script>