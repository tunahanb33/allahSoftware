<template>
    <section class="flex w-full h-screen justify-center items-center text-white">
            <form @submit.prevent="onSubmit" class="flex flex-col bg-[#262d3b] w-full items-center m-5 md:w-2/4 2xl:w-1/4 rounded-md shadow-md pb-10">
            <div class="bg-[#323b4e] h-12 w-full rounded-t-md px-5 flex justify-between items-center font-semibold">
                <h5>GİRİS YAP</h5>
                <router-link to="/kayit" class="text-2xl">+</router-link>
            </div>
                <div class="flex flex-col items-center w-full">
                    <input v-model.trim="state.username" class="bg-[#202632] focus:outline-none w-[80%] mt-10 lg:mt-20 py-2 px-3 focus:bg-[#1d222d]" placeholder="Kullanıcı Adı" type="text">
                    <input v-model.trim="state.password" class="bg-[#202632] focus:outline-none w-[80%] mt-5 py-2 px-3 focus:bg-[#1d222d]" placeholder="Parola" type="password">
                </div>
                <small v-if="!state._isValid" class="w-[80%] mt-3 font-semibold text-red-600">Kullanıcı adı ve şifre alanı boş bırakılamaz!</small>
                <small v-if="incorrectInput" class="w-[80%] mt-3 font-semibold text-red-600">{{ incorrectInput }}</small>
                <button class="bg-[#c2e4f3] focus:ring-1 ring-blue-300 py-2 px-4 lg:w-2/4 rounded flex justify-center space-x-1 hover:bg-[#86c8e7] text-[#07577c] transition-all mt-10 items-center">
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621-612l43-43 176 176-174 174Z"/></svg>
                <span>Giris Yap</span>
            </button>
        </form>
    </section>
</template>

<script setup>
import { reactive, getCurrentInstance, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore();
const router = useRouter();
const axios = getCurrentInstance().appContext.config.globalProperties.$axios;
const state = reactive({
    username: '',
    password: '',
    _isValid: true
});

const incorrectInput = ref('');

const onSubmit = () => {
    state._isValid = true;
    incorrectInput.value = false;
    if((state.username == '') || (state.password == ''))
        return state._isValid = false
    axios.post('/auth/login', { ... state })
        .then(response => {
            if(!response.data.success) return incorrectInput.value = response.data.message;
            const token = response.data.data.token;
            const { username } = response.data.data;
            window.localStorage.setItem('token', token);
            store.commit('setUser', { username })
            router.go(0);
            })
        .catch(err => console.log(err))
}

</script>