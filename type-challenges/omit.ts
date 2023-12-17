// https://github.com/type-challenges/type-challenges/tree/main/questions/00003-medium-omit

type MyOmit<T, Key extends keyof T> = {
  [Prop in keyof T as Prop extends Key ? never : Prop]: T[Prop];
};

type MyOmit2<T, Key extends keyof T> = {
  [Prop in keyof T as Exclude<Prop, Key>]: T[Prop];
};

type MyOmit3<T, K extends keyof T> = {
  [Prop in Exclude<keyof T, K>]: T[Prop];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type ResultTodoPreview = MyOmit<Todo, 'description' | 'title'>; // expected to be { completed: boolean; }
type ResultTodoPreview2 = MyOmit2<Todo, 'description' | 'title'>; // expected to be { completed: boolean; }
type ResultTodoPreview3 = MyOmit3<Todo, 'description' | 'title'>; // expected to be { completed: boolean; }
