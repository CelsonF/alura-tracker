<template>
  <main class="columns ls-gapless is-multiline">
		<div class="column is-one-quarter pr-0 pb-0">
			<BarraLateral/>
		</div>
		<div class="column is-three-quarter pl-0">
			<Formulario/>
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from "./components/BarraLateral.vue";
import FormTasks from "./components/Formulario.vue";

export default defineComponent ({
	name:'App',
	components :{
		BarraLateral,
		Formulario : FormTasks
	}
})

</script>
