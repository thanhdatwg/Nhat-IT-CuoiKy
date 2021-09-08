import "./test1.css";
import { useState } from "react";
import useTest2 from "./test2";

function Test2() {
  const [input, setInput] = useState("");
  const { itemsDefault, items, setItems } = useTest2();

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const handleAdd = () => {
    setItems([...items, input]);
    setInput("");
  };

  return (
    <div className="test1-container">
      <div className="test1-list">
        学生一覧： {`[${itemsDefault.join(", ")}]`}
      </div>
      <div>追加する名前を入力してください。</div>
      <div className="test1-item">
        <input value={input} onChange={handleChange} />
        <button onClick={() => handleAdd()}>確定</button>
      </div>

      <div>追加する名前： {input}</div>

      <div className="test1-list">新しい一覧： {`[${items.join(", ")}]`}</div>
    </div>
  );
}

export default Test2;
