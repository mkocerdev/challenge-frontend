<template>
  <div class="flex justify-center">
    <div class="container">
      <div>
        <h1 class="text-3xl mb-4">Person List</h1>
        <DataTable
          :columns="columns"
          :items="persons"
          search-key="firstName"
          @delete="deletePerson"
          @detail="detailPerson"
          @create="createPerson"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable.vue'
export default {
  components: { DataTable },
  async asyncData({ $axios }) {
    const persons = await $axios.$get('/api/v1/person')
    return { persons }
  },
  data() {
    return {
      columns: [
        {
          text: 'First Name',
          value: 'firstName',
        },
        {
          text: 'Last Name',
          value: 'lastName',
        },
        {
          text: 'Street Address',
          value: 'streetAddress',
        },
        {
          text: 'House Number',
          value: 'houseNumber',
        },
        {
          text: 'Zip',
          value: 'zip',
        },
        {
          text: 'City',
          value: 'city',
        },
        {
          text: 'City',
          value: 'country',
        },
        {
          text: 'Actions',
          value: 'actions',
        },
      ],
    }
  },
  methods: {
    async deletePerson(person) {
      await this.$axios.$delete(`/api/v1/person/${person.id}`)
      this.$nuxt.refresh()
    },
    createPerson() {
      this.$router.push('/persons/create')
    },
    detailPerson(person) {
      this.$router.push(`/persons/${person.id}`)
    },
  },
}
</script>
