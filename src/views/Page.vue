<template>
    <div>
        This is my page - test!!!
        <div @click="val = val+1">{{ val }}</div>
    </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const val = ref(0);

        return {
            val
        }
    }
});

</script>
