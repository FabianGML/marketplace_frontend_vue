import axios from 'axios'

// Function to login and register a user in the application
export const useSubmitSession = (inputsData, hashUrl, requestState, router) => {
  const url = `${import.meta.env.VITE_API_URL}${hashUrl}`
  console.log('entranding', url)
  requestState.isLoading = true
  axios.post(url, inputsData).then(response => {
    window.localStorage.setItem('token', response.data.token)
    window.localStorage.setItem('userId', response.data.id)
    router.push('/')
  }).catch(error => {
    if (error.response) {
      // If there is a server response, handle the error normally
      requestState.error = error.response.data.error
    } else if (error.request) {
      // If the request was made but no response was received from the server
      requestState.error = 'Lo sentimos. El servicio no está disponible. 😿'
    } else {
      // If there was another error in the request
      console.log('Error de solicitud:', error.message)
    }
    requestState.isLoading = false
  })
}
