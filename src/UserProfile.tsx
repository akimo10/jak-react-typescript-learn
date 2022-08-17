import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

//join()が配列にしか利用できない関数なので、hobbiesがundefinedだとエラーが発生してしまう。
//その為、?をつけることでオプショナルチェイニングして回避する・・・？
export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
