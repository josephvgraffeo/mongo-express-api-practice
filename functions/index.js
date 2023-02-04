import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { mongo_credentials } from "./secrets.js";
import { getAllDocs, postDoc, findDoc, deleteDoc } from "./src/functions.js";

// for local host below
// const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

// get root
app.get("/", (req, res) => res.send("Mongo API: I am root"))

// get all
app.get("/getall", getAllDocs);

// get search
app.get("/search/:search", findDoc);

// add doc
app.post("/post", postDoc);

//delete
app.delete("/delete/:docId", deleteDoc);

// for localhost below
// app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

// for gcp
export const api = functions.https.onRequest(app);