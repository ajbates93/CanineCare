<script setup lang="ts">
import { useSearch } from '@/composables/search/useSearch'
import type { SearchResult } from '@/types'
const search = ref('')
const input = ref<HTMLInputElement>()
const inputContainer = ref<HTMLInputElement>()
const searchResults = ref<SearchResult[]>([])

const searchShortcutHandler = (e: KeyboardEvent) => {
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

const handleSearchInput = async () => {
  if (search.value === '') {
    searchResults.value = []
    return
  }
  const { data } = await useSearch(search.value)
  if (data.value) {
    const d = data.value as any[]
    searchResults.value = d.map(x => {
      return x as SearchResult
    })
  }
}

watch(search, () => {
  handleSearchInput()
})
onMounted(() => {
  window.addEventListener('keydown', searchShortcutHandler)
})

</script>

<template>
  <div ref="inputContainer" 
    class="w-full max-w-lg group rounded-lg relative bg-white border border-gray-200 p-2.5 ml-6 
      cursor-pointer focus:border-custPrimary shadow-custPrimary"
    :class="[{ 'rounded-b-none' : searchResults.length > 0 }]">
    <Icon class="absolute top-2/4 left-0 translate-y-[-50%] ml-3 text-gray-400 group-hover:text-gray-500" name="mdi-magnify" size="1.75em"></Icon>
    <input ref="input" v-model="search" class="pl-12 w-9/12 outline-none group-hover:cursor-pointer" />
    <span class="absolute top-2/4 right-0 translate-y-[-50%] mr-3 flex items-center gap-1">
      <span class="bg-gray-200 py-1 px-2 rounded flex items-center text-gray-400 font-bold tracking-wider">CTRL</span>
      <span class="bg-gray-200 py-1 px-2 rounded flex items-center text-gray-400 font-bold tracking-wider">K</span>
    </span>
    <div class="absolute border border-gray-200 w-full rounded-b left-0 top-full shadow-lg:w
     bg-gray-100" v-if="searchResults.length > 0">
      <div class="p-4 flex items-center border-b border-gray-200" v-for="result in searchResults"><Icon name="mdi-arrow-right-bottom" class="text-gray-500 mr-2"></Icon><span class="font-bold mr-1 text-custPrimary">{{ result.name }}</span> - {{ result.age }} Years Old - {{ result.breed }}</div>
      <div class="px-4 py-2 flex items-center justify-end text-gray-500 text-sm text-right">{{ searchResults.length }} result{{ searchResults.length > 1 ? 's' : '' }}</div>
    </div>
  </div>
</template>
