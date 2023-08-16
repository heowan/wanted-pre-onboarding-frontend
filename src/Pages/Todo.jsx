import React, { useEffect, useState } from "react";
import { getListApi, createListApi } from "../Services/api";
import ListItem from "../Component/ListItem";

const Todo = () => {
  const [data, setData] = useState([]);
  const [content, setContent] = useState("");

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleClickAddBtn = (e) => {
    if (content !== "") {
      createListApi(content, setData);
      setContent("");
    }
  };

  useEffect(() => {
    getListApi(setData);
  }, []);

  return (
    <div>
      <div>
        <input
          data-testid="new-todo-input"
          onChange={handleChangeContent}
          value={content}
        />
        <button data-testid="new-todo-add-button" onClick={handleClickAddBtn}>
          추가
        </button>
      </div>
      <ul>{data && data.map((el) => <ListItem key={el.id} item={el} />)}</ul>
    </div>
  );
};

export default Todo;
