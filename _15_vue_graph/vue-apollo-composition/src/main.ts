import { createApp, h, provide } from 'vue'
import App from './App.vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { ApolloClients, DefaultApolloClient } from '@vue/apollo-composable'

//COMPOSITION API: npm i --save @vue/apollo-composable
//Servidor de graphql, podemos crear varios links o clientes
const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    link: httpLink,
    cache: cache
})

//Creamos nuestro apollo client para un unico cliente y el h renderiza la vista como normalmente lo haria vue
const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)

        //NOTA: SI queremos usar varios clientes apollo debemos modificar el apollo client y decir apolloClients como un arreglo de clientes
        /*provide(ApolloClients, {
            default: apolloClient,
            client1: apolloClient1,
            client2: apolloClient2
        })*/
    },
    render: () => h(App)
})


app.mount('#app')
