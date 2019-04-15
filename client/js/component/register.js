Vue.component('register', {
  data: function () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    submitRegister() {
      axios({
        method: 'POST',
        url: dbUrl + '/users/registrasi',
        data: {
          name: this.name,
          email: this.email,
          password: this.password
        }
      })
        // console.log({data})
        .then(({ data }) => {
          console.log(data.msg);
          this.name = '';
          this.email = '';
          this.password = '';
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },

  template:
    `<div class="card" style="width: 18rem;">
          <div class="card-body">
            <form>
              <h1>REGISTER</h1>
              <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="name" class="form-control" v-model="name" aria-describedby="emailHelp"
                  placeholder="Enter email">
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp"
                  placeholder="Enter email">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" v-model="password" placeholder="Password">
              </div>
              <button type="submit" class="btn btn-primary" v-on:click="submitRegister">Register</button>
            </form>
          </div>
        </div>`
})
