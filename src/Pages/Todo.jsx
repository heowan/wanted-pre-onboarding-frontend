import React, { useEffect, useState } from "react";
import { getListApi } from "../Services/api";
import ListItem from "../Component/ListItem";

const Todo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getListApi(setData);
  }, []);

  return (
    <div>
      <div>
        <input data-testid="new-todo-input" />
        <button data-testid="new-todo-add-button">추가</button>
      </div>
      <ul>{data && data.map((el) => <ListItem key={el.id} item={el} />)}</ul>
    </div>
  );
};

export default Todo;
