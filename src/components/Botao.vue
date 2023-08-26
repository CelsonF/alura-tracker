<template>
        <button class="button" :disabled="disabledTimer">
            <span class="icon">
                <i :class="icon"></i>
            </span>
            <span>{{ desciption }}</span>
        </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'button-control-timer',
    emits:['clicked'],
    props:{
        disabledTimer:{
            type:Boolean,
        },
        icon:{
            type:String,
            required:true
        },
        desciption:{
            type:String,
            required:true
        }
    },
    methods:{
        clicked() : void {
            this.$emit('clicked')
        }
    }
});
</script>

