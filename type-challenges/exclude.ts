// https://github.com/type-challenges/type-challenges/tree/main/questions/00043-easy-exclude

type MyExclude<T, U> = T extends U ? never : T;

type ResultMyExclude = MyExclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'
