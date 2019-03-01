const ViewgleVue = {
  install(Vue, options) {
    options.router.beforeEach((to, from, next) => {
      fetch(`/viewgle/logRoute${to.path}`);
      next();
    });
  }
};

export default ViewgleVue;
