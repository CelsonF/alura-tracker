<template>
    <div class="box has-text-weight-bold ">
        <div class="columns">
            <div class="column is-7">
                Descrição da tarefa
            </div>
            <div class="column">
                <Chronometer :time-in-seconds="15" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Chronometer from './Chronometer.vue'

import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        Chronometer
    },
    name: 'task-rows'
});
</script>

<style scoped>
.box { 
    background-color: #FAF0CA;
}
</style>