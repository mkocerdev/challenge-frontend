<template>
  <div>
    <h1 class="text-3xl mb-4 p-3">Create Order</h1>
    <form @submit.prevent="onSubmit">
      <div class="flex">
        <div class="w-1/2 px-4 py-3">
          <FormInput
            v-model="form.orderDate"
            type="text"
            placeholder="Order Date"
            label="Order Date"
            required
          />
        </div>
        <div class="w-1/2 px-4 py-3">
          <FormInput
            v-model="form.orderValue"
            type="text"
            placeholder="Order Value"
            label="Order Value"
            required
          />
        </div>
      </div>

      <div class="flex">
        <div class="w-1/2 px-4 py-3">
          <FormInput
            v-model="form.taxValue"
            type="text"
            placeholder="Tax Value"
            label="Tax Value"
            required
          />
        </div>
        <div class="w-1/2 px-4 py-3">
          <FormSelect
            v-model="form.currencyCode"
            placeholder="Currency Code"
            label="Currency Code"
            :options="['USD', 'TRY', 'EUR', 'GBP']"
            required
          />
        </div>
      </div>

      <div class="flex">
        <div class="w-1/2 px-4 py-3">
          <FormSelect
            v-model="form.userID"
            label="User"
            :options="personList"
            value-key="id"
            label-key="fullName"
            required
          />
        </div>
      </div>

      <div class="flex">
        <div class="w-full px-4 py-3">
          <FormButton class="float-right px-6" type="submit">
            Create Order
          </FormButton>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const persons = await $axios.$get('/api/v1/person')
    return { persons }
  },
  data() {
    return {
      form: {
        orderDate: '',
        orderValue: 0,
        taxValue: 0,
        currencyCode: '',
        userID: '',
      },
    }
  },
  computed: {
    personList() {
      return this.persons.map((person) => ({
        ...person,
        fullName: person.firstName + ' ' + person.lastName,
      }))
    },
  },
  methods: {
    async onSubmit() {
      await fetch('/api/orders/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: this.form }),
      })
      this.$message({
        title: ` Order created`,
        message: 'The order has been successfully created.',
        type: 'success',
      })
      this.$router.push('/orders')
    },
  },
}
</script>

<style></style>
