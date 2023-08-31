import { defineNuxtRouteMiddleware } from '#app';
import { useAuth, useUser } from '@/stores';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { layout } = to.meta;
  if (layout === 'main') {
    const router = useRouter();
    const auth = useAuth();
    const user = useUser();
    const { initToken, removeAuthToken } = auth;
    const { getAuthenticatedUser } = user;

    initToken();

    if (auth.token) {
      try {
        await getAuthenticatedUser();

        if (!user.isAuthenticated) {
          removeAuthToken();
          return navigateTo('/auth/login');
        }
      } catch (error) {
        removeAuthToken();
        return navigateTo('/auth/login');
      }
    } else {
      return router.push('/auth/login');
    }
  }

  return;
});
