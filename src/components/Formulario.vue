<template>
	<div class="box">
		<div class="columns">
			<div class="column is-8" role="form" aria-label="Formul[ario para criação de uma nova tarefa ">
				<input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="describeTask">
			</div>
			<div class="column">
				<Temporizador @finished-timer="finishedTask"/>	
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Temporizador from './Temporizador.vue'

export default defineComponent({
	name:"form-tasks",
	components:{
		Temporizador
	},
	data(){
		return{
			describeTask: ""
		}
	},
	methods:{
		finishedTask(elapsedTime:number) : void {
			console.log("Time of task",elapsedTime)
			console.log("Description of task",this.describeTask)
			this.describeTask = ""
		}
	}
})
</script>
