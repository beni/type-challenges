// https://github.com/type-challenges/type-challenges/tree/main/questions/00062-medium-type-lookup

type LookUp<U, T extends string> = U extends { type: T } ? U : never;

// Better
type LookUp2<U extends { type: string }, T extends U['type']> = U extends { type: T } ? U : never;

interface Cat {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

interface Dog {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
}

type ResultLookUp = LookUp<Cat | Dog, 'dog'>; // expected to be `Dog
type ResultLookUp2 = LookUp2<Cat | Dog, 'dog'>; // expected to be `Dog
