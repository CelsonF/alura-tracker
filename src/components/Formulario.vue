<template>
	<div class="box">
		<div class="columns">
			<div class="column is-8" role="form" aria-label="Formul[ario para criação de uma nova tarefa ">
				<input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?">
			</div>
			<div class="column">
				<div class="is-flex is-align-items-center is-justify-content-space-between">
					<section>
						<strong>
							{{ timePast }}
						</strong>
					</section>
					<button class="button" @click="initCount()">
						<span class="icon">
							<i class="fas fa-play"></i>
						</span>
						<span>Play</span>
					</button>
					<button class="button" @click="finallyCount()">
						<span class="icon">
							<i class="fas fa-stop"></i>
						</span>
						<span>Stop</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
	name:"form-tasks",
	data(){
		return{
			timeInSeconds: 0,
			cronometer:0
		}
	},
	computed: {
		timePast() : string {
			return new Date(this.timeInSeconds * 1000).toISOString().substring(11,19)
		}
	},
	methods:{
		initCount() {
			this.cronometer = setInterval(() => {
				this.timeInSeconds += 1
			}, 1000)
		},
		finallyCount() {
			clearInterval(this.cronometer)
		}
	}
})
</script>
