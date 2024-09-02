<template>
    <h1>Social Login</h1>

    <div class="containe-fluid d-flex gap-3 justify-content-center align-content-between">
      <button @click="loginGoogle" class="btn btn-primary">Login Google</button>
      <button @click="loginFacebook" class="btn btn-secondary"> Login Facebook</button>
      <button @click="loginTwitter" class="btn btn-alert">Login X</button>
      <button @click="loginGithub" class="btn btn-danger">Login Github</button>
    </div>

</template>

<script lang="ts" setup>
  import { GoogleAuthProvider, signInWithPopup, getAuth, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from 'firebase/auth'; 

  const googleProvider = new GoogleAuthProvider()
  const facebookProvider = new FacebookAuthProvider()
  const twitterProvider = new TwitterAuthProvider()
  const githubProvider = new GithubAuthProvider()

  const auth = getAuth()

  const loginGoogle = () =>{
    signInWithPopup(auth, googleProvider)
    .then( (result) =>{

      //Sacar el credencial usando google
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken

      alert('login success')


    })
    .catch( (error) =>
    {
      alert(error.message)
    })  
  }

  const loginFacebook = () =>{
    signInWithPopup(auth, facebookProvider)
    .then( (result) =>{

      //Sacar el credencial usando google
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken

      alert('login success')

    })
    .catch( (error) =>
    {
      alert(error.message)
    })
  }

  const loginTwitter = () =>{
    signInWithPopup(auth, twitterProvider)
    .then( (result) =>{

      //Sacar el credencial usando google
      const credential = TwitterAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken

      alert('login success')

    })
    .catch( (error) =>
    {
      alert(error.message)
    })

  }

  const loginGithub = () => {
    signInWithPopup(auth, githubProvider)
    .then( (result) =>{

      //Sacar el credencial usando google
      const credential = GithubAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken

      alert('login success')

    })
    .catch( (error) =>
    {
      alert(error.message)
    })

  }

</script>

<style scoped>

</style>