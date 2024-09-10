import { createApp, h, provide } from 'vue'
import App from './App.vue'
import { ApolloClient, createHttpLink, InMemoryCache, split } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { WebSocketLink } from '@apollo/client/link/ws' //npm install @apollo/client
import { createClient } from 'graphql-ws';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';

import { getMainDefinition } from '@apollo/client/utilities'

//COMPOSITION API: npm i --save @vue/apollo-composable
//Servidor de graphql, podemos crear varios links o clientes
const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
})

//El websocket sirve para tener una conexion bilateral entre el cliente y el servidor
//Debemos instalar las ddepenciancias necesarias (npm i subscriptions-transport-ws)
const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://localhost:4000/graphql',
  }));

// Configurar el link WebSocket con graphql-ws - npm install graphql-ws

const link = split(
    ({query}) => {
        const definition = getMainDefinition(query)

        return (
            definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
        )
    },
    wsLink,
    httpLink
)

const cache = new InMemoryCache()

//Config para websocket
const apolloClient = new ApolloClient({
    link: link,
    cache: cache
})

/* config para httpLink
const apolloClient = new ApolloClient({
    link: httpLink,
    cache: cache
})
*/

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
