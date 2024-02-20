<script setup>
import { reactive } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import logo from '../../../public/voxaroo.png'
import LoadingSpinner from '../LoginSpinner.vue'
import SendInfoButton from '../formComponents/SendInfoButton.vue'
import Message from '../formComponents/Message.vue'
import { useSubmitSession } from '../../composables/useSubmitSession'

const requestState = reactive({
    isLoading: false,
    error: null
})
const router = useRouter()

const { urlHash } = defineProps({
    link: String,
    linkText: String,
    sendButtonText: String,
    urlHash: String,
    inputsData: Object
})

</script>

<template>
    <section class='bg-green-200 dark:bg-green-800 w-screen h-screen flex justify-center items-center'>
        <div class='w-3/4 py-10 flex flex-col gap-3 items-center bg-white shadow-2xl rounded-2xl max-w-lg'>
            <RouterLink to='/'>
                <img :src="logo" class='w-24 mx-auto' />
            </RouterLink>
            <form class='w-10/12 flex flex-col items-center gap-5'
                @submit.prevent="() => useSubmitSession(inputsData, urlHash, requestState, router)">
                <Message v-if="requestState.error" :data="requestState.error" error />
                <slot />
                <LoadingSpinner v-if="requestState.isLoading" />
                <SendInfoButton :text="sendButtonText" v-if="!requestState.isLoading" />
            </form>
            <RouterLink :to="link" class='underline underline-offset-2 text-slate-600 hover:text-black'>
                {{ linkText }}
            </RouterLink>
        </div>
    </section>
</template>