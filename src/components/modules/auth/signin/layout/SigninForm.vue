<template lang="pug">
  .signin-form
    form
      fieldset.signin-form__fieldset
        label.label.signin-form__label E-mail
        input.input.signin-form__input(arial-label="Digite seu email" type="email" v-model.trim="email" @change="setEmail" :class="{ 'input--invalid': validationEmail }" placeholder="Digite seu email")
        span.input__msg-error(v-if="validationEmail") Preencha seu e-mail
      fieldset.signin-form__fieldset
        label.label.signin-form__label Password
        input.input.signin-form__input(arial-label="Digite sua senha" type="password" v-model.trim="password" @change="setPassword" :class="{ 'input--invalid': validationPassword }" placeholder="Digite sua senha")
        span.input__msg-error(v-if="validationPassword") Preencha sua senha

      Button(:handleClick="handleSignin" text="Entrar" :disabled="$v.$invalid")
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

import Button from '@/components/ui/Button'

import views from '@/mixins/views'

export default {
  name: 'SigninForm',
  components: {
    Button
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  mixins: [views],
  computed: {
    validationEmail () {
      return this.$v.email.$invalid && this.$v.email.$dirty
    },
    validationPassword () {
      return this.$v.password.$invalid && this.$v.password.$dirty
    }
  },
  methods: {
    setEmail (event) {
      const { value } = event.target
      this.setDirty(this.$v.email)
      this.email = value
    },
    setPassword () {
      const { value } = event.target
      this.setDirty(this.$v.password)
      this.password = value
    },
    handleSignin () {
      this.$router.push({ path: '/' })
    }
  },
  validations: {
    email: {
      required,
      //  validateEmail: devEnv
      //   ? helpers.regex('validateEmail', /^[a-zA-Z_0-9.+_-]+@[a-zA-Z_0-9]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/)
      //   : helpers.regex('validateEmail', /^[a-zA-Z_0-9._-]+@[a-zA-Z_0-9]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/),
      // blackListEmail: (value) => ['teste@teste.com', 'teste@teste.com.br'].indexOf(value) === -1,
      email
    },
    password: {
      required
    }
  }
}
</script>

<style lang="scss">
@import '~@/styles/components/input';
@import '~@/styles/components/label';

.signin-form {

  &__fieldset {
    border: none;
    margin: 0;
    padding: 0;
    margin-top: 24px;
  }
}
</style>