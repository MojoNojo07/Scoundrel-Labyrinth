<div class="card">
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
    }
</style>

<script>
    let { card_id, card } = $props();
</script>