<template>
    <div>
        This is my page
        <div @click="val = val+1">{{ val }}</div>
        <div class="bg-red-600 inline-block h-24 text-[#CECECE]">Tailwind style</div>
        <HelloWorld />
    </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
    components: { HelloWorld },
    setup() {
        console.log("ok?")
        const val = ref(0);

        return {
            val
        }
    }
});

</script>
