<script setup lang="ts">
const search = ref('')
const input = ref<HTMLInputElement>()
const inputContainer = ref<HTMLInputElement>()

const searchHandler = (e: KeyboardEvent) => {
  if (e.ctrlKey && e.key === 'k') {
    e.preventDefault()
    input.value?.focus()
    inputContainer.value?.classList.add('border-custPrimary')
  }
  if (e.key === 'Escape') {
    e.preventDefault()
    search.value = ''
    input.value?.blur()
    inputContainer.value?.classList.remove('border-custPrimary')
  }
}

onMounted(() => {
  window.addEventListener('keydown', searchHandler)
})
</script>

<template>
  <div ref="inputContainer" class="w-full max-w-lg group rounded-lg relative bg-white border border-gray-200 p-2.5 ml-6 cursor-pointer focus:border-custPrimary shadow-custPrimary">
    <Icon class="absolute top-2/4 left-0 translate-y-[-50%] ml-3 text-gray-400 group-hover:text-gray-500" name="mdi-magnify" size="1.75em"></Icon>
    <input ref="input" v-model="search" class="pl-12 w-9/12 outline-none group-hover:cursor-pointer" />
    <span class="absolute top-2/4 right-0 translate-y-[-50%] mr-3 flex items-center gap-1">
      <span class="bg-gray-200 py-1 px-2 rounded flex items-center text-gray-400 font-bold tracking-wider">CTRL</span>
      <span class="bg-gray-200 py-1 px-2 rounded flex items-center text-gray-400 font-bold tracking-wider">K</span>
    </span>
  </div>
</template>
