import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  CreateIncompleatList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromInCompleteList = (target) => {
  document.getElementById("imcompleat-list").removeChild(target);
};

//未完了リストに追加する関数
const CreateIncompleatList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";
  
  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //buttonの完了タグ生成
  const compleaButton = document.createElement("button");
  compleaButton.innerText = "完了";
  compleaButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（div）を未完了リストから削除
    deleteFromInCompleteList(compleaButton.parentNode);

    //完了ボタンリストに追加する要素
    const addTarget = compleaButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //divタグ以下を初期化
    addTarget.textContent = null;

    //liタグの生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {

      //押された戻すボタンの親タグ（div）を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("compleat-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      CreateIncompleatList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("compleat-list").appendChild(addTarget);
  });

  //buttonの削除タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromInCompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(compleaButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("imcompleat-list").appendChild(div);
}

document
.getElementById("add-button")
.addEventListener("click",() => onClickAdd ());