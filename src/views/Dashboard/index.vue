<template lang="pug">
  section.dashboard
    Menu
    NavBar
    router-view
</template>

<script>
import NavBar from '@/components/ui/NavBar'
import Menu from '@/components/ui/Menu'

export default {
  name: 'Dashboard',
  components: {
    NavBar,
    Menu
  }
}
</script>