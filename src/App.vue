<template>
  <main class="columns ls-gapless is-multiline">
		<div class="column is-one-quarter pr-0 pb-0">
			<SideBar/>
		</div>
		<div class="column is-three-quarter pl-0">
			<Form/>
			<div class="p-5">
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
			</div>
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from "./components/SideBar.vue";
import Form from "./components/Form.vue";
import Task from "./components/Tasks.vue";

export default defineComponent ({
	name:'App',
	components :{
		SideBar,
		Form,
		Task 
	}
})

</script>
