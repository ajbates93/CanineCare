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
  <aside class="bg-[#fbfafa] h-screen max-w-[330px] p-6 px-10 border-r border-r-[#ebeaea] w-full text-xl">
    <div class="text-gray-400 tracking-widest uppercase text-lg mb-3">NAVIGATION</div>
    <nav>
      <ul>
        <li v-for="link, idx in links" :key="idx" class="py-3">
          <NuxtLink 
            :to="link.path"
            active-class="text-custPrimary" class="flex items-center">
            <Icon :name="link.icon" size="1.5rem" class="mr-3"></Icon>{{ link.name }}
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink to="/log-activity" class="bg-custPrimary text-white px-4 py-2 rounded-full mt-10 block w-full text-center">Log Activity</NuxtLink>
    </nav>
  </aside>
</template>
