var dbUrl = 'http://localhost:3000'
new Vue({
  el: '#app',
  data: {
    // name: '',
    // email: '',
    // password: '',
    showRegisterForm: false,
    // title: '',
    // content: '',
    results: [],
    search: '',
    isLogin: localStorage.getItem('token') ? true : false,
    isList: false,
    isAdd: false,
    showEditForm: false,
    id: ''
  },
  methods: {
    registerForm() {
      this.showRegisterForm = !this.showRegisterForm
    },

    ListArticle() {
      this.isList = true
      this.isAdd = false
      this.showEditForm = false
      // this.myArticle()

    },

    AddArticle() {
      this.isAdd = true
      this.isList = false
    },

    // submitRegister() {
    //   axios({
    //     method: 'POST',
    //     url: dbUrl + '/users/registrasi',
    //     data: {
    //       name: this.name,
    //       email: this.email,
    //       password: this.password
    //     }
    //   })
    //     // console.log({data})
    //     .then(({ data }) => {
    //       console.log(data.msg);
    //       this.name = '';
    //       this.email = '';
    //       this.password = '';
    //     })
    //     .catch((err) => {
    //       console.log(err.response);
    //     });
    // },
    // submitLogin() {
    //   axios({
    //     method: 'POST',
    //     url: dbUrl + '/users/login',
    //     data: {
    //       email: this.email,
    //       password: this.password
    //     }
    //   })
    //     .then(({ data }) => {
    //       console.log(data)
    //       localStorage.setItem('token', data.accessToken)
    //       this.isLogin = true
    //       this.myArticle()
    //       this.email = ''
    //       this.password = ''
    //     })
    //     .catch((err) => {
    //       console.log(err.response.data)
    //     })
    // },

    myArticle() {
      axios({
        method: 'GET',
        url: dbUrl + '/articles',
        headers: { token: localStorage.getItem('token') }
      })
        .then(({ data }) => {
          this.results = data
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    },

    // addArticle() {
    //   axios
    //     .post(dbUrl + '/articles', { title: this.title, content: this.content },
    //       { headers: { token: localStorage.getItem('token') }}
    //     )
    //     .then(({ data }) => {
    //       this.content = ''
    //       this.title = ''
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // },

    editForm(value) {
      this.showEditForm = true
      this.isList = false
      this.title = value.title
      this.content = value.content
      this.id = value._id
      // console.log(value)
    },

    editArticle() {
      // console.log(this.id)
      axios({
        method: 'PUT',
        url: dbUrl + `/articles/${this.id}`,
        data: {
          title: this.title,
          content: this.content
        },
        headers: { token: localStorage.getItem('token') }
      })
        .then(({ data }) => {
          console.log(data)
          console.log(data.msg)
          this.ListArticle()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    deleteArticle(id) {
      // console.log('masuk')
      axios({
        method: 'DELETE',
        url: dbUrl + `/articles/${id}`,
        headers: { token: localStorage.getItem('token') }
      })
        .then(({ data }) => {
          // console.log(data)
          console.log(data.msg)
          this.ListArticle()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    logoutSubmit() {
      localStorage.removeItem('token');
      this.isLogin = false;
    }

  },

  created() {
    axios
      .get(dbUrl + '/articles', {
        headers: { token: localStorage.getItem('token') }
      })
      .then(({ data }) => {
        this.results = data
      })
      .catch(err => {
        console.log(err)
      })
  },
  computed: {
    filterTitle: function () {
      let regex = new RegExp(".*" + this.search + ".*", "i");
      return this.results.filter((result) => {
        return result.title.match(regex)
      })
    }
  },
  components: {
    wysiwyg: vueWysiwyg.default.component,
  }
})