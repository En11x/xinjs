type ArrayItrm<T> = T extends (infer V)[] ? V : never;
