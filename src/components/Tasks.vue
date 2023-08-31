<template>
    <Box>
        <div class="columns">
            <div class="column is-7">
            {{task.description || 'Task without description'}}
            </div>
            <div class="column">
                <Chronometer :time-in-seconds="task.descriptionInSeconds" />
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
import ITasks from '@/Interfaces/ITasks';
import Chronometer from './Chronometer.vue'
import Box from './Box.vue'

import { defineComponent,PropType } from 'vue';
export default defineComponent({
    components: {
        Chronometer,
        Box
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
