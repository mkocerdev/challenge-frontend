<template>
  <div>
    <h1 class="text-3xl mb-4 p-3">Create Person</h1>

    <form @submit.prevent="onSubmit">
      <div class="flex">
        <div class="w-1/2 px-4 py-3">
          <FormInput
            v-model="form.firstName"
            type="text"
            placeholder="First Name"
            label="First Name"
            required
          />
        </div>
        <div class="w-1/2 px-4 py-3">
          <FormInput
            v-model="form.lastName"
            type="text"
            placeholder="Last Name"
            label="Last Name"
            required
          />
        </div>
      </div>

      <div class="flex">
        <div class="w-1/2 px-4 py-3">
          <FormInput
            v-model="form.city"
            type="text"
            placeholder="City"
            label="City"
            required
          />
        </div>
        <div class="w-1/2 px-4 py-3">
          <FormInput
            v-model="form.country"
            type="text"
            placeholder="Country"
            label="Country"
            required
          />
        </div>
      </div>

      <div class="flex">
        <div class="w-1/2 px-4 py-3">
          <FormInput
            v-model="form.houseNumber"
            type="text"
            placeholder="House Number"
            label="House Number"
            required
          />
        </div>
        <div class="w-1/2 px-4 py-3">
          <FormInput
            v-model="form.streetAddress"
            type="text"
            placeholder="Street Address"
            label="Street Address"
            required
          />
        </div>
      </div>

      <div class="flex">
        <div class="w-1/2 px-4 py-3">
          <FormInput
            v-model="form.zip"
            type="text"
            placeholder="Zip"
            label="Zip"
            required
          />
        </div>
      </div>

      <div class="flex">
        <div class="w-full px-4 py-3">
          <FormButton class="float-right px-6" type="submit"> Send </FormButton>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import FormInput from '@/components/FormInput'
import FormButton from '@/components/FormButton'

export default {
  components: {
    FormInput,
    FormButton,
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        city: '',
        country: '',
        streetAddress: '',
        houseNumber: '',
        zip: '',
        extensionFields: {},
      },
    }
  },
  methods: {
    async onSubmit() {
      const response = await this.$axios.$post('/api/v1/person', this.form)
      this.$message({
        title: `Person created`,
        message: 'The person has been successfully created.',
        type: 'success',
      })
      this.$router.push(`/persons/${response.id}`)
    },
  },
}
</script>
