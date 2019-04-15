# mini-wp

Mini WP portofolio

>### API Endpoints for Article
| ROUTE             | HTTP | HEADER(S) |     BODY     |   DESCRIPTION   |
| ----------------- | ---- | --------- | ------------ | --------------- |
| `/articles/` | **GET** | `none` | `title: String (`**`Required`**`), content: String (`**`Required`**`), | Read a article |
| `/articles/` | **POST** | `none` | `title: String (`**`Required`**`), content: String (`**`Required`**`)` | Create Article |
| `/articles/:id` | **PUT** | `token` | `title: String, content: String`, | Update / Edit a article |
| `/articles/:id` | **DELETE** | `token` | `none` | Delete Article |


>### API Endpoints for User
| ROUTE             | HTTP | HEADER(S) |     BODY     |   DESCRIPTION   |
| ----------------- | ---- | --------- | ------------ | --------------- |
| `users/registrasi` | **POST** | `none` | `name: String (`**`Required`**`), email: String (`**`Required`**`), password: String (`**`Required`**`)` | Create a user |
| `users/login` | **POST** | `none` | `email: String (`**`Required`**`), password: String (`**`Required`**`)` | Login user |

### GET /articles/
Success (200)
```
[
    {
        __v:0
        _id:"5cb22f971e1eab6d82d9cfb5"
        author:Object
          {
            __v:0
            _id:"5cb1a98c5b6fb2411533d175"
            email:"keren@gmail.com"
            name:"Rudy Kurniawan"
          }
        content:"Pemrograman berbasis Vue Keren"
        created_at:"2019-04-13T18:36:50.678Z"
        title:"Vue Js"

    },
    {
        __v:0
        _id:"5cb22fa41e1eab6d82d9cfb6"
        author:Object
          {
            __v:0
            _id:"5cb1a98c5b6fb2411533d175"
            email:"keren@gmail.com"
            name:"Rudy Kurniawan"
          }
        content:"Pemrograman berbasis Vue"
        created_at:"2019-04-13T18:36:50.678Z"
        title:"JS Fiddle"
    }
]
```
Error
```
Internal Server Error(500):
    {
        message: 'Internal Server Error',
        error: error
    }

Invalid Token(400):
    {
        message: 'Invalid Token',
        error: 'Enter a valid token'
    }
```
### POST /articles
Success (201)
```
    {
        author: "5cb1a98c5b6fb2411533d175"
        content: "Pembelajaran dan praktisisasi pemrograman"
        created_at: "2019-04-14T23:17:00.036Z"
        title: "Program Vue JS"
        __v: 0
        _id: "5cb3c16e73df55397383cd05"
    }
```
Error
```
Internal Server Error(500):
    {
        message: 'Internal Server Error',
        error: error
    }

```
### PUT /articles/:id
Success (200)
```
{
  data :
    {
      author: "5cb1a98c5b6fb2411533d175"
      content: "Pemrograman berbasis Vue Keren"
      created_at: "2019-04-13T18:36:50.678Z"
      title: "Vue Js"
      __v: 0
      _id: "5cb22f971e1eab6d82d9cfb5"
    },
  msg: "Successfully update article"
}
```
Error
```
Internal Server Error(500):
    {
        message: 'Internal Server Error',
        error: error
    }

Invalid Token(400):
    {
        message: 'Invalid Token',
        error: 'Enter a valid token'
    }
Not Authorized(400): {
        message: 'Unautorized'
}

```
### DELETE /articles/:id
Success (200)
```
{
  {
      author: "5cb1a98c5b6fb2411533d175"
      content: "Pembelajaran dan praktisisasi pemrograman"
      created_at: "2019-04-14T23:17:00.036Z"
      title: "Program Vue JS"
      __v: 0
      _id: "5cb3c16e73df55397383cd05"
  },
  msg: "Success delete article"
}
```
Error
```
Internal Server Error(500):
    {
        message: 'Internal Server Error',
        error: error
    }

Invalid Token(400):
    {
        message: 'Invalid Token',
        error: 'Enter a valid token'
    }
Not Authorized(400): {
        message: 'Unautorized'
}

```

>### Usage Guide
```
For to use google cloud storage will be comming soon
```

>### Deploy Link
```
For deploy link will be comming soon
```
