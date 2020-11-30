<template lang="pug">
  nav.nav.navBar#nav
    br
    br
    br
    br
    router-link.nav__link(
      v-for="(routerLink, index) in routerLinks"
      :key="index"
      :to="routerLink.toName"
      :id="routerLink.name"
      :class="{ 'nav__link--active': verifyNameRoute(routerLink.classActive) }"
    )
      keep-alive
        span.nav__text #[span.ec(:class="routerLink.iconClass")] {{ routerLink.title }}
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      routerLinks: [
        {
          classActive: ['overview'],
          name: 'overview',
          title: 'Visão Geral',
          toName: { name: 'overview' },
          iconClass: 'ec-round-pushpin'
        },
        {
          classActive: ['stock'],
          name: 'stock',
          title: 'Produtos',
          toName: { name: 'stock' },
          iconClass: 'ec-shopping'
        },
        {
          classActive: ['order'],
          name: 'order',
          title: 'Pedidos',
          toName: { name: 'order' },
          iconClass: 'ec-package'
        },
        {
          classActive: ['customer'],
          name: 'customer',
          title: 'Clientes',
          toName: { name: 'customer' },
          iconClass: 'ec-bust-in-silhouette'
        }
      ]
    }
  },
  methods: {
    verifyNameRoute (name) {
      return ~name.indexOf(this.$route.name)
    }
  }
}
</script>

<style lang="scss">
@import '~@/styles/components/nav-bar';
</style>