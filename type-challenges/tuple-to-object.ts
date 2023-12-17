// https://github.com/type-challenges/type-challenges/tree/main/questions/00011-easy-tuple-to-object

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type TupleToObject<T extends readonly PropertyKey[]> = {
  [K in T[number]]: K;
};

type ResultTupleToObject = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
