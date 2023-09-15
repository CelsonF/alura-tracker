<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Chronometer :time-in-seconds="timeInSeconds" />
        <ButtonControl @clicked="initCount()" icon="fas fa-play" desciption="Play" :disabled-timer="runningChronometer"/>
        <ButtonControl @clicked="finallyCount()" icon="fas fa-stop" desciption="Stop" :disabled-timer="!runningChronometer"/>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import Chronometer from './Chronometer.vue'
import ButtonControl from './ButtonControl.vue'

export default defineComponent({
	name:"timer-bar",
    emits: ['finished-timer'],
    components:{
        Chronometer,
        ButtonControl
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
            this.$emit('finished-timer', this.timeInSeconds)
            this.timeInSeconds = 0
		}
	}
})
</script>
