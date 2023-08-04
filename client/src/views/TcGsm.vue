<template>
    <div class="text-white">
        <section class="w-full p-[35px]">
            <!--INPUT SECTION-->
            <div>
                <h2 class="text-[24px] lg:text-[30px] font-bold text-[#e4e6e7]">TC Gsm Sorgu</h2>
                <form @submit.prevent="onSubmit">
                    <!--Main Div-->
                    <div class="font-semibold">
                        <div class="flex mt-5 font-semibold">
                            <span :class="state._isValid ? 'border-[#364054]' : 'border-red-600'" class="border-r-0 border  px-[.75rem] py-[.375rem] rounded">TC</span>
                            <input :class="state._isValid ? 'border-[#364054]' : 'border-red-600'" @blur="checkInput" v-model="state.tc" class="bg-[#1d222d] border w-[80%] lg:w-[40%] px-2 focus:outline-none" type="text" name="tc">
                        </div>
                        <div v-if="!_isSubmit" class="mt-5 bg-[#a51d1d] flex p-[15px] text-white rounded">
                            <span>Sorgula butonuna bastıktan sonra sonuç gelmezse SONUÇ BULUNAMADI DEMEKTİR!</span>
                        </div>
                        <div class="mt-5">
                            <button class="font-bold hover:cursor-pointer px-5 rounded py-2 bg-[#30394b] hover:bg-[#1c212b] focus:bg-[#30394b] duration-300 text-white focus:drop-shadow-lg">Sorgula</button>
                        </div>
                        <p v-if="!state._isValid" class="text-red-600 mt-3">TC Alanı Boş Bırakılamaz ve 11 Karakterden Oluşmalıdır.</p>
                    </div>
                </form>
            </div>
            <!--RESULT SECTION-->
            <div v-if="_isSubmit" class="mt-10 overflow-auto">
                <table class="text-left w-full p-10">
                        <thead>
                            <tr class="w-full">
                                <th class="border border-[#1a1f28] py-2 px-5 border-r-0">TC</th>
                                <th class="border border-[#1a1f28] py-2 px-5">GSM</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="result in results" :key="result.GSM" class=" odd:bg-[#232936] text-[#f8f9f9] text-lg font-medium">
                                <td class="border border-[#364054] border-t-0 py-2 px-5 border-r-0">{{ result.TC }}</td>
                                <td class="border border-[#364054] border-t-0 py-2 px-5 border-r-0">{{ result.GSM }}</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref ,getCurrentInstance } from 'vue';
const axios = getCurrentInstance().appContext.config.globalProperties.$axios;
const _isSubmit = ref(false);
const results = ref(null);
const state = ref({
    tc: '',
    _isValid: true
});

const checkInput = () => {
    if(!state.value.tc || (state.value.tc.length != 11))
        state.value._isValid = false;
    else
        state.value._isValid = true;
}

const onSubmit = () => {
    if(!state.value._isValid) return
    axios.post('/gsm', { tc: state.value.tc }).then(res => {
        _isSubmit.value = true;
        results.value = res.data.response;
    })
};
</script>