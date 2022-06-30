import { BehaviorSubject } from "rxjs";
import { excpetionServiceFeatureFlag } from "./App";

const uuids = new Set<string>();
export const exceptions = new BehaviorSubject<{ a?: string }>({});

export const registerUuid = (uuid: string) => uuids.add(uuid);
export const removeUuid = (uuid: string) => uuids.delete(uuid);

const API_RESULTS = {
  a: "overlap error from BE"
};

const fakeAPICall = (req: string[]) =>
  uuids.has("a") ? Promise.resolve(API_RESULTS) : Promise.resolve({});

if (excpetionServiceFeatureFlag) {
  console.log("loading interval");
  setInterval(() => {
    console.log("firing interval");
    // fakeAPICall(Array.from(uuids)).then((results) => exceptions.next(results));
  }, 1000);
}
