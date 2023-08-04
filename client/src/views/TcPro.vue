<template>
    <div class="text-white">
        <section class="w-full p-[35px] xl:mx-[190px]">
            <!--INPUT SECTION-->
            <div>
                <h2 class="text-[24px] lg:text-[30px] font-bold text-[#e4e6e7]">TC Sorgu PRO</h2>
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
                <table class="text-left w-full p-10">
                        <tbody>
                                <tr class="grid grid-cols-2 text-[#f8f9f9] text-lg font-medium">
                                    <td class="border border-[#364054] py-2 px-5 col-span-1 border-r-0">TC:</td>
                                    <td class="border border-[#364054] py-2 px-5 col-span-1">{{ result.TC }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">Ad:</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.AD }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">Soyad:</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.SOYAD }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">GSM:</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.GSM }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">Baba Adı:</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.BABAADI }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">Baba TC:</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.BABATC }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">Anne Adı:</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.ANNEADI }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">Anne TC:</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.ANNETC }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">Doğum Tarihi:</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.DOGUMTARIHI }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">Ölüm Tarihi:</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.OLUMTARIHI }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">Memleket İl</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.MEMLEKETIL }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">Memleket İlçe:</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.MEMLEKETILCE }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">Memleket Köy:</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.MEMLEKETKOY }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">Aile Sıra No:</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.AILESIRANO }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">Birey Sıra No:</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.BIREYSIRANO }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">Medeni Hâl:</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.MEDENIHAL }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">Cinsiyet</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.CINSIYET }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">2015 Adres:</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.YSK15 ?? 'BULUNAMADI' }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">2022 Adres:</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.GOV22 }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">Numaralar:</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.Numaralar }}</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1 border-r-0">Burcu:</td>
                                    <td class="border border-[#364054] border-t-0 py-2 px-5 col-span-1">{{ result.burclar }}</td>
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
const result = ref(null);
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
    axios(`/pro/?module=tc_sorgu&tc=${state.value.tc}`).then(res => {
        _isSubmit.value = true;
        result.value = res.data.data;
    })
};
</script>