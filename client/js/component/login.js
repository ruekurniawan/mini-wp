Vue.component('login', {
  data: function () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    submitLogin() {
      axios({
        method: 'POST',
        url: dbUrl + '/users/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          // console.log(data)
          localStorage.setItem('token', data.accessToken)
          this.$parent.isLogin = true
          this.$parent.myArticle()
          this.email = ''
          this.password = ''
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    }
  },

  template: `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <form>
        <h1>LOGIN</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp"
          placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" v-model="password" placeholder="Password">
              </div>
              <button type="submit" class="btn btn-primary" v-on:click.prevent="submitLogin">Login</button>
            </form>
          </div>
        </div>
  `
})