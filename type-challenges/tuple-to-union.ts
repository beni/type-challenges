// https://github.com/type-challenges/type-challenges/tree/main/questions/00010-medium-tuple-to-union

type TupleToUnion<T extends any[]> = T[number];
type TupleToUnion2<T extends any[]> = T extends (infer U)[] ? U : never;

type Arr = ['1', '2', '3'];

type ResultTupleToUnion = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
type ResultTupleToUnion2 = TupleToUnion2<Arr>; // expected to be '1' | '2' | '3'
