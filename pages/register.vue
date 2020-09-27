<template>
  <div class="max-w-md mx-auto pt-6">
    <div>
      <h1 class="mb-3">Register</h1>

      <!-- Unauthenticated -->
      <div>
        <!-- Register -->
        <form v-if="step === steps.register" @submit.prevent="register">
          <input v-model="registerForm.email" type="email" placeholder="Email" class="form-control">
          <input v-model="registerForm.password" type="password" placeholder="Password" class="form-control">
          <button type="submit" class="button-green">Register</button>
        </form>

        <!-- Configure Registration -->
        <form v-else @submit.prevent="confirm">
          <input v-model="confirmForm.email" tyupe="email" placeholder="Email" class="form-control">
          <input v-model="confirmForm.password" type="password" placeholder="Password" class="form-control">
          <button type="submit" class="button-green">Confirm</button>
        </form>

        <nuxt-link to="/login"> Have an account? login</nuxt-link>
      </div>
      <div>
        You're logged in - go you!
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component, Watch } from 'vue-property-decorator'


type registerFormat = {
  email: string,
  password: string
}

type confirmFormat = {
  email: string,
  code: string
}

@Component
export default class Register extends Vue{
  steps = {
  register: 'REGISTER',
  confirm: 'CONFIRM',
  }

  step : string = this.steps.register
  registerForm : registerFormat = {
    email: '',
    password: ''
  }
  confirmForm : confirmFormat = {
    email: '',
    code: ''
  }
  $store: any
  $router: any

  async register() {
    try {
      await this.$store.dispatch('auth/register', this.registerForm)
      this.confirmForm.email = this.registerForm.email
      this.step = this.steps.confirm
    } catch(error) {
      console.log({ error })
    }
  }

    async confirm() {
    try {
      await this.$store.dispatch('auth/confirmRegistration', this.confirmForm)
      await this.$store.dispatch('auth/login', this.registerForm)
      this.$router.push('/')
    } catch(error) {
      console.log({ error })
    }
  }
}
</script>