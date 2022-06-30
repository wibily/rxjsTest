import { BehaviorSubject } from "rxjs";


export const excpetionServiceFeatureFlag = true;

const uuids = new Set<string>();
export const exceptions = new BehaviorSubject<{ a?: string }>({});

export const registerUuid = (uuid: string) => uuids.add(uuid);
export const removeUuid = (uuid: string) => uuids.delete(uuid);

const API_RESULTS = {
  a: "overlap error from BE"
};

const fakeAPICall = (req: string[]) => {
  const results = uuids.has("a") ? Promise.resolve(API_RESULTS) : Promise.resolve({});
  return results;
}

if (excpetionServiceFeatureFlag) {
  setInterval(() => {
    fakeAPICall(Array.from(uuids)).then((results) => exceptions.next(results));
  }, 1000);
}
