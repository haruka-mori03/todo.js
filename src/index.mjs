import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";
  
  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //divタグの子要素にliタグ
  div.appendChild(li);

  //未完了リストに追加
  document.getElementById("imcompleat-list").appendChild(div);
};

document
.getElementById("add-button")
.addEventListener("click",() => onClickAdd ());