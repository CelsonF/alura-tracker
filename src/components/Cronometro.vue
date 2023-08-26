<template>
    <section>
        <strong>
            {{ timePast }}
        </strong>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'stopwatch-bar',
    props: {
        timeInSeconds: {
            type: Number,
            default: 0
        }
    },
    computed: {
		timePast() : string {
			return new Date(this.timeInSeconds * 1000).toISOString().substring(11,19)
		}
	}
});

</script>