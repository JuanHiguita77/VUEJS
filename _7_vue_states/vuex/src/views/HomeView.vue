<template>
  <div class="home">
    <h1> Counter </h1>

    <h2>{{ counter }} x 2 = {{ times2 }}</h2>
    <button @click="increment">Increment</button>

  </div>
</template>

<script lang="ts" setup>
  import { defineComponent, computed } from 'vue';
  import { mapMutations, mapState, mapGetters } from 'vuex';
  import { useStore } from 'vuex';

  const store = useStore()
  const counter = computed(() => store.state.counter)
  const times2 = computed(() => store.getters.times2)
  const increment = () => store.commit('setCounter', counter.value + 1)
  
  //option API
  /*export default defineComponent({
    name: 'HomeView',

    computed:{
      ...mapState(['counter']),
      ...mapGetters(['times2'])
    
      //same thing

      /*
      //Read the counter from store
      counter(){
        return this.$store.state.counter
      },
      //Use the incrementer from store
      times2(){
        return this.$store.getters.times2
      }*/
    /*},
    methods:{
      //Increment the value
      ...mapMutations(['setCounter']),

      increment(){
        this.setCounter(this.counter + 1)
      }*/

      /*
      increment(){
        this.$store.commit('setCounter', this.counter + 1)
      }
    }
  })*/

  //Composition API sin setup
  /*export default defineComponent({
    name: 'HomeView',
    setup(){
      const store = useStore()
      const counter = computed(() => store.state.counter)
      const times2 = computed(() => store.getters.times2)
      const increment = () => store.commit('setCounter', counter.value + 1)

      return { increment, counter, times2 }
    }
  })*/
</script>
