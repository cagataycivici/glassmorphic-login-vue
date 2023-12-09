<template>
    <div :class="['min-h-screen p-8 flex items-center justify-center transition-all duration-200', gradient]">
        <div class="fixed w-full top-0 left-0 flex items-center justify-end gap-3 p-8">
            <ColorPalette v-model="gradient" />
        </div>

        <div class="bg-white/10 p-9 rounded-xl backdrop-blur-xl flex flex-col gap-6 shadow-xl">
            <div class="text-center">
                <span class="bg-white/10 inline-flex justify-center items-center rounded-full p-4">
                    <i class="pi pi-user text-4xl text-white" />
                </span>
            </div>
            <InputText placeholder="Username" />
            <InputText placeholder="Password" />
            <Button label="Login" />
        </div>
    </div>
</template>

<script setup>
import ColorPalette from './components/ColorPalette.vue';
import { ref } from 'vue';

const gradient = ref('bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-purple-900 via-purple-400 to-purple-900');
</script>