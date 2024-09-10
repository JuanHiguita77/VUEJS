<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <div class="container" v-if="loading">
    <h3>Loading</h3>
  </div>

  <div v-else>
    <ul>
      <li v-for="(comment, index) in result.getCommentsFromUser" :key="index"> <strong>{{ comment.name }}</strong>: {{ comment.text }}</li>

    </ul>
  </div>

  <div class="error" v-if="error">
    <h3>Error</h3>
  </div>

  <!-- Podemos crear botones con refresco de datos manual -->
  <button @click="refetch">Refresh</button>

  <h1>MUTATIONS</h1>

  <button @click="createComment()">Send</button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useQuery, useMutation } from '@vue/apollo-composable';
  import gql from 'graphql-tag';
/*
  export default defineComponent({
    setup() {
      const { result, loading, error, refetch, onResult, onError } = useQuery(gql`
        query($name: String!) {
          getCommentsFromUser(name: $name) {
            name
            text
          }
        }`, () => ({
          name: "User 1"
        }), {
          //carga la cache primero para mejorar el rendimiento
          fetchPolicy: 'cache-first',
          pollInterval: 5000
        })

      onResult((queryResult) =>{
        console.log(queryResult.data)
        console.log(queryResult.loading)
        console.log(queryResult.networkStatus)
      })

      onError((error) =>{
        console.log(error.graphQLErrors);
      })

      //Mutations

      const { mutate: createComment } = useMutation(gql`
          mutation CreateComment($name: String!, $text: String!) {
          createComment(name: $name, text: $text)
        }
      `, () => ({
        variables: {
          name: "juan variable",
          text: "Hi from variable"
        }
      }))

      //Mutations: se le dice cuando se va a modificar algo CRUD

    const { mutate: createComment, loading: createCommentLoading, error: createCommentError, on Done, onError } = useMutation(gql`
          mutation CreateComment($name: String!, $text: String!) {
          createComment(name: $name, text: $text)
        }
        `, () => ({
          variables: {
            name: "juan variable",
            text: "Hi from variable"
          },
      update: (cache, { data: { createComment }}) => {
        let data = cache.readQuery({ query: getAllComments})
        data = {
          ...data,
          comments: [
            ...data.comments,
            {
              name: "",
              text: ""
            }
          ]
        }
        cache.writeQuery({ query: getAllComments, data })
      }
    }))

      onDone((done) =>{
        console.log(done)
      })

      onError((error) =>{
        console.log(error.graphQLErrors);
      })

      return { result, loading, error, refetch, onResult, onError, createComment }
    }
  })*/
</script>

<style>

</style>
