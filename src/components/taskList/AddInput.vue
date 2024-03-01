<template>
    <input
        v-model="text"
        class="text-grey-darker mr-4 w-full appearance-none rounded-md border px-3 py-2 shadow"
        placeholder="Add Task"
        autofocus
      />
</template>

<script setup>
    let text = defineModel()
</script>