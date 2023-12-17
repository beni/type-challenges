// https://github.com/type-challenges/type-challenges/tree/main/questions/00298-medium-length-of-string

type LengthOfString<T extends string, Acc extends string[] = []> = T extends `${infer Head}${infer Tail}`
  ? LengthOfString<Tail, [...Acc, Head]>
  : Acc['length'];
// It does not have to be Head ---^. Any string will work
// because we're counting the array elements in the end

type ResultLengthOfString = LengthOfString<'Hello'>;
