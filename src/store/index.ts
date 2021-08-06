import { createStore } from "vuex";
import { IRootState } from "@/store/interfaces";
import { CounterStoreModuleTypes } from "./modules/counter/types";
import { RootStoreModuleTypes } from "./modules/root/types";

import root from "./modules/root";

export const store = createStore<IRootState>(root);

type StoreModules = {
  counterModule: CounterStoreModuleTypes;
  root: RootStoreModuleTypes;
};

export type Store = CounterStoreModuleTypes<
  Pick<StoreModules, "counterModule">
> &
  RootStoreModuleTypes<Pick<StoreModules, "root">>;
