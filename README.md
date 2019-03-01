# viewgle-vue

A plugin for using Vue with [viewgle](https://www.npmjs.com/package/viewgle). This plugin leverages the `vue-router` to call `beforeEach` on routes to log the information to viewgle.

## Usage:

In your `main.js` file import the plugin:

```
import viewgleVue from "viewgle-vue";
```

Then pass it the Vue Router instance like so

```
let router = new Router({
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/projects", component: Projects }
  ]
});
```

```
Vue.use(viewgleVue, {
  router
});
```

### You will need to set up the express side of things by following the Viewgle documentation here: https://www.npmjs.com/package/viewgle
