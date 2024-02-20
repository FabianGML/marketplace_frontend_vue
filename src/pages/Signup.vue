<script setup>
import Input from '../components/formComponents/Input.vue'
import Form from '../components/formComponents/Form.vue'
import { computed, ref } from 'vue'

const username = ref('')
const email = ref('')
const name = ref('')
const lastname = ref('')
const password = ref('')
const repeatPassword = ref('')

const inputsData = computed(() => {
    return {
        username: username.value,
        email: email.value,
        name: name.value,
        lastname: lastname.value,
        password: password.value,
        repeatPassword: repeatPassword.value
    }
})


</script>

<template>
    <Form link="/login" linkText="Ó Inicia Sesión" sendButtonText="Registrate" urlHash="/users" :inputs-data="inputsData">
        <Input name='username' v-model="username" placeholder='Nombre de Usuario' label-text='Nombre de usuario:'
            type='text' required />
        <Input name='email' v-model="email" placeholder='Correo Electronico' label-text="Correo Electronico:" type='email'
            required autoFocus />
        <Input name='name' v-model="name" placeholder='Nombre' label-text="Nombre:" type='text' required />
        <Input name='lastname' v-model="lastname" placeholder='Apllido' label-text="Apellido:" type='text' required />
        <Input name='password' v-model="password" placeholder='Contraseña' label-text="Contraseña:" type='password'
            required />
        <Input name='repeatPassword' v-model="repeatPassword" placeholder='Repite la Contraseña'
            label-text="Repite la Contraseña:" type='password' required />
    </Form>
</template>