import { FC, VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

//FC:childrenを暗黙的に含む(18系からは含まない)
//VFC:childrenを含まない(17系の暫定型指定)
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
