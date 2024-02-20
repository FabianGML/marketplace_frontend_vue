<script setup>
import arrow from '../../assets/arrow.png'
defineProps({
    image: String,
    username: String,
    toggleProfileMenu: Function
})

</script>

<template>
    <div class='flex items-center gap-2 ml-3 md2:cursor-pointer md2:gap-5' @click="toggleProfileMenu">
        <img :src="image" :alt="username" class='rounded-full w-12 h-12 object-cover' />
        <span class='italic lg:text-lg text-black dark:text-white'>{{ username }}</span>
        <img :src="arrow" class='h-3 alig dark:filter dark:invert' />
    </div>
</template>