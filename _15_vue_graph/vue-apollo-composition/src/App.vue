<template>
    <h1>Hello options</h1>
    
    <!-- Cuando algo de apollo esta cargando $apollo.loading
    o podemos especificar tal metodo -->
    <div v-if="$apollo.queries.comments.loading">
        <h3>Loading...</h3>
    </div>
    <ul v-else>
        <li v-for="(comment, index ) in comments" :key="index">{{ comment.text }}</li>          
    </ul>

    <!--MUTACION
    <button @click="createComment">Send your comment</button>-->
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import gql from 'graphql-tag';

    //Websocket
    /*export default defineComponent({
        apollo: {
            comments: { 
                query: gql`
                    query($name: String!) {
                        comments: getCommentsFromUser(name: $name) {
                            text
                        }
                    }
                `,
                variables(){
                    return {
                        name: "User 1"//this.name
                    }
                },
                fetchPolicy: 'cache-and-network',
                pollInterval: 5000
            },
        },
        data() {
            return{
                comments: []
            }
        },
        methods: {

        }
    });*/

    //Mutations en option API
    /*export default defineComponent({
        methods: {
            createComment() {
                this.$apollo.mutate({
                    mutation: gql`
                    mutation($name: String!, $text: String!) {
                        createComment(name: $name, text: $text)
                    }`,
                    variables() 
                    {
                        return{
                            name: "User 1",
                            text: "Hi from variable option api"
                        }
                    },
                    //Solo para cuando tenemos una query que devuelva datos para actualizar el contenido 
                    update: (cache, { data: { createComment }}) => {
                        let data = cache.readQuery({ query: createComment})
                        data = {
                            ...data,
                            createComment
                        }
                        cache.writeQuery({ query: createComment, data })
                    }
                })
            }
        }
    })*/

    //Suscripciones en Option API

    export default defineComponent({
        data() {
            return{
                comments: []
            }
        },
        apollo: {
            $subscribe: {
                comments: {
                    query: gql`
                        subscription {
                            comments: commentCreated {
                                name
                                text
                            }
                        }
                    `,
                    result({ data }) {
                        this.comments = data.commentCreated
                    }
                }
            }
        }
    })
</script>

<style scoped>

</style>