<script setup>
import blackHeart from '../assets/black-heart.png'
import fullHeart from '../assets/full-heart.png'
import { formatTitle } from '../utils/formatHandler'
import { inject, ref } from 'vue'
import axios from 'axios'
const { name } = defineProps({
    id: String,
    name: String,
    location: String,
    price: String,
    image: String
})
const isSessionActive = inject('isSessionActive')
const URL = import.meta.env.API_URL
const isFavorite = ref(false)

/**
 * This function will be executed every time the user clicks on the heart icon
 * and will add or remove the product from the user's favorites.
 */

const setIsFavorite = () => {
    if (!isSessionActive) return // we should redirect the user to login page and return it with the favorite product
    const userId = window.localStorage.getItem('userId')
    axios.post(`${URL}/products/add-favorite`,
        { userId, productId: id }
    )
    isFavorite.value = !isFavorite.value
}
const title = formatTitle(name)
</script>
<template>
    <div class='h-72 relative flex flex-col border-2 border-gray-400 rounded-sm overflow-hidden'>
        <img v-show="!isFavorite" :src="blackHeart" @click="setIsFavorite"
            class='absolute w-6 z-10 right-2 top-2 cursor-pointer' />
        <img v-show="isFavorite" :src="fullHeart" @click="setIsFavorite"
            class='absolute w-6 z-10 right-2 top-2 cursor-pointer' />
        <div class='overflow-hidden'>
            <img :src="image" :alt="name"
                class='object-cover border-r-2 border-gray-300 transition-transform transform hover:scale-125' />
        </div>
        <div class='w-full flex flex-col gap-1 px-3 py-1 dark:text-white'>
            <span class=''>{{ location }}</span>
            <span class='font-bold text-md'>{{ title }}</span>
            <span class='text-sm'>$<span class='font-extrabold text-2xl font-mono'>{{ price }}</span></span>
        </div>
    </div>
</template>