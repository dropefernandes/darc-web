<template lang="pug">
  section.signin
    .signin__card
      img.signin__logo(src="~@/assets/logo.jpg")
      h2.signin__title Acesse sua conta
      SigninForm
</template>

<script>
import SigninForm from '@/components/modules/auth/signin/layout/SigninForm'

export default {
  name: 'Signin',
  components: {
    SigninForm
  }
}
</script>

<style lang="scss">
.signin {
  width: 100%;
  height: 100vh;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;

  &__card {
    width: 100%;
    max-width: 360px;
    min-height: 532px;
    border-radius: 8px;
    border: 1px solid rgba(189, 194, 198, 0.4);
    padding: 32px;
  }

  &__logo {
    width: 200px;
    margin: 0 auto;
  }

  &__title {
    text-align: center;
  }
}
</style>

