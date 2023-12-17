// https://github.com/type-challenges/type-challenges/tree/main/questions/00018-easy-tuple-length

type Length<T extends readonly any[]> = T['length'];

type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'];

type ResultLengthOfTuple1 = Length<tesla>; // expected 4
type ResultLengthOfTuple2 = Length<spaceX>; // expected 5
