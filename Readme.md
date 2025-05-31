```markdown
# GraphQL CRUD API with Node.js, TypeScript, Express & MongoDB

This project is a simple CRUD API built with Node.js, TypeScript, Express, MongoDB (using Mongoose), and GraphQL. It allows you to create, read, update, and delete posts through a single GraphQL endpoint.

---

## 📂 Project Structure

```

graphql-crud-ts/
├── src/
│   ├── models/
│   │   └── Post.ts
│   ├── schema/
│   │   └── schema.ts
│   ├── index.ts
├── .env
├── package.json
├── tsconfig.json
├── README.md

````

---

## 🚀 Features

✅ Create new posts  
✅ Get all posts  
✅ Get a single post by ID  
✅ Update a post  
✅ Delete a post

---

## ⚙️ Technologies Used

- **Node.js** - Server runtime
- **TypeScript** - Strongly typed JavaScript
- **Express** - Web framework
- **GraphQL** - API query language
- **Mongoose** - MongoDB object modeling
- **MongoDB** - NoSQL database

---

## 🛠️ Installation & Setup

1️⃣ Clone the repository:
```bash
git clone <repo-url>
cd graphql-crud-ts
````

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Create a `.env` file in the root:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/graphqlcrud?retryWrites=true&w=majority
```

4️⃣ Start the development server:

```bash
npm run dev
```

The server will run at:

```
http://localhost:5000/graphql
```

---

## 🌐 Testing in Postman

Open Postman and send `POST` requests to:

```
http://localhost:5000/graphql
```

### 🔹 Create a Post

```json
{
  "query": "mutation { addPost(title: \"My First Post\", content: \"Hello World\") { id title content } }"
}
```

### 🔹 Get All Posts

```json
{
  "query": "{ posts { id title content } }"
}
```

### 🔹 Get Single Post by ID

```json
{
  "query": "{ post(id: \"<paste-post-id>\") { id title content } }"
}
```

### 🔹 Update a Post

```json
{
  "query": "mutation { updatePost(id: \"<paste-post-id>\", title: \"Updated Title\", content: \"Updated Content\") { id title content } }"
}
```

### 🔹 Delete a Post

```json
{
  "query": "mutation { deletePost(id: \"<paste-post-id>\") { id title content } }"
}
```

---

## 💡 Key Takeaways

✅ A single `/graphql` endpoint
✅ Flexible queries & mutations
✅ MongoDB & Mongoose for storage
✅ Easy testing with Postman
✅ TypeScript for type safety

---

## 📝 License

This project is open-source and free to use under the [MIT License](LICENSE).

---

Enjoy hacking! 🚀

```

Let me know if you want to tweak the README further (like adding screenshots, deployment instructions, or contributing guidelines).
```
