import { inject } from 'vue'
import { useRouter } from 'vue-router'

export function useCheckActiveSession (redirectTo) {
  const isActiveSession = inject('isSessionActive')
  const router = useRouter()
  const token = window.localStorage.getItem('token')
  const id = window.localStorage.getItem('userId')

  const protectedRoutes = ['/profile']

  if (!isActiveSession.value) {
    if (token && id) {
      isActiveSession.value = true
      router.push(redirectTo || router.currentRoute.value.path)
    } else {
      if (protectedRoutes.includes(router.currentRoute.value.path)) router.push('/login')
    }
  } else {
    router.push(redirectTo || router.currentRoute.value.path)
  }
}
