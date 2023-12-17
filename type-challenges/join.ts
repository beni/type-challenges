// https://github.com/type-challenges/type-challenges/blob/main/questions/05310-medium-join/README.md

type Join<T extends string[], U extends string | number> = T extends [
  infer Head extends string,
  ...infer Tail extends string[],
]
  ? `${Head}${Tail['length'] extends 0 ? '' : U}${Join<Tail, U>}`
  : '';

type ResultJoin = Join<['a', 'p', 'p', 'l', 'e'], '-'>; // expected to be 'a-p-p-l-e'
