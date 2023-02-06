<template>
  <div class="flex justify-center">
    <div class="container">
      <div class="w-full p-8">
        <div class="flex mb-4">
          <FormButton type="submit" to="/orders"> Orders </FormButton>
          <FormButton class="ml-4" type="submit" to="/"> Persons </FormButton>
        </div>
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
