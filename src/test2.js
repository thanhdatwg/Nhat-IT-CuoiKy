import { useState } from "react";

function useTest2() {
  const itemsDefault = ["A", "B", "C", "D"];
  const [items, setItems] = useState(itemsDefault);

  return { itemsDefault, items, setItems };
}

export default useTest2;
