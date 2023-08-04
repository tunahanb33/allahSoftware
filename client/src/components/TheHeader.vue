<template>
    <div class="h-16 bg-[#2a3241] relative flex justify-between items-center px-5">
        <img src="../assets/brandLogo.png" class="h-full py-2 hidden lg:flex" alt="">
        <button @click="$emit('showNav')" class="lg:bg-green-400 flex lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
        </button>
        <p class="bg-gradient-to-r text-white px-3 py-1.5 rounded from-indigo-500 font-semibold via-purple-500 to-pink-500">User Content</p>
    </div>
</template>