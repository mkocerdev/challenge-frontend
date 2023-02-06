<template>
  <div class="flex justify-center">
    <div class="container">
      <div>
        <h1 class="text-3xl mb-4">Order List</h1>
        <DataTable
          :columns="columns"
          :items="orders"
          search-key="firstName"
          @create="createOrder"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable.vue'
export default {
  components: { DataTable },
  data() {
    return {
      orders: [],
      columns: [
        {
          text: 'Order ID',
          value: 'orderID',
        },
        {
          text: 'Sold To',
          value: 'soldTo',
        },
        {
          text: 'Bill To',
          value: 'billTo',
        },
        {
          text: 'Ship To',
          value: 'shipTo',
        },
        {
          text: 'Tax Value',
          value: 'taxValue',
        },
        {
          text: 'Currency Code ',
          value: 'currencyCode',
        },
        {
          text: 'Order Date',
          value: 'orderDate',
        },
      ],
    }
  },
  async fetch() {
    this.orders = await fetch('/api/orders').then((res) => res.json())
  },
  methods: {
    createOrder() {
      this.$router.push('/orders/create')
    },
  },
}
</script>
