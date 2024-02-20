<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    data: {
        type: [String, Array],
        required: true
    },
    error: Boolean
})
const classes = props.error ? 'bg-red-600 ' : 'bg-green-600'
</script>

<template>
    <p class="w-full h-auto rounded-md text-white flex flex-col gap-3 justify-center items-center p-3" :class="classes"
        v-if="!Array.isArray(props.data)">
        {{ data }}
    </p>
    <ul class="w-full h-auto rounded-md text-white flex flex-col gap-3 justify-center items-center p-3" :class="classes"
        v-if="Array.isArray(data)">
        <li key={index} v-for="item of data">• {{ item }}</li>
    </ul>
</template>