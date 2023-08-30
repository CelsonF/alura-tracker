<template>
    <div class="box has-text-weight-bold ">
        <div class="columns">
            <div class="column is-7">
            {{task.description}}
            </div>
            <div class="column">
                <Chronometer :time-in-seconds="task.descriptionInSeconds" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import ITasks from '@/Interfaces/ITasks';
import Chronometer from './Chronometer.vue'

import { defineComponent,PropType } from 'vue';
export default defineComponent({
    components: {
        Chronometer
    },
    name: 'task-rows',
    props: {
        task: {
            type:Object as PropType<ITasks>,
            required:true
        }
    }
});
</script>

<style scoped>
.box { 
    background-color: #FAF0CA;
}
</style>