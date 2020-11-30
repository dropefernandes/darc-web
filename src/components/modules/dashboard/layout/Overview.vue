<template lang="pug">
  section.overview.content
    header.overview__header
      p #[span.ec.ec-moneybag] Total em vendas
      h2.overview__total-sales R$ 834.066,12

    .overview__orders
      h2.overview__title Pedidos
      .overview__orders__list
        Card(
          v-for="(order, index) in items"
          :key="index"
          :title="order.customer"
          :totalValue="order.price"
          :date="order.date"
          :amount="order.amount"
          :status="order.status"
        )
    
    .overview__products
      h2.overview__title Produtos
      .overview__products__list
        Card(
          v-for="(product, index) in products"
          :key="index"
          :title="product.name"
          :totalValue="product.price"
          :description="product.description"
          :amount="product.amount"
          :status="product.status"
          iconClass="ec-shopping"
        )
      

</template>

<script>
import Card from '@/components/ui/Card'

export default {
  name: 'Overview',
  components: {
    Card
  },
  data () {
    return {
      items: [
        {
          id: 1,
          customer: 'Pedro Fernandes',
          price: '200',
          date: '27/11/2020',
          status: 'Pending',
          amount: 10
        },
        {
          id: 2,
          customer: 'Pedro Fernandes',
          price: '200',
          date: '27/11/2020',
          status: 'Pending',
          amount: 10
        },
        {
          id: 2,
          customer: 'Pedro Fernandes',
          price: '200',
          date: '27/11/2020',
          status: 'Pending',
          amount: 10
        },
        {
          id: 2,
          customer: 'Pedro Fernandes',
          price: '200',
          date: '27/11/2020',
          status: 'Pending',
          amount: 10
        }
      ],
      products: [
        {
          id: 1,
          name: 'Cropped Preto',
          amount: 8,
          price: 20,
          description: 'Cropped Harley Daivison, tamanho P, M e G'
        },
        {
          id: 2,
          name: 'Cropped Preto',
          amount: 8,
          price: 20,
          description: 'Cropped Harley Daivison, tamanho P, M e G'
        },
        {
          id: 3,
          name: 'Cropped Preto',
          amount: 8,
          price: 20,
          description: 'Cropped Harley Daivison, tamanho P, M e G'
        },
        {
          id: 3,
          name: 'Cropped Preto',
          amount: 8,
          price: 20,
          description: 'Cropped Harley Daivison, tamanho P, M e G'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.overview {
  height: 100vh;
  background-color: var(--solitude);

  &__header {
    margin: 20px;
    padding: 20px 0;
    border-bottom: 1px solid rgba(189, 194, 198, 0.3);
  }

  &__orders, &__products {
    margin: 20px;
    padding: 20px 0;
    border-bottom: 1px solid rgba(189, 194, 198, 0.3);

    &__list {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
    }
  }

  &__products {
    margin: 20px;
    padding: 20px 0;
  }
}


.content {
  margin: 80px auto;
  
  @media screen and (min-width: 768px) {
    margin: 80px auto auto 250px;
  }
}
</style>