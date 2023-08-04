<template>
    <section class="flex w-full h-screen justify-center items-center text-white">
            <form @submit.prevent="onSubmit" class="flex flex-col bg-[#262d3b] w-full items-center m-5 md:w-2/4 2xl:w-1/4 pb-10 rounded-md shadow-md">
                <div class="bg-[#323b4e] h-12 w-full rounded-t-md px-5 flex justify-between items-center font-semibold">
                    <h5>HESAP OLUSTURMA</h5>
                    <router-link to="/giris" class="text-2xl">+</router-link>
                </div>
                <div class="flex flex-col items-center w-full">
                    <input v-model.trim="state.username" class="bg-[#202632] focus:outline-none w-[80%] mt-10 lg:mt-20 py-2 px-3 focus:bg-[#1d222d]" placeholder="Kullanıcı Adınızı Giriniz." type="text">
                    <input v-model.trim="state.password" class="bg-[#202632] focus:outline-none w-[80%] mt-5 py-2 px-3 focus:bg-[#1d222d]" placeholder="Parola Giriniz." type="password">
                    <input v-model.trim="state.rePassword" class="bg-[#202632] focus:outline-none w-[80%] mt-5 py-2 px-3 focus:bg-[#1d222d]" placeholder="Lütfen Parolanızı Tekrar Giriniz." type="password">
                </div>
                <small v-if="!state._isValid" class="w-[80%] mt-3 font-semibold text-red-600">Kullanıcı adı alanı boş bırakılmamalı ve şifreler birbiriyle eşleşmelidir!</small>
                <small v-if="existUser" class="w-[80%] mt-3 font-semibold text-red-600">Bu kullanıcı adı kullanılmaktadır.</small>
                <button class="bg-[#d9e8c3] focus:ring-1 ring-green-300 py-2 px-4 lg:w-2/4 rounded flex justify-center space-x-1 hover:bg-[#b2d186] text-[#3d6208] transition-all mt-10 items-center">
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621-612l43-43 176 176-174 174Z"/></svg>
                    <span>Kayıt İşlemini Tamamla</span>
                </button>
        </form>
    </section>
</template>

<script setup>
import { reactive, getCurrentInstance, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const axios = getCurrentInstance().appContext.config.globalProperties.$axios;
const state = reactive({
    username: '',
    password: '',
    rePassword: '',
    _isValid: true
});

const existUser = ref(false);

const onSubmit = () => {
    state._isValid = true;
    existUser.value = false;
    if((state.username == '') || (state.password !== state.rePassword) || (state.password == ''))
        return state._isValid = false
    axios.post('/auth/register', { ... state })
        .then(response => {
            if(response.status == 200) return existUser.value = true;
            else if(response.status == 201) return router.push('/giris')})
        .catch(err => console.log(err))
}

</script>