<template>
	<header class="is-flex is-justify-content-center">
		<h1 class="pt-4">
			<img src="../assets/logo.png" alt="AluraTracker">
		</h1>
	</header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: "BarraLateral"
})
</script>
<style scoped>
header {
	background-color: #0d3b66;
	width: 100%;
	height: 100vh;
}

@media only screen and (max-width: 768px) {
	header {
		padding: 2.5rem;
		height: auto;
	}
}
</style>
