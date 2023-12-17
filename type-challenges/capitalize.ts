// https://github.com/type-challenges/type-challenges/issues/24194

type MyCapitalize<S extends string> = S extends `${infer Head}${infer Rest}`
  ? `${Uppercase<Head>}${Rest}`
  : S;

type ResultCapitalize = MyCapitalize<'hello world'>; // expected to be 'Hello world'
