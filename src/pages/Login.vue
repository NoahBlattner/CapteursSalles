<template>
  <q-page padding>
    <q-card class="login">
      <q-tabs
        v-model="tab"
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login" />
        <q-tab name="signUp" label="Sign up" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <div class="text-h6">Login</div>
          <LoginForm/>
        </q-tab-panel>

        <q-tab-panel name="signUp">
          <div class="text-h6">Sign up</div>
          <SignUpForm/>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import LoginForm from 'components/SignIn/LoginForm.vue'
import SignUpForm from 'components/SignIn/SignUpForm'

export default {
  name: 'SignInPage',
  components: { SignUpForm, LoginForm },
  data () {
    return {
      tab: 'login'
    }
  }
}
</script>

<style scoped>
.login {
  max-width: 500px;
  width: auto;
  margin: 0 auto;
}
</style>
