// https://github.com/type-challenges/type-challenges/tree/main/questions/00268-easy-if

type If<C extends boolean, T, F> = C extends true ? T : F;

type ResultIfA = If<true, 'a', 'b'>; // expected to be 'a'
type ResultIfB = If<false, 'a', 'b'>; // expected to be 'b'
