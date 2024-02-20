<script setup>
import { ref } from 'vue'

const value = defineModel()

defineProps({
    labelText: String,
    name: String,
    type: String,
    placeholder: String,
    required: Boolean,
    autoFocus: Boolean
})
</script>

<template>
    <div class="w-full">
        <input v-model="value" :placeholder="placeholder" :type="type"
            class="h-12 w-full border border-slate-300 rounded-lg px-3 mt-1 outline-slate-400" :required="required"
            :autofocus="autoFocus" />
    </div>
</template>