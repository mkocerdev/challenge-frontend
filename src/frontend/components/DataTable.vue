<template>
  <div>
    <div class="flex mb-6">
      <div class="flex-1">
        <FormInput v-model="search" type="text" placeholder="Search" />
      </div>
      <div v-if="create" class="ml-2">
        <FormButton @click="$emit('create')"> Create </FormButton>
      </div>
    </div>
    <table class="w-full">
      <thead>
        <th v-for="column in columns" :key="column.value" class="text-left">
          {{ column.text }}
        </th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filteredItems" :key="index">
          <td v-for="column in columns" :key="column.value">
            <div v-if="column.value === 'actions'" class="flex">
              <FormButton class="mr-1" @click="$emit('detail', item)">
                Detail
              </FormButton>
              <FormButton variant="danger" @click="$emit('delete', item)">
                Delete
              </FormButton>
            </div>
            <template v-else>
              {{ item[column.value] }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import FormButton from '@/components/FormButton.vue'
export default {
  components: { FormButton },
  props: {
    columns: {
      type: [Array],
      default: () => [],
    },
    items: {
      type: [Array],
      default: () => [],
    },
    create: {
      type: Boolean,
      default: true,
    },
    searchKey: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    filteredItems() {
      if (this.search) {
        return this.items.filter(
          (item) => item[this.searchKey].toLowerCase().search(this.search) > -1
        )
      } else {
        return this.items
      }
    },
  },
}
</script>

<style scoped>
table,
th,
td {
  border: 1px solid #cfcfcf;
  border-collapse: collapse;
  padding: 10px;
}
table {
  background-color: #f3f4f6;
}
</style>
