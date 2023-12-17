// https://github.com/type-challenges/type-challenges/tree/main/questions/03057-easy-push

type Push<T extends unknown[], U> = [...T, U];

type ResultPush = Push<[1, 2], '3'>; // exptected [1, 2, '3']
