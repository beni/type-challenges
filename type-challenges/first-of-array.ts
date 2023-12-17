// https://github.com/type-challenges/type-challenges/tree/main/questions/00014-easy-first

type First<T extends any[]> = T['length'] extends 0 ? never : T[0];

type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type ResultFirst1 = First<arr1>; // expected to be 'a'
type ResultFirst2 = First<arr2>; // expected to be 3
