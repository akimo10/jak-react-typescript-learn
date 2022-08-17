export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
    //複数開発時に、後々意図していない返却値になる場合もあるので返却値も型指定するとデバッグが容易
    // return total.toString();
  };
  const onClickPractice = () => {
    //JSだと暗黙的に型変換してくれるのでエラーは出ない...TSは？
    // calcTotalFee("1,000");//TSで引数型指定しているとエラーがでてくれる
    console.log(getTotalFee(1000));
  };
  return (
    <div>
      <p>練習問題：返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題2を実行</button>
    </div>
  );
};
