<template>
    <router-link class="hover:text-white transition-all py-[6px]" :to="to">{{ title }}</router-link>
</template>

<script setup>
defineProps({
    to: {
        type: String,
        required: false,
        default: '/'
    },
    title: String
})
</script>