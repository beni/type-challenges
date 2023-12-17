// https://github.com/type-challenges/type-challenges/tree/main/questions/00002-medium-return-type

type MyReturnType<T> = T extends (...args: any) => infer R ? R : never;

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type ResultMyReturnType = MyReturnType<typeof fn>; // should be "1 | 2"
