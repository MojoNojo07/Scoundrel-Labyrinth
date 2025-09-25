<h1>The Deck</h1>
<button on:click={printToLog}>Log all cards</button>
<button on:click={populate}>Populate Deck</button>
<button on:click={shuffle}>Shuffle the Deck</button>
<button on:click={clear}>Clear the Deck</button>

<script lang="ts">
    import { populate, shuffle, printToLog, clear } from './scoundrel';
</script>