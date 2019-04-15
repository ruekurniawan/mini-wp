Vue.component('listArticle', {
  data: function () {
    return {
      search: '',
    }
  },

  methods: {

  },

  template: `
  <ul style="list-style: none">
  <h1>List Article</h1>
  <input type="text" v-model="search" placeholder="search title">
  
  <li v-for="news in filterTitle">
    <div class="container-fluid layout-list d-block">
      <div class="card" style="width: align-self">
  
        <div class="card-body">
          <div class="view overlay rounded z-depth-1-half mb-4">
            <img class="card-img-top" :src="news.featured_image"
              style="max-height: 335px; object-fit: cover;">
            <a>
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>
          <h5 class="card-title"><a href="#">{{news.title}}</a></h5>
          <p class="card-text"><span v-html="news.content"></span></p>
          <button v-on:click.prevent="editForm(news)" type="submit" class="btn btn-primary pr-4 pl-4"
            id="update">Update</button>
          <button v-on:click.prevent="deleteArticle(news._id)" type="submit"
            class="btn btn-primary pr-4 pl-4" id="delete">Delete</button>
        </div>
      </div>
    </div>
  </li>
  </ul>`
})
