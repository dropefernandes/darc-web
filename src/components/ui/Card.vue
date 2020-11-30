<template lang="pug">
  .card
    .card__header
      span.ec(:class="iconClass")
      span.card__span {{ date }}
      span.card__span.card__span--status {{ statusCustom }}
    
    .card__body
      p.card__text {{ title }}
      p.card__text.card__text--description {{ description }}
      p.card__text.card__text--amount Quant: {{ amount }}
      p.card__text.card__text--price R$ {{ totalValue }}


</template>

<script>
export default {
  name: 'Card',
  props: {
    iconClass: {
      type: String,
      default: 'ec-package'
    },
    title: {
      type: String,
      default: ''
    },
    totalValue: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      deufalt: ''
    },
    date: {
      type: String,
      default: ''
    },
    amount: {
      type: Number,
      default: 0
    },
    status: {
      type: String
    }
  },
  computed: {
    statusCustom () {
      return this.amount <= 0 ? 'Sem Estoque' : status
    }
  }
}
</script>

<style lang="scss">
@import '~@/styles/components/card';
</style>