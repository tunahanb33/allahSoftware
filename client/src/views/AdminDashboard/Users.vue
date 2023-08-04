<template>
    <div class="flex text-brand-text">
        <AppNavbar />
        <section class="p-[10px] md:p-[35px] w-full">
            <!--INPUT SECTION-->
            <div class="flex space-x-5">
                <button :class="activeState == 'allUsers' ? 'bg-gray-950' : 'bg-gray-900'" @click="getAllUsers" class="px-6 py-2 rounded hover:bg-opacity-70 duration-200 focus:ring-2 ring-gray-700">Tüm Kullanıcılar</button>
                <button :class="activeState == 'verifiedUsers' ? 'bg-gray-950' : 'bg-gray-900'" @click="getVerifiedUsers" class="px-6 py-2 bg-gray-900 rounded hover:bg-opacity-70 duration-200 focus:ring-2 ring-gray-700">Kayıtlı Kullanıcılar</button>
                <button :class="activeState == 'pendingUsers' ? 'bg-gray-950' : 'bg-gray-900'" @click="getPendingUsers" class="px-6 py-2 bg-gray-900 rounded hover:bg-opacity-70 duration-200 focus:ring-2 ring-gray-700">Onay Bekleyenler</button>
            </div>
            <!--RESULT SECTION-->
            <div v-if="_isSubmit" class="mt-10 overflow-auto">
                <table class="text-left w-full p-10 table-auto">
                    <thead class="uppercase">
                        <tr class="w-full">
                            <th class="border border-[#1a1f28] px-3 py-2 lg:px-5 border-r-0">No</th>
                            <th class="border border-[#1a1f28] px-3 py-2 lg:px-5 border-r-0">Kullanıcı Adı</th>
                            <th class="border border-[#1a1f28] px-3 py-2 lg:px-5 border-r-0">Şifre</th>
                            <th class="border border-[#1a1f28] px-3 py-2 lg:px-5 border-r-0">User Agent</th>
                            <th class="border border-[#1a1f28] px-3 py-2 lg:px-5 border-r-0">Hesap Durumu</th>
                            <th class="border border-[#1a1f28] px-3 py-2 lg:px-5 border-r-0">ByPass Değeri</th>
                            <th v-if="activeState != 'pendingUsers'" class="border border-[#1a1f28] px-3 py-2 lg:px-5 border-r-0">Son Giriş</th>
                            <th class="border border-[#1a1f28] px-3 py-2 lg:px-5">Onayla / Sil</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="odd:bg-[#232936] text-[#f8f9f9] text-lg" v-for="(result, i) in results" :key="result.username">
                            <td class="border border-[#364054] px-3 py-2 lg:px-5 border-r-0">{{ i+1 }}</td>
                            <td class="border border-[#364054] px-3 py-2 lg:px-5 border-r-0">{{ result.username}}</td>
                            <td class="border border-[#364054] px-3 py-2 lg:px-5 border-r-0">{{ result.password }}</td>
                            <td class="border border-[#364054] px-3 py-2 lg:px-5 border-r-0">{{ result.userAgent }}</td>
                            <td class="border border-[#364054] px-3 py-2 lg:px-5 border-r-0">{{ result.isVerified ? 'Onaylandı' : 'Onay Bekliyor' }}</td>
                            <td class="border border-[#364054] px-3 py-2 lg:px-5 border-r-0">{{ result.byPassVal }}</td>
                            <td v-if="activeState != 'pendingUsers'" class="border border-[#364054] px-3 py-2 lg:px-5 border-r-0">{{ result.logins[(result.logins).length - 1] ?? 'Henüz Giriş Yapılmadı' }}</td>
                            <td class="border border-[#364054] px-3 py-4 lg:px-6">
                                <button @click="toggleUser(result.username)" :class="[result.isVerified ? 'bg-red-600' : 'bg-green-600']" class="py-2 w-full rounded">{{ result.isVerified ? 'Sil':'Onayla' }}</button>
                            </td>
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
import AppNavbar from '../../components/AppNavbar.vue';
import { ref, getCurrentInstance } from 'vue';
const axios = getCurrentInstance().appContext.config.globalProperties.$axios;
const isLoading = ref(true);
const _isSubmit = ref(true);
const mainResults = ref(null);
const results = ref(null);
const activeState = ref('allUsers');
axios.get('/admin/users')
.then(res => {
        isLoading.value = false;
        mainResults.value = res.data;
        results.value = res.data;
    })
const getAllUsers = () => {
    results.value = mainResults.value;
    activeState.value = 'allUsers';
};
const getVerifiedUsers = () => {
    results.value = mainResults.value.filter(m => m.isVerified);
    activeState.value = 'verifiedUsers';
};
const getPendingUsers = () => {
    results.value = mainResults.value.filter(m => !m.isVerified);
    activeState.value = 'pendingUsers';
};

const toggleUser = (username) => {
    axios.get(`/admin/users/manage/${username}`)
        .then(res => {
            results.value = res.data.response;
            mainResults.value = res.data.response;
            activeState.value = 'allUsers';
        })
        .catch(err => console.log(err))
}

</script>