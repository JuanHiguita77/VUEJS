import { createApp, h } from 'vue'
import App from './App.vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

//Option API: npm i --save @vue/apollo-option

//Servidor de graphql, podemos crear varios links o clientes
const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    link: httpLink,
    cache: cache
})

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient
    /*definimos mas clientes si se necesitan */
})

//Creamos nuestro apollo client para un unico cliente y el h renderiza la vista como normalmente lo haria vue
const app = createApp({
    render: () => h(App)
})

app.use(apolloProvider)
app.mount('#app')
