<script setup>
import Header from '../components/header/Header.vue'
import { useCheckActiveSession } from '../composables/useCheckActiveSession'
import Main from '../components/Main.vue'
useCheckActiveSession({ redirectTo: '/login' })

</script>

<template>
    <Header />
    <Main class='p-4 flex-col gap-10 md2:pt-12'>
        <span>Profile</span>
    </Main>
</template>

<style>
span {
    font-size: 1.5rem;
    font-weight: 500;
    color: #000
}

@media (prefers-color-scheme: dark) {
    span {
        color: white;
    }
}
</style>