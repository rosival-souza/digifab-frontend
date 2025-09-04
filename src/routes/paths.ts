export const rootPaths = {
  homeRoot: '/',
  authRoot: 'authentication',
  errorRoot: 'error',
  dashboard: 'dashboard',
};

export default {
  home: `/${rootPaths.homeRoot}`,
  login: `/${rootPaths.authRoot}/login`,
  signup: `/${rootPaths.authRoot}/sign-up`,
  dashboard: `/${rootPaths.dashboard}`,
  404: `/${rootPaths.errorRoot}/404`,
};
