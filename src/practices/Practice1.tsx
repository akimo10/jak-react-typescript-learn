export const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => {
    //JSだと暗黙的に型変換してくれるのでエラーは出ない...TSは？
    // calcTotalFee("1,000");//TSで引数型指定しているとエラーがでてくれる
    calcTotalFee(1000);
  };
  return (
    <div>
      <p>練習問題：引数の型指定</p>
      <button onClick={onClickPractice}>練習問題1を実行</button>
    </div>
  );
};
