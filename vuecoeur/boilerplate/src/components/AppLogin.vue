
<template>
  <div>
    <h4 class='mv3'>{{login ? 'Login' : ' Signup'}}</h4>
    <div class='flex flex-column'>
      <input 
        v-show='!login'
        v-model='name'
        type='text'
        placeholder='Your Name'>
      <input 
        v-model='email'
        type='text'
        placeholder='Your email address'>
      <input 
        v-model='password'
        type='password'
        placeholder='Password'>
    </div>
    <div class='flex mt3'>
      <div
        class='pointer mr2 button'
        @click='confirm()'>
        {{login ? 'login' : 'create account'}}
      </div>
      <div 
        class='pointer button'
        @click="login = !login">
        {{ login ? 'need to create an account?' : 'already have an account?'}}
      </div>
    </div>
  </div>
</template>



<script>
  import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants/settings'
  import { CREATE_USER_MUTATION, SIGNIN_USER_MUTATION } from '../constants/graphql'

  export default {
    name: 'AppLogin',
    data() {
      return {
        email: '',
        login: true,
        name: '',
        password: ''
      }
    },
    methods: {
      confirm() {
        const { name, email, password } = this.$data

        if(this.login) {
          this.$apollo.mutate({
            mutation: SIGNIN_USER_MUTATION,
            variables: {
              email,
              password
            }
          }).then((result) => {
            const id = result.data.authenticateUser.id 
            const token = result.data.authenticateUser.token 
            this.saveUserData(id, token)
          }).catch((error) => {
            console.error('login error: ', error)
          })
        } else {
          this.$apollo.mutate({
            mutation: CREATE_USER_MUTATION,
            variables: {
              name,
              email,
              password
            }
          }).then((result) => {
            console.log('create user result: ', result)
            const id = result.data.signupUser.id
            const token = result.data.signupUser.token
            this.saveUserData(id, token)
          }).catch((error) => {
            console.error('create user error: ', error)
          })
        }
        this.$router.push({path: '/'})

      }, 
      saveUserData (id, token) {
        localStorage.setItem(GC_USER_ID, id)
        localStorage.setItem(GC_AUTH_TOKEN, token)
        this.$root.$data.userId = localStorage.getItem(GC_USER_ID)
      }
    }
  }
</script>


