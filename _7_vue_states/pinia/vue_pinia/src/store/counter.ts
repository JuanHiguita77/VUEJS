import { defineStore } from "pinia";

export const userCounterStore = defineStore('counter', {
    state: () =>{
        return {
            count: 1 
        }
    },
    getters:{
        times2: (state) => state.count * 2
    },
    actions:{
        increment(n = 1){
            this.count += n
        }
    }
})