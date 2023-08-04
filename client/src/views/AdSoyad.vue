<template>
    <div class="text-white">
        <section class="p-[10px] md:p-[35px] w-full">
            <!--INPUT SECTION-->
            <div>
                <h2 class="text-[24px] lg:text-[30px] font-bold text-[#e4e6e7]">Ad Soyad Sorgu</h2>
                <form @submit.prevent="onSubmit">
                    <!--Main Div-->
                    <div class="font-semibold">
                        <div class="mt-5 font-semibold lg:flex">
                        <div class="flex w-full">
                            <span class="border-r-0 border border-[#364054] px-[.75rem] py-[.375rem] rounded">Adı</span>
                            <input v-model.trim="state.ad" class="bg-[#1d222d] border border-[#364054] w-[75%] lg:w-[15%] px-2 focus:outline-none" type="text">
                            <span class="border-r-0 border border-[#364054] px-[.75rem] py-[.375rem] rounded">Soyadı</span>
                            <input v-model.trim="state.soyad" class="bg-[#1d222d] border border-[#364054] w-[70%] lg:w-[15%] px-2 focus:outline-none" type="text">
                        </div>
                        </div>
                        <div class="lg:flex mt-5 font-semibold">
                            <div class="flex w-full">
                                <span class="border-r-0 border border-[#364054] px-[.75rem] py-[.375rem] rounded">İl</span>
                                <input v-model.trim="state.il" class="bg-[#1d222d] border border-[#364054] w-[75%] lg:w-[15%] px-2 focus:outline-none" type="text">
                                <span class="border-r-0 border border-[#364054] px-[.75rem] py-[.375rem] rounded">İlçe</span>
                                <input v-model.trim="state.ilce" class="bg-[#1d222d] border border-[#364054] w-[68%] lg:w-[15%] px-2 focus:outline-none" type="text">
                            </div>
                            </div>
                        <div class="mt-10">
                            <button class="font-bold hover:cursor-pointer focus:ring-4 px-5 rounded py-2 bg-[#30394b] hover:bg-[#1c212b] focus:bg-[#30394b] duration-300 text-white focus:drop-shadow-lg">Sorgula</button>
                        </div>
                        </div>
                </form>
            </div>
            <!--RESULT SECTION-->
            <div v-if="_isSubmit" class="mt-10 overflow-auto">
                <table class="text-left w-full p-10 table-auto">
                    <thead class="uppercase">
                        <tr class="w-full">
                            <th class="border border-[#1a1f28] px-3 py-2 lg:px-5 border-r-0">Tc</th>
                            <th class="border border-[#1a1f28] px-3 py-2 lg:px-5 border-r-0">Ad Soyad</th>
                            <th class="border border-[#1a1f28] px-3 py-2 lg:px-5 border-r-0">Doğum Tarihi</th>
                            <th class="border border-[#1a1f28] px-3 py-2 lg:px-5 border-r-0">Anne Adı</th>
                            <th class="border border-[#1a1f28] px-3 py-2 lg:px-5 border-r-0">Anne TC</th>
                            <th class="border border-[#1a1f28] px-3 py-2 lg:px-5">Baba Adı</th>
                            <th class="border border-[#1a1f28] px-3 py-2 lg:px-5">Baba TC</th>
                            <th class="border border-[#1a1f28] px-3 py-2 lg:px-5">İl / İlçe</th>
                            <th class="border border-[#1a1f28] px-3 py-2 lg:px-5">Uyruk</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="odd:bg-[#232936] text-[#f8f9f9] text-lg" v-for="result in results" :key="result.TC">
                            <td class="border border-[#364054] px-3 py-2 lg:px-5 border-r-0">{{ result.TC }}</td>
                            <td class="border border-[#364054] px-3 py-2 lg:px-5 border-r-0">{{ result.ADI + ' ' + result.SOYADI}}</td>
                            <td class="border border-[#364054] px-3 py-2 lg:px-5 border-r-0">{{ result.DOGUMTARIHI }}</td>
                            <td class="border border-[#364054] px-3 py-2 lg:px-5 border-r-0">{{ result.ANNEADI }}</td>
                            <td class="border border-[#364054] px-3 py-2 lg:px-5 border-r-0">{{ result.ANNETC }}</td>
                            <td class="border border-[#364054] px-3 py-2 lg:px-5 border-r-0">{{ result.BABAADI }}</td>
                            <td class="border border-[#364054] px-3 py-2 lg:px-5 border-r-0">{{ result.BABATC }}</td>
                            <td class="border border-[#364054] px-3 py-2 lg:px-5 border-r-0">{{ result.NUFUSIL ? result.NUFUSIL + ' / ' + result.NUFUSILCE : 'BULUNAMADI' }}</td>
                            <td class="border border-[#364054] px-3 py-2 lg:px-5">{{ result.UYRUK ?? 'Bulunamadı' }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
            <!-- LOADING -->
        <Loading v-if="isLoading" />
    </div>
</template>

<script setup>
import request from '../utils/request';
import { reactive, ref } from 'vue';
const isLoading = ref(false);
const _isSubmit = ref(false);
const results = ref(null);
const state = reactive({
    ad: null,
    soyad: null,
    il: null,
    ilce: null
});

const onSubmit = async () => {
    const res = await request('/adsoyad', { ... state }, {isLoading, _isSubmit});
    results.value = res;
};

</script>