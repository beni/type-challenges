// https://github.com/type-challenges/type-challenges/tree/main/questions/00898-easy-includes

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;

type Includes<T extends readonly unknown[], U> = { [K in keyof T]: Equal<T[K], U> } extends Record<
  number,
  false
>
  ? false
  : true;

type ResultIncludes = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>; // expected to be `false`
