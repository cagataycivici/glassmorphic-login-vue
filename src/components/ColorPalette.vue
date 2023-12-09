<template>
    <div class="relative">
        <button type="button"
            class="h-8 w-8 rounded-full inline-flex justify-center items-center bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
            v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
            <i class="pi pi-palette" />
        </button>
        <div
            class="absolute top-[2.5rem] right-0 hidden w-[12rem] p-3 bg-white/20 rounded-md shadow flex-col justify-start items-start gap-3.5 inline-flex origin-top">
            <div class="flex-col justify-start items-start gap-2 inline-flex">
                <span class="text-white text-sm font-medium">Primary Colors</span>
                <div class="self-stretch justify-start items-start gap-2 inline-flex flex-wrap">
                    <a v-for="item of gradients" :key="item.name" @click="updateValue(item)"
                        :class="['w-4 h-4 rounded-full cursor-pointer', item.color]"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    modelValue: String
});

const emit = defineEmits(['update:modelValue']);

const gradients = ref([
    { name: 'beam', color: 'bg-purple-300', value: 'bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-purple-900 via-purple-600 to-purple-900' },
    { name: 'oceanic', color: 'bg-blue-300', value: 'bg-gradient-to-br from-green-300 via-blue-500 to-purple-600' },
    { name: 'rocket', color: 'bg-yellow-300', value: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800' },
    { name: 'sunrise', color: 'bg-slate-300', value: 'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900' },
    { name: 'gotham', color: 'bg-gray-500', value: 'bg-gradient-to-br from-gray-700 via-gray-900 to-black' },
    { name: 'emeral', color: 'bg-emerald-300', value: 'bg-gradient-to-br from-emerald-500 to-lime-600' },


]);

const updateValue = (item) => {
    if (!document.startViewTransition) {
        emit('update:modelValue', item.value);

        return;
    }

    document.startViewTransition(() => emit('update:modelValue', item.value));
}
</script>
