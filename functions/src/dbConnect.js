import { MongoClient } from "mongodb";
import { mongo_credentials } from "../secrets.js";

export function dbConnect() {
    const client = new MongoClient(mongo_credentials.uri);
    return client.db(mongo_credentials.db);
};
