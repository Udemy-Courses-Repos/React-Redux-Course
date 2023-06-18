import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, deleteTodoAction } from "./Redux/Actions/TodoActions";
import axios from "axios";
import {
  addPhotoAction,
  deletePhotoAction,
} from "./Redux/Actions/PhotoAPIActions";

function App() {
  const [name, setName] = useState();

  const dispatch = useDispatch();

  const [photos, setPhotos] = useState([]);

  // getting the global data.

  const user = useSelector((state) => state.UserReducers);

  const todoData = useSelector((state) => state.TodoReducers);

  const photoData = useSelector((state) => state.PhotoReducers);

  const getDataFromAPI = async () => {
    const res = await axios.get(
      "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=5"
    );

    // console.log(res.data);

    setPhotos(res.data.photos);

    dispatch(addPhotoAction(res.data.photos));
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  return (
    <div
      style={{
        margin: 200,
      }}
    >
      <div>{name}</div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <div>{user?.userData?.name}</div>

      <div>{user?.isCourseGood}</div>

      <button
        onClick={() => {
          // dispatch(updateUserDataAction(name));

          const todo = { id: Math.random(), name: name };

          dispatch(addTodoAction(todo));

          setName("");
        }}
      >
        Submit
      </button>

      {todoData?.todos?.map((item, key) => {
        return (
          <div key={item?.id}>
            {key + 1} . {item?.name}{" "}
            <div
              onClick={() => {
                dispatch(deleteTodoAction(item?.id));
              }}
            >
              Delete
            </div>
          </div>
        );
      })}

      <div>Local Data</div>

      {photos?.map((item, key) => {
        return (
          <div key={item?.id}>
            {key + 1} . {item?.description}{" "}
            <div>
              <img src={item?.url} style={{ width: 100, height: 100 }} />
            </div>
            <div
              style={{
                color: "red",
              }}
              onClick={() => {
                dispatch(deleteTodoAction(item?.id));
              }}
            >
              Delete
            </div>
          </div>
        );
      })}

      <div>Global Data</div>

      {photoData?.photos?.map((item, key) => {
        return (
          <div key={item?.id}>
            {key + 1} . {item?.description}{" "}
            <div>
              <img src={item?.url} style={{ width: 100, height: 100 }} />
            </div>
            <div
              style={{
                color: "red",
              }}
              onClick={() => {
                dispatch(deletePhotoAction(item?.id));
              }}
            >
              Delete
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;

// Actions
