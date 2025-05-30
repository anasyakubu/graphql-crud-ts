import express from "express";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
import schema from "./schema/schema";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || "your-mongo-uri", {})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// GraphQL endpoint
app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/graphql`);
});
