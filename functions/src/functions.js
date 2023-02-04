import { dbConnect } from "./dbConnect.js";
const collectionName = "games";

// get all
export async function getAllDocs(req, res) {
    const db = dbConnect();
    const collection = await db.collection(collectionName).find({}).limit(10).toArray();
    
    console.table(collection);
    res.send(collection);
};

// get search
export async function findDoc(req, res) {
    const { search } = req.params

    const db = dbConnect();
    const collection = await db.collection(collectionName)
        .find({title: search})
        .toArray();

    console.table(collection);
    res.send(collection);
};

// post doc
export async function postDoc(req, res) {
    const newDoc = req.body

    const db = dbConnect();
    await db.collection(collectionName).insertOne(newDoc)
        .catch(err => {
            res.status(500).send(err)
            return
        })
        res.status(201).send( {message: "New Doc Inserted"} );
};

// delete doc
export async function deleteDoc(req, res) {
    const { docId } = req.params

    const db = dbConnect();
    const collection = await db.collection(collectionName).deleteOne({id:Number(docId)});

    console.table(collection);
    res.send(collection);
};
