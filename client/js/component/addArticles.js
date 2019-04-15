Vue.component('add-articles', {
  data: function () {
    return {
      title: '',
      content: '',
    }
  },
  methods: {
    addArticle() {
      axios
        .post(dbUrl + '/articles', { title: this.title, content: this.content },
          { headers: { token: localStorage.getItem('token') } }
        )
        .then(({ data }) => {
          console.log(data)
          this.content = ''
          this.title = ''
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  template: `
  <div class="container-fluid layout-list d-block" id="layout-add-content">
                <div class="row">
                  <div class="col" id="add-article">
                    <h5 class="card-header info-color white-text text-center py-4">
                      <strong>Add Article</strong>
                    </h5>
                    <form method="post" v-on:submit.prevent="addArticle">
                      <!-- Material input Title -->
                      <div class="md-form form-group mt-5">
                        <label for="formGroupExampleInputMD">Title</label>
                        <input type="text" v-model="title" class="form-control" placeholder="Input Title">
                      </div>

                      <!-- Material input Article-->
                      <div class="md-form form-group mt-5">
                        <wysiwyg v-model="content"></wysiwyg>
                      </div>
                      <button type="submit" class="btn btn-primary pr-4 pl-4" id="submit-todo">Submit</button>
                    </form>
                    <!-- Material form group -->
                  </div>
                </div>
              </div>
  `,
  components: {
    wysiwyg: vueWysiwyg.default.component,
  }
})