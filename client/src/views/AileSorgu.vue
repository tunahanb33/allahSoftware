<template>
    <div class="text-white">
        <section class="w-full p-[35px] xl:mx-[190px]">
            <!--INPUT SECTION-->
            <div>
                <h2 class="text-[24px] lg:text-[30px] font-bold text-[#e4e6e7]">Aile Sorgu</h2>
                <form @submit.prevent="onSubmit">
                    <!--Main Div-->
                    <div class="font-semibold">
                        <div class="flex mt-5 font-semibold">
                            <span :class="state._isValid ? 'border-[#364054]' : 'border-red-600'" class="border-r-0 border  px-[.75rem] py-[.375rem] rounded">TC</span>
                            <input :class="state._isValid ? 'border-[#364054]' : 'border-red-600'" @blur="checkInput" v-model="state.tc" class="bg-[#1d222d] border w-[80%] lg:w-[40%] px-2 focus:outline-none" type="text" name="tc">
                        </div>
                        <div class="mt-5">
                            <button class="font-bold hover:cursor-pointer px-5 rounded py-2 bg-[#30394b] hover:bg-[#1c212b] focus:bg-[#30394b] duration-300 text-white focus:drop-shadow-lg">Sorgula</button>
                        </div>
                        <p v-if="!state._isValid" class="text-red-600">TC Alanı Boş Bırakılamaz ve 11 Karakterden Oluşmalıdır.</p>
                    </div>
                </form>
            </div>
            <!--RESULT SECTION-->
            <div v-if="_isSubmit" class="mt-10 overflow-auto">
                <table class="text-left w-full p-10 table-auto">
                        <thead class="">
                            <tr class="w-full">
                                <th class="border border-[#1a1f28] px-3 py-2 lg:px-5 border-r-0">YAKINLIK DURUMU</th>
                                <th class="border border-[#1a1f28] px-3 py-2 lg:px-5 border-r-0">TC</th>
                                <th class="border border-[#1a1f28] px-3 py-2 lg:px-5 border-r-0">AD SOYAD</th>
                                <th class="border border-[#1a1f28] px-3 py-2 lg:px-5 border-r-0">DOGUM TARIHI</th>
                                <th class="border border-[#1a1f28] py-2 px-5 col-span-2">İL / İLÇE</th>
                            </tr>
                        </thead>
                        <tbody class="text-[#f8f9f9]">
                                <tr v-for="result in results" :key="result.TC" class="odd:bg-[#232936] text-[#f8f9f9] text-lg font-medium">
                                    <td class="border border-[#364054] px-3 py-2 lg:px-5 border-r-0">{{ result.Yakinlik }}</td>
                                    <td class="border border-[#364054] px-3 py-2 lg:px-5 border-r-0">{{ result.TC }}</td>
                                    <td class="border border-[#364054] px-3 py-2 lg:px-5 border-r-0">{{ result.ADI + ' ' + result.SOYADI }}</td>
                                    <td class="border border-[#364054] px-3 py-2 lg:px-5 border-r-0">{{ result.DOGUMTARIHI }}</td>
                                    <td class="border border-[#364054] py-2 px-5 col-span-2">{{ result.NUFUSIL + ' / ' + result.NUFUSILCE }}</td>
                                </tr>
                        </tbody>
                    </table>
            </div>
        </section>
        <!--LOADING-->
        <Loading v-if="isLoading" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import request from '../utils/request';
const isLoading = ref(false);
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

const onSubmit = async () => {
    if(!state.value._isValid) return
    const res = await request('/aile', { tc: state.value.tc }, {isLoading, _isSubmit});
    results.value = res;
};
</script>