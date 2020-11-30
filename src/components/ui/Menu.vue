<template lang="pug">
  menu.menu
    a.menu__navBar(@click.prevent="toggleNavBar")
      img(src="~@/assets/bar-mobile.svg")
    .menu__logo
      img(src="~@/assets/logo.jpg")
    .menu__profile
      img(src="~@/assets/perfil.svg")
      span Pedro Fernandes
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    toggleNavBar () {
      const nav = document.getElementById('nav')
      nav.classList.contains('nav--open') ? 
       nav.classList.remove('nav--open') :
        nav.classList.add('nav--open')
    }
  }
}
</script>

<style lang="scss">
@import '~@/styles/components/menu';
</style>