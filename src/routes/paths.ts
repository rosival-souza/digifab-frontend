export const rootPaths = {
  homeRoot: '/',
  authRoot: 'authentication',
  errorRoot: 'error',
  dashboard: 'dashboard',
  product: 'product',
  search: 'search',
};

export default {
  home: `/${rootPaths.homeRoot}`,
  login: `/${rootPaths.authRoot}/login`,
  signup: `/${rootPaths.authRoot}/sign-up`,
  product: `/${rootPaths.authRoot}/product`,
  search: `/${rootPaths.authRoot}/search`,
  dashboard: `/${rootPaths.dashboard}`,
  404: `/${rootPaths.errorRoot}/404`,
};
