import { createApp, provide, h } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import apolloClient from './apollo';
import { DefaultApolloClient } from '@vue/apollo-composable';

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app.use(createPinia());
app.mount('#app');

// import { createApp, provide, h } from 'vue';
// import App from './App.vue';
// import { DefaultApolloClient } from '@vue/apollo-composable';
// import apolloClient from './apollo';
// import { createPinia } from 'pinia';

// const app = createApp({
//   setup() {
//     provide(DefaultApolloClient, apolloClient);
//   },

//   render: () => h(App),
// });

// app.use(createPinia());
// app.mount('#app');

// import { createApp, provide, h } from 'vue';
// import App from './App.vue';
// import { DefaultApolloClient } from '@vue/apollo-composable';
// import apolloClient from './apollo';
// import { createPinia } from 'pinia';
// // import 'dotenv/config';

// const app = createApp({
//   setup() {
//     provide(DefaultApolloClient, apolloClient);
//   },

//   render: () => h(App),
// });

// app.use(createPinia());
// app.mount('#app');

