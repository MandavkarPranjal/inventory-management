export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    // account: '/dashboard/account',
    sales: '/dashboard/sales',
    products: '/dashboard/products',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
