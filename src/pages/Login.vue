<script setup>
import Input from '../components/formComponents/Input.vue'
import Form from '../components/formComponents/Form.vue'
import { computed, ref } from 'vue'
import { useCheckActiveSession } from '../composables/useCheckActiveSession'

useCheckActiveSession('/')

const email = ref('')
const password = ref('')

const inputsData = computed(() => {
    return {
        email: email.value,
        password: password.value
    }
})
</script>

<template>
    <Form link="/signup" linkText="Ó Registrate" sendButtonText="Inicia Sesión" urlHash="/auth/login"
        :inputs-data="inputsData">
        <Input labelText='Correo Electronico:' name='email' placeholder='Coloca tu correo' v-model="email" type="email"
            required auto-focus />
        <Input labelText='Contraseña:' name='password' placeholder='Coloca tu contraseña' v-model="password" type="password"
            required />
    </Form>
</template>