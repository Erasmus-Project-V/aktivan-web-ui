import PocketBase from "pocketbase";

const pb = new PocketBase("https://api.aktivan.green-stem.eu").autoCancellation(false);

export { pb };