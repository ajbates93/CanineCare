<script setup lang="ts">
type NavigationLink = {
  name: string
  path: string
  icon: string
}

const links = ref<NavigationLink[]>([
  {
    name: 'Overview',
    path: '/',
    icon: 'mdi-view-dashboard',
  },
  {
    name: 'Manage Pets',
    path: '/pets',
    icon: 'mdi-dog',
  },
  {
    name: 'Upcoming Treatments',
    path: '/treatments',
    icon: 'mdi-calendar-clock',
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: 'mdi-cog',
  },
])

</script>
<template>
  <div class="bg-white">
    <header class="bg-[#fbfafa] border-b border-b-[#ebeaea] flex items-stretch w-full">
      <div class="max-w-[330px] w-full p-6 border-r border-r-[#ebeaea]">
        <div class="text-2xl text-slate-900 flex items-center"><Icon class="text-[#5874F4]" name="mdi-paw" size="2em"></Icon><span class="ml-3 font-bold">CanineCare</span></div>
      </div>
    </header>
    <div class="flex items-stretch ">
      <aside class="bg-[#fbfafa] h-screen max-w-[330px] p-6 px-10 border-r border-r-[#ebeaea] w-full text-xl">
        <div class="text-gray-400 tracking-widest uppercase text-lg mb-3">NAIVGATION</div>
        <nav>
          <ul>
            <li v-for="link, idx in links" :key="idx" class="py-3">
              <NuxtLink 
                :to="link.path"
                active-class="text-[#5874F4]" class="flex items-center">
                <Icon :name="link.icon" size="1.5rem" class="mr-3"></Icon>{{ link.name }}
              </NuxtLink>
            </li>
          </ul>
          <a class="bg-[#5874F4] text-white px-4 py-2 rounded-full mt-10 block w-full text-center">Log Activity</a>
        </nav>
      </aside>
      <main role="main" class="p-10">
        <slot />
      </main>
    </div>
  </div>
</template>
