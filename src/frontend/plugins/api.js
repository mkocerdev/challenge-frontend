export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {},
  })

  // Set baseURL to something different
  api.setBaseURL('http://localhost:3000')

  // Inject to context as $api
  inject('mockapi', api)
}
