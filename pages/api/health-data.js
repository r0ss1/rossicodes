import { db } from "../../firebase/config"
import { getDoc, collection, doc, getDocs, onSnapshot, orderBy, limit, query  } from "firebase/firestore";

export default async function handler(req, res) {
  console.log('running handler')
  let response = []
  const q = query(collection(db, "apple-health-data"), orderBy("timestamp", "desc"), limit(1));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    response.push(doc.data())
  });

  console.log(response)

  return res.status(200).json(response[0]);
}
