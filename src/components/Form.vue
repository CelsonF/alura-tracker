<template>
	<div class="box form">
		<div class="columns">
			<div class="column is-8" role="form" aria-label="Formul[ario para criação de uma nova tarefa ">
				<input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="describeTask">
			</div>
			<div class="column">
				<Timer @finished-timer="finishedTask"/>	
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Timer from './Timer.vue'

export default defineComponent({
	name:"form-tasks",
	emits:['when-finished-task'],
	components:{
		Timer
	},
	data(){
		return{
			describeTask: ""
		}
	},
	methods:{
		finishedTask(elapsedTime:number) : void {
			this.$emit('when-finished-task', {
				descriptionInSeconds:elapsedTime,
				description: this.describeTask
			})
			this.describeTask = ""
		}
	}
})
</script>

<style>
.form {
	color: var(--text-primary);
	background-color: var(--bg-primary);
}
</style>