import { TodoType } from "./types/todo";

// type TodoType = {
//   userId: number;
//   title: string;
//   //?をつけることで必須ではないことを明示できる
//   completed?: boolean;
// };

//Pick:共通型指定の中から、指定の型をピックアップ(ホワイトリスト)
//Omit:共通型指定の中から、不要なものを選択し除外(ブラックリスト)
export const Todo = (
  // props: Pick<TodoType, "userId" | "title" | "completed">
  props: Omit<TodoType, "id">
) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark} ${title}(ユーザー:${userId})`}</p>;
};
