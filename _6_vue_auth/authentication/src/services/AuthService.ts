import { ref, Ref } from "vue"

//ESTE SERVICIO SE MANEJA DE UNA MEJOR MANERA CON VUEX

/*export default createStore({
    state: {
      jwt: '',
      error: ''
    },
    actions: {
      // Async changes
  
      async login(state, email:string, password:string): Promise<boolean> {
        try {
  
            const resp = await fetch('http://localhost:8080/api/v1/auth/login', {
                method: 'POST',
                headers:{
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    userName: email,
                    password: password
                })
            })
  
            const response = await resp.json()
            
            if('errors' in response){
              state.error.value = 'Invalid Login'
  
                return false;
            }
  
            state.jwt = response.token
            return true;
  
        } catch (error) {
            console.log(error);
            return false
        }
      }
    }
  })*/



class AuthService{
    private jwt: Ref<string>
    private error: Ref<string>

    constructor(){
        this.jwt = ref('')
        this.error = ref('')
    }

    getJwt(): Ref<string>{
        return this.jwt
    }

    getError(): Ref<string>{
        return this.error
    }

    async login(email:string, password:string): Promise<boolean> {
        try {

            const resp = await fetch('http://localhost:8080/api/v1/auth/login', {
                method: 'POST',
                headers:{
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    userName: email,
                    password: password
                })
            })

            const response = await resp.json()
            
            if('errors' in response){
                this.error.value = 'Invalid Login'

                return false;
            }

            this.jwt = response.token
            return true;

        } catch (error) {
            console.log(error);
            return false
        }
    }
}

export default AuthService