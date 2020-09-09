# EDU API (PREP VII BENZ)

## Table Of Contents

1. [Project Overview](#project-overview)
2. [Usage](#usage)
   1. [Pre-requisites](#pre-requisites)
3. [Contributors](#contributors)

<br>

### **Project Overview**

EDU-API is for the EDU Q&A platform where people can ask questions andprovide responses.

### Environment Variables

**PORT** -- `server port number`

**DB_URL** -- `database URL`

**SECRET** -- `Secret key for verifying the token`

**NODE_ENV** -- `Specifies the Server environment (development, local, production)`

### **Usage**

`clone` this repository.

`cd` into project root directory.

run `npm install` to install all dependencies. (you must have [pre-requisites](#pre-requisites))

Run `npm start` to start the server.

Open up `Postman` and then test out the Endpoints.

##### **Pre-requisites**

- [Node Js](https://nodejs.org/en/download/)
- [Mongo DB](https://www.mongodb.com/try/download/community)

### **User CRUD Operations**

#### Create a User

Adds in a new single user into the Application.

| End Point             | Method | Params | Data Type |
| --------------------- | ------ | ------ | --------- |
| `/api/v1/user/create` | POST   | `none` | `none`    |

- **Request Body**

```json
{
  "username": "testuser",
  "email": "testemail@exampleuser.com",
  "password": "password"
}
```

- **Request Headers**

> None

- **Success Response:**

**Status: `200 OK`**

- **Sample Content:**

```json
{
  "Message": "User account succesfully created!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNTc2OTlmM2U4NjFjMDAxNzBhNTFhMSIsImlhdCI6MTU5OTU2NDE5MSwiZXhwIjoxNTk5NjUwNTkxfQ.Hkp5ruXBMYdJ4pYdQCIJbKfB5PU6hdss5lEXehtNGUc"
}
```

### **Contributors**

1. [Iden](https://github.com/kallyas)
2. [Dipan](https://github.com/diphan-source)
3. [Jane Aguti](https://github.com/jane2k)
4. [A. Isaac](https://github.com/Eyezoh)
5. [S. Samuel](https://github.com/ssendisamuel)
6. [S. Akullu](https://github.com/sarahakullu)

### **Leading Facilitator**

[David Buyinza](https://github.com/davidgoodson)

### License

[MIT](/LICENSE)
