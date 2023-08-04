<template>
    <section>
        <nav :class="[showNav ? '' : '-translate-x-full']" class="w-60 fixed lg:relative min-h-screen z-50 bg-[#262d3b] text-brand-text text-[0.95rem] lg:translate-x-0 transition-transform">
            <div class="flex flex-col">
                <h6 class="uppercase text-center my-5 font-medium">Sorgu Sistemi</h6>
                <!--ITEM1-->
                <div @click="changeState('hukuk')" class="font-medium">
                    <base-button>
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 -960 960 960" width="14"><path d="M140-80q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h250v-140q0-24 18-42t42-18h60q24 0 42 18t18 42v140h250q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm92-167h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5T265-312q-15 5-24 19t-9 32v14Zm336-67h170v-50H568v50Zm-214-50q23 0 38.5-15.5T408-418q0-23-15.5-38.5T354-472q-23 0-38.5 15.5T300-418q0 23 15.5 38.5T354-364Zm214-63h170v-50H568v50ZM450-590h60v-230h-60v230Z"/></svg>
                    <span>Hukuk</span>
                    </base-button>
                    <div v-if="state.hukuk" class="flex flex-col pl-[46px] text-[.8125rem] bg-[rgb(0,0,0,.15)]">
                        <BaseLink title="Avukat Sorgu" />
                        <BaseLink title="Sabıka Sorgu" />
                    </div>
                </div>
                <!--ITEM2-->
                <div @click="changeState('vesika')" class="font-medium">
                    <base-button>
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 -960 960 960" width="14"><path d="M479.5-266q72.5 0 121.5-49t49-121.5q0-72.5-49-121T479.5-606q-72.5 0-121 48.5t-48.5 121q0 72.5 48.5 121.5t121 49Zm0-60q-47.5 0-78.5-31.5t-31-79q0-47.5 31-78.5t78.5-31q47.5 0 79 31t31.5 78.5q0 47.5-31.5 79t-79 31.5ZM140-120q-24 0-42-18t-18-42v-513q0-23 18-41.5t42-18.5h147l73-87h240l73 87h147q23 0 41.5 18.5T880-693v513q0 24-18.5 42T820-120H140Zm680-60v-513H645l-73-87H388l-73 87H140v513h680ZM480-436Z"/></svg>
                    <span>Vesikalar</span>
                    </base-button>
                    <div v-if="state.vesika" class="flex flex-col pl-[46px] text-[.8125rem] bg-[rgb(0,0,0,.15)]">
                        <BaseLink @click="showNav = false"  title="Aile Vesika" />
                        <BaseLink @click="showNav = false"  title="Ehliyet Vesika" />
                        <BaseLink @click="showNav = false"  title="A.O.L. Vesika" />
                        <BaseLink @click="showNav = false"  title="E-Okul Vesika" />
                        <BaseLink @click="showNav = false"  title="Ortaokul Vesika" />
                    </div>
                </div>
                <!--ITEM3-->
                <div @click="changeState('egitim')" class="font-medium">
                    <base-button>
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 -960 960 960" width="14"><path d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z"/></svg>
                    <span>Eğitim</span>
                    </base-button>
                    <div v-if="state.egitim" class="flex flex-col pl-[46px] text-[.8125rem] bg-[rgb(0,0,0,.15)]">
                        <BaseLink @click="showNav = false"  title="Üniversite Sorgu" />
                        <BaseLink @click="showNav = false"  title="Okul No Sorgu" />
                        <BaseLink @click="showNav = false"  title="Diploma Sorgu" />
                        <BaseLink @click="showNav = false"  title="Mezuniyet Sorgu" />
                        <BaseLink @click="showNav = false"  title="Sınıf Sorgu" />
                        <BaseLink @click="showNav = false"  title="Ortaokul No Sorgu" />
                    </div>
                </div>
                <!--ITEM4-->
                <div @click="changeState('adsoyad')" class="font-medium">
                    <base-button>
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 -960 960 960" width="14"><path d="M140-80q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h250v-140q0-24 18-42t42.411-18h59.178Q534-880 552-862t18 42v140h250q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm0-60h680v-480H570v30q0 28-18 44t-42.411 16h-59.178Q426-530 408-546t-18-44v-30H140v480Zm92-107h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5T265-312q-15 5-24 19t-9 32v14Zm336-67h170v-50H568v50Zm-214-50q22.5 0 38.25-15.75T408-418q0-22.5-15.75-38.25T354-472q-22.5 0-38.25 15.75T300-418q0 22.5 15.75 38.25T354-364Zm214-63h170v-50H568v50ZM450-590h60v-230h-60v230Zm30 210Z"/></svg>
                    <span>Ad Soyad Sorgu</span>
                    </base-button>
                    <div v-if="state.adsoyad" class="flex flex-col pl-[46px] text-[.8125rem] bg-[rgb(0,0,0,.15)]">
                        <BaseLink @click="showNav = false"  to="/adsoyad-sorgu" title="Ad Soyad" />
                        <BaseLink @click="showNav = false"  to="/adsoyad-sorgu" title="Ad Soyad V2" />
                    </div>
                </div>
                <!--ITEM5-->
                <div @click="changeState('mernis2023')" class="font-medium">
                    <base-button>
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 -960 960 960" width="14"><path d="M480-480Zm0 360q-18 0-34.5-6.5T416-146L148-415q-35-35-51.5-80T80-589q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880-590q0 49-17 94t-51 80L543-146q-13 13-29 19.5t-34 6.5Zm40.292-510Q528-630 534-626t11 10l71 106h188.133q7.934-19.429 11.9-39.429Q820-569.429 820-590q0-77-49.946-133.5T645.189-780Q610-780 577.5-765.5 545-751 521-725l-27 29q-3 3-6 5t-8 2q-5 0-8.636-1.885-3.637-1.884-6.364-5.115l-27-29q-24.273-25.816-56.636-40.408Q349-780 314-780q-74.571 0-124.286 56.441Q140-667.118 140-590q0 20.717 4 40.859Q148-529 155.649-510H360q7.576 0 14.394 3.611Q381.212-502.778 385-497l46 70 60-182q3.083-9 11.177-15t18.115-6ZM529-533l-61 182q-2.974 9-11.154 15-8.179 6-17.846 6-8 0-14-4t-10-10l-71-106H198l261 261q5 5 9.8 7 4.8 2 11.2 2 6.4 0 11.2-2 4.8-2 9.8-7l260-261H600q-8 0-14-4t-11-10l-46-69Z"/></svg>
                    <span>Mernis 2023</span>
                </base-button>
                <div v-if="state.mernis2023" class="flex flex-col pl-[46px] text-[.8125rem] bg-[rgb(0,0,0,.15)]">
                    <BaseLink @click="showNav = false"  title="Allah Sorgu" />
                    <BaseLink @click="showNav = false"  title="-18 Vesika" />
                    <BaseLink @click="showNav = false" to="tc-sorgu" title="TC" />
                    <BaseLink @click="showNav = false"  title="Ölüm Tarihi Sorgu" />
                    <BaseLink @click="showNav = false"  to="/aile-sorgu" title="Aile" />
                    <BaseLink @click="showNav = false"  to="/aile-sorgu" title="Aile Pro" />
                    <BaseLink @click="showNav = false"  title="Adres" />
                    <BaseLink @click="showNav = false"  title="Vergi Dairesi" />
                    <BaseLink @click="showNav = false"  title="Anne Baba" />
                </div>
            </div>
            <!--ITEM6-->
            <div @click="changeState('tip')" class="font-medium">
                <base-button>
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 -960 960 960" width="14"><path d="M480-480Zm0 360q-18 0-34.5-6.5T416-146L148-415q-35-35-51.5-80T80-589q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880-590q0 49-17 94t-51 80L543-146q-13 13-29 19.5t-34 6.5Zm40.292-510Q528-630 534-626t11 10l71 106h188.133q7.934-19.429 11.9-39.429Q820-569.429 820-590q0-77-49.946-133.5T645.189-780Q610-780 577.5-765.5 545-751 521-725l-27 29q-3 3-6 5t-8 2q-5 0-8.636-1.885-3.637-1.884-6.364-5.115l-27-29q-24.273-25.816-56.636-40.408Q349-780 314-780q-74.571 0-124.286 56.441Q140-667.118 140-590q0 20.717 4 40.859Q148-529 155.649-510H360q7.576 0 14.394 3.611Q381.212-502.778 385-497l46 70 60-182q3.083-9 11.177-15t18.115-6ZM529-533l-61 182q-2.974 9-11.154 15-8.179 6-17.846 6-8 0-14-4t-10-10l-71-106H198l261 261q5 5 9.8 7 4.8 2 11.2 2 6.4 0 11.2-2 4.8-2 9.8-7l260-261H600q-8 0-14-4t-11-10l-46-69Z"/></svg>
                    <span>Tıp Sorgu</span>
                    </base-button>
                    <div v-if="state.tip" class="flex flex-col pl-[46px] text-[.8125rem] bg-[rgb(0,0,0,.15)]">
                        <BaseLink @click="showNav = false"  title="Aşı" />
                        <BaseLink @click="showNav = false"  title="İlaç" />
                    </div>
                </div>
                <!--ITEM7-->
                <div @click="changeState('mernis2015')" class="font-medium">
                    <base-button>
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 -960 960 960" width="12"><path d="M140-80q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h250v-140q0-24 18-42t42-18h60q24 0 42 18t18 42v140h250q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm92-167h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5T265-312q-15 5-24 19t-9 32v14Zm336-67h170v-50H568v50Zm-214-50q23 0 38.5-15.5T408-418q0-23-15.5-38.5T354-472q-23 0-38.5 15.5T300-418q0 23 15.5 38.5T354-364Zm214-63h170v-50H568v50ZM450-590h60v-230h-60v230Z"/></svg>
                    <span>Mernis 2015</span>
                    </base-button>
                    <div v-if="state.mernis2015" class="flex flex-col pl-[46px] text-[.8125rem] bg-[rgb(0,0,0,.15)]">
                        <BaseLink @click="showNav = false"  to="tc-sorgu-2015" title="TC" />
                        <BaseLink @click="showNav = false"  to="adsoyad-secmen-sorgu" title="Ad Soyad" />
                        <BaseLink @click="showNav = false"  to="adres-secmen-sorgu" title="Adres" />
                    </div>
                </div>
                <!--ITEM8-->
                <div @click="changeState('soySorgu')" class="font-medium">
                    <base-button>
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 -960 960 960" width="14"><path d="M720.08-727q-30.08 0-51.58-21.42-21.5-21.421-21.5-51.5 0-30.08 21.42-51.58 21.421-21.5 51.5-21.5 30.08 0 51.58 21.42 21.5 21.421 21.5 51.5 0 30.08-21.42 51.58-21.421 21.5-51.5 21.5ZM660-80v-336q0-30-15-54t-44-35l41-120q8-25 29.5-40t48.5-15q27 0 48.5 15t29.5 40l102 295H790v250H660ZM495-500q-25 0-42.5-17.5T435-560q0-25 17.5-42.5T495-620q25 0 42.5 17.5T555-560q0 25-17.5 42.5T495-500ZM220.08-727q-30.08 0-51.58-21.42-21.5-21.421-21.5-51.5 0-30.08 21.42-51.58 21.421-21.5 51.5-21.5 30.08 0 51.58 21.42 21.5 21.421 21.5 51.5 0 30.08-21.42 51.58-21.421 21.5-51.5 21.5ZM150-80v-290H80v-250q0-24.75 17.625-42.375T140-680h160q24.75 0 42.375 17.625T360-620v250h-70v290H150Zm290 0v-170h-50v-166q0-18.333 12.833-31.167Q415.667-460 434-460h122q18.333 0 31.167 12.833Q600-434.333 600-416v166h-50v170H440Z"/></svg>
                    <span>Soy Sorgu</span>
                    </base-button>
                    <div v-if="state.soySorgu" class="flex flex-col pl-[46px] text-[.8125rem] bg-[rgb(0,0,0,.15)]">
                        <BaseLink @click="showNav = false"  title="Akraba" />
                        <BaseLink @click="showNav = false"  title="Sülale Pro" />
                        <BaseLink @click="showNav = false"  title="Anne Tarafı" />
                        <BaseLink @click="showNav = false"  title="Baba Tarafı" />
                    </div>
                </div>
                <!--ITEM9-->
                <div @click="changeState('telefon')" class="font-medium">
                    <base-button>
                    <svg class="fill-current"  xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 -960 960 960" width="14"><path d="M795-120q-122 0-242.5-60T336-336q-96-96-156-216.5T120-795q0-19.286 12.857-32.143T165-840h140q13.611 0 24.306 9.5Q340-821 343-805l27 126q2 14-.5 25.5T359-634L259-533q56 93 125.5 162T542-254l95-98q10-11 23-15.5t26-1.5l119 26q15.312 3.375 25.156 15.188Q840-316 840-300v135q0 19.286-12.857 32.143T795-120ZM229-588l81-82-23-110H180q0 39 12 85.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z"/></svg>
                    <span>Telefon</span>
                    </base-button>
                    <div v-if="state.telefon" class="flex flex-col pl-[46px] text-[.8125rem] bg-[rgb(0,0,0,.15)]">
                        <BaseLink @click="showNav = false"  to="gsmtc-sorgu" title="Gsm Tc" />
                        <BaseLink @click="showNav = false"  to="tcgsm-sorgu" title="Tc Gsm" />
                        <BaseLink @click="showNav = false"  title="Tc Gsm Boomber" />
                        <BaseLink @click="showNav = false"  title="Gsm Tc Boomber" />
                    </div>
                </div>
                <!--ITEM10-->
                <div @click="changeState('adres')" class="font-medium">
                    <base-button>
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 -960 960 960" width="12"><path d="M140-80q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h250v-140q0-24 18-42t42-18h60q24 0 42 18t18 42v140h250q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm92-167h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5T265-312q-15 5-24 19t-9 32v14Zm336-67h170v-50H568v50Zm-214-50q23 0 38.5-15.5T408-418q0-23-15.5-38.5T354-472q-23 0-38.5 15.5T300-418q0 23 15.5 38.5T354-364Zm214-63h170v-50H568v50ZM450-590h60v-230h-60v230Z"/></svg>
                    <span>Adres</span>
                    </base-button>
                    <div v-if="state.adres" class="flex flex-col pl-[46px] text-[.8125rem] bg-[rgb(0,0,0,.15)]">
                        <BaseLink title="Hane" />
                        <BaseLink title="Bina" />
                        <BaseLink title="Cadde" />
                    </div>
                </div>
                <!--ITEM11-->
                <div @click="changeState('araclar')" class="font-medium">
                    <base-button>
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 -960 960 960" width="12"><path d="M140-80q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h250v-140q0-24 18-42t42-18h60q24 0 42 18t18 42v140h250q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm92-167h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5T265-312q-15 5-24 19t-9 32v14Zm336-67h170v-50H568v50Zm-214-50q23 0 38.5-15.5T408-418q0-23-15.5-38.5T354-472q-23 0-38.5 15.5T300-418q0 23 15.5 38.5T354-364Zm214-63h170v-50H568v50ZM450-590h60v-230h-60v230Z"/></svg>
                    <span>Araçlar</span>
                    </base-button>
                    <div v-if="state.araclar" class="flex flex-col pl-[46px] text-[.8125rem] bg-[rgb(0,0,0,.15)]">
                        <BaseLink title="Kimlik Oluşturucu" />
                        <BaseLink title="Discord Login" />
                        <BaseLink title="Discord Sunucusu" />
                    </div>
                </div>
                <!--ITEM12-->
                <div @click="changeState('onlineApi')" class="font-medium">
                    <base-button>
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 -960 960 960" width="12"><path d="M140-80q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h250v-140q0-24 18-42t42-18h60q24 0 42 18t18 42v140h250q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm92-167h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5T265-312q-15 5-24 19t-9 32v14Zm336-67h170v-50H568v50Zm-214-50q23 0 38.5-15.5T408-418q0-23-15.5-38.5T354-472q-23 0-38.5 15.5T300-418q0 23 15.5 38.5T354-364Zm214-63h170v-50H568v50ZM450-590h60v-230h-60v230Z"/></svg>
                    <span>Pro Hizmetler</span>
                    </base-button>
                    <div v-if="state.onlineApi" class="flex flex-col pl-[46px] text-[.8125rem] bg-[rgb(0,0,0,.15)]">
                        <BaseLink to="/tc-pro" title="TC Pro" />
                        <BaseLink to="/aile-pro" title="Aile Pro" />
                        <BaseLink to="/tcgsm-pro" title="TC Gsm Pro" />
                    </div>
                </div>
                <!--ITEM13-->
                <div v-if="chxAdmin" @click="changeState('adminFunc')" class="font-medium">
                    <base-button>
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 -960 960 960" width="12"><path d="M140-80q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h250v-140q0-24 18-42t42-18h60q24 0 42 18t18 42v140h250q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm92-167h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5T265-312q-15 5-24 19t-9 32v14Zm336-67h170v-50H568v50Zm-214-50q23 0 38.5-15.5T408-418q0-23-15.5-38.5T354-472q-23 0-38.5 15.5T300-418q0 23 15.5 38.5T354-364Zm214-63h170v-50H568v50ZM450-590h60v-230h-60v230Z"/></svg>
                    <span>Admin Functions</span>
                    </base-button>
                    <div v-if="state.adminFunc" class="flex flex-col pl-[46px] text-[.8125rem] bg-[rgb(0,0,0,.15)]">
                        <BaseLink to="/users" title="Kayıtlı Kullanıcılar" />
                    </div>
                </div>
            </div>
        </nav>
    </section>
</template>

<script setup>
import BaseLink from '../components/ui/BaseLink.vue';
import BaseButton from '../components/ui/BaseButton.vue';
import { reactive } from 'vue';
const props = defineProps(['showNav']);
const state = reactive({
    hukuk: false,
    vesika: false,
    egitim: false,
    adsoyad: false,
    mernis2023: false,
    tip: false,
    mernis2015: false,
    soySorgu: false,
    telefon: false,
    adres: false,
    araclar: false,
    onlineApi: false,
    adminFunc: false
});

const chxAdmin = localStorage.getItem('_isAdmin');

const changeState = (val) => {
    if(state[val])
        return state[val] = false;
    Object.keys(state).forEach(m => {
        state[m] = false;
    });
    state[val] = true;
}
</script>