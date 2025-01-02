<script setup>
import { ref, computed, onMounted } from "vue";
import {useMayLike} from "@/stores/home/may-like.ts";

const mayLikeStore = useMayLike();
onMounted(() => {
    mayLikeStore.fetchMayLike();
});
</script>
<template>
    <h3 class="text-2xl font-medium text-left mb-4">Có thể bạn cũng thích</h3>
</template>
