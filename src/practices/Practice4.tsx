export const Practice4 = () => {
  //tsconfig:strict:trueの場合、暗黙的なany型は許容していない・・・
  //新規なら(true)でいいと思う！、再構築等でjs流用の場合は(false)にしてコツコツ直していくのがいいかも
  // const calcTotalFee = (num) => {
  // const calcTotalFee = (num:any) => {
  //明示するか。
  const calcTotalFee = (num: number) => {
    //しっかり型指定するか。
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => {
    calcTotalFee(1000);
  };
  return (
    <div>
      <p>練習問題：設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
