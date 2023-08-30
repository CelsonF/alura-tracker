<template>
  <main class="columns ls-gapless is-multiline">
		<div class="column is-one-quarter pr-0 pb-0">
			<SideBar/>
		</div>
		<div class="column is-three-quarter pl-0">
			<Form @when-finished-task="addTask"/>
			<div class="p-5">
				<Task v-for="(task, index) in tasks" :key="index" :task="task"/>
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

export default defineComponent ({
	name:'App',
	components :{
		SideBar,
		Form,
		Task 
	},
	data(){
		return{
			tasks: [] as ITasks[]
		}
	},
	methods:{
		addTask(task:ITasks) {
			this.tasks.push(task)
		}
	}
})

</script>
