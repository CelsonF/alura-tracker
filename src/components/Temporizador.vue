<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :time-in-seconds="timeInSeconds" />
        <Botao @clicked="initCount()" icon="fas fa-play" desciption="Play" :disabled-timer="runningChronometer"/>
        <Botao @clicked="finallyCount()" icon="fas fa-stop" desciption="Stop" :disabled-timer="!runningChronometer"/>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import Cronometro from './Cronometro.vue'
import Botao from './Botao.vue'

export default defineComponent({
	name:"temporizador-bar",
    emits: ['finishedTimer'],
    components:{
        Cronometro,
        Botao
    },
	data(){
		return{
			timeInSeconds: 0,
			chronometer:0,
            runningChronometer:false
		}
	},
	methods:{
		initCount() {
            this.runningChronometer = true
			this.chronometer = setInterval(() => {
				this.timeInSeconds += 1
			}, 1000)
		},
		finallyCount() {
            this.runningChronometer = false
			clearInterval(this.chronometer)
            this.$emit('finishedTimer', this.timeInSeconds)
            this.timeInSeconds = 0
		}
	}
})
</script>