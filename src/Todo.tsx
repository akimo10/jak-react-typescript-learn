type TodoType = {
  userId: number;
  title: string;
  //?をつけることで必須ではないことを明示できる
  completed?: boolean;
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark} ${title}(ユーザー:${userId})`}</p>;
};
