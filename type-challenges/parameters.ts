// https://github.com/type-challenges/type-challenges/tree/main/questions/03312-easy-parameters

const foo = (arg1: string, arg2: number): void => {};

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

type FunctionParamsType = MyParameters<typeof foo>; // expected [arg1: string, arg2: number]
