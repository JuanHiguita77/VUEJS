import { defineStore } from 'pinia'

export const useExample = defineStore('example', {
    state: () => ({
        count: 0
    }),
    actions: {
        init(){
            this.count = parseInt(localStorage.getItem('count') || '0')
        },
        increment() {
            this.count++
            
            //Guardar en localStorage
            localStorage.setItem('count', this.count.toString())
        }
    },
    //persist: true -- Solo activar el guardado de este store, una manera mas completa:
    persist: {
        storage: sessionStorage,
        paths: ['count']
    }
})