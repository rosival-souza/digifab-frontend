export const rootPaths = {
  homeRoot: '/',
  authRoot: 'authentication',
  errorRoot: 'error',
  dashboard: 'dashboard',
  product: 'product',
};

export default {
  home: `/${rootPaths.homeRoot}`,
  login: `/${rootPaths.authRoot}/login`,
  signup: `/${rootPaths.authRoot}/sign-up`,
  product: `/${rootPaths.authRoot}/product`,
  dashboard: `/${rootPaths.dashboard}`,
  404: `/${rootPaths.errorRoot}/404`,
};
