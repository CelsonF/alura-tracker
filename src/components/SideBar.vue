<template>
	<header class="is-flex is-align-items-center is-flex-direction-column ">
		<h1 class="pt-4">
			<img src="../assets/logo.png" alt="AluraTracker">
		</h1>
		<button class="button"  @click="changeDarkMode()">
			{{ textButton }}
		</button>
	</header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: "BarraLateral",
	emits: ["change-dark-mode"],
	data() {
		return {
			darkMode: false
		}
	},
	computed: {
		textButton() {
			if (this.darkMode) {
				return "Deactive light mode";
			}
			return "Active dark mode";
		}
	},
	methods: {
		changeDarkMode() {
			this.$emit("change-dark-mode", this.darkMode = !this.darkMode);
		}
	}
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
