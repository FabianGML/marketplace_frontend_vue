<script setup>
import { useCheckActiveSession } from '../composables/useCheckActiveSession'
import defaultImg from '../assets/default.jpg'
import Header from '../components/header/Header.vue'
import Main from '../components/Main.vue'
import Category from '../components/Category.vue'
import Product from '../components/Product.vue'
import BlackScreen from '../components/BlackScreen.vue'
useCheckActiveSession()

</script>

<template>
    <BlackScreen />
    <Header />
    <Main class='flex-col items-center'>
        <section class=' md2:pl-0'>
            <div class='categories_container flex gap-7 overflow-x-scroll max-w-[20rem] py-2 mb-5
                md2:max-w-2xl md2:gap-10 xl:'>
                <Category :img="defaultImg" name='Casa' />
                <Category :img="defaultImg" name='Flores' />
                <Category :img="defaultImg" name='Cocina' />
                <Category :img="defaultImg" name='Comida' />
                <Category :img="defaultImg" name='Muebles' />
                <Category :img="defaultImg" name='Cocina' />
                <Category :img="defaultImg" name='Cocina' />
                <Category :img="defaultImg" name='Cocina' />
                <Category :img="defaultImg" name='Cocina' />
                <Category :img="defaultImg" name='Cocina' />
                <Category :img="defaultImg" name='Cocina' />
                <Category :img="defaultImg" name='Cocina' />
                <Category :img="defaultImg" name='Cocina' />
                <Category :img="defaultImg" name='Cocina' />
                <Category :img="defaultImg" name='Cocina' />
                <Category :img="defaultImg" name='Cocina' />
                <Category :img="defaultImg" name='Cocina' />
                <Category :img="defaultImg" name='Cocina' />
            </div>
        </section>
        <div class='products_container'>
            <Product :image="defaultImg" name='Learning new things  exploring the unknown  and' location='Durango, Dgo'
                price='220' />
            <Product :image="defaultImg" name='Learning new things  exploring the unknown  and' location='Durango, Dgo'
                price='220' />
            <Product :image="defaultImg" name='Learning new things  exploring the unknown  and' location='Durango, Dgo'
                price='220' />
            <Product :image="defaultImg" name='Learning new things  exploring the unknown  and' location='Durango, Dgo'
                price='220' />
            <Product :image="defaultImg" name='Learning new things  exploring the unknown  and' location='Durango, Dgo'
                price='220' />
            <Product :image="defaultImg" name='Learning new things  exploring the unknown  and' location='Durango, Dgo'
                price='220' />
            <Product :image="defaultImg" name='Learning new things  exploring the unknown  and' location='Durango, Dgo'
                price='220' />
            <Product :image="defaultImg" name='Learning new things  exploring the unknown  and' location='Durango, Dgo'
                price='220' />
            <Product :image="defaultImg" name='Learning new things  exploring the unknown  and' location='Durango, Dgo'
                price='220' />
            <Product :image="defaultImg" name='Learning new things  exploring the unknown  and' location='Durango, Dgo'
                price='220' />
        </div>
    </Main>
</template>