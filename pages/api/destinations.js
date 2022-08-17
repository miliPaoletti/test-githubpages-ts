import { getDocs, limit, orderBy, query } from "firebase/firestore";

import { collection } from "firebase/firestore";
import { database } from "../../firebase/initFirebase";

export const collectionRef = (path) => {
  return collection(database, path);
};

export const PATH_CAROUSEL = "dev/web/carousel";
export const CUSTOM_INFO = "dev/web/custom_info";
export const CEARA = "dev/destinations/ceara";

export const DESTINATIONS_DEV = "destinations";
export const PATH_CAROUSEL_DEV = "carousel";
export const CUSTOM_INFO_DEV = "custom_info";

const get_arr_with_id_and_data = (snapshot) => {
  let ret = snapshot.docs.map((doc) => {
    let obj = {};
    obj["id"] = doc.id;
    obj["data"] = doc.data();
    return obj;
  });
  return ret;
};

export const fetchDestinationsLimit = async () => {
  const q = query(collectionRef(CEARA), orderBy("views"), limit(RESULTS_INDEX));
  const snapshot = await getDocs(q);

  return get_arr_with_id_and_data(snapshot);
};

export const fetchAllDestinations = async () => {
  const snapshot = await getDocs(collectionRef(DESTINATIONS_DEV));

  return get_arr_with_id_and_data(snapshot);
};
