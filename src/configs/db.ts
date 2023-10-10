import app from "@/fb.config";
import { getFirestore } from "firebase/firestore";


const db = getFirestore(app)


export default db;