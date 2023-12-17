// https://github.com/type-challenges/type-challenges/tree/main/questions/00008-medium-readonly-2

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
} & {
  [P in keyof T as P extends K ? never : P]: T[P];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
};
// @ts-expect-error
todo.title = 'Hello'; // Error: cannot reassign a readonly property

// @ts-expect-error
todo.description = 'barFoo'; // Error: cannot reassign a readonly property

todo.completed = true; // OK
