<h1>The Deck</h1>
<p>HP: {health}</p>
<br>
<button onclick={printToLog}>Log all cards</button>
<button onclick={populate}>Populate Deck</button>
<button onclick={shuffle}>Shuffle the Deck</button>
<button onclick={clear}>Clear the Deck</button>
<br>
<button onclick={() => health++}>Increment HP</button>
<button onclick={() => health--}>Decrement HP</button>

<script lang="ts">
    import { populate, shuffle, printToLog, clear } from './scoundrel';
    let health: number = $state(20)
</script>