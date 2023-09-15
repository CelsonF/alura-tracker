<template>
  <main class="columns ls-gapless is-multiline dark-mode">
		<div class="column is-one-quarter pr-0 pb-0">
			<SideBar/>
		</div>
		<div class="column is-three-quarter pl-0 content">
			<Form @when-finished-task="addTask"/>
			<div class="p-5">
				<Task v-for="(task, index) in tasks" :key="index" :task="task"/>
				<Box v-if="listTasksEmpty">
					<p>You didn't tasks today 🙁 </p>
				</Box>
			</div>
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from "./components/SideBar.vue";
import Form from "./components/Form.vue";
import Task from "./components/Tasks.vue";
import ITasks from "./Interfaces/ITasks";
import Box from "./components/Box.vue";

export default defineComponent ({
	name:'App',
	components :{
		SideBar,
		Form,
		Task ,
		Box
	},
	data(){
		return{
			tasks: [] as ITasks[]
		}
	},
	computed:{
		listTasksEmpty() : boolean {
			return this.tasks.length === 0
		}
	},
	methods:{
		addTask(task:ITasks) {
			this.tasks.push(task)
		}
	}
})

</script>

<style>

main {
	--bg-primary:#fff;
	--text-primary:#000;
}

main.dark-mode { 
	--bg-primary:#2b2d42;
	--text-primary:#ddd;
}

.content { 
	background-color: var(--bg-primary);
}

</style>
