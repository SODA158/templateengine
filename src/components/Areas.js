import React, { useRef, useState } from "react";
import "./css/editor.css";
import MyEditor from "./MyEditor";
import {
  TextFroalaConfig,
  ImageFroalaConfig,
  TableFroalaConfig,
  EquationFroalaConfig,
} from "./EditorConfig";

export const MainArea = ({ row, onElementChange }) => {
  const [updatedRow, setUpdatedRow] = useState(row);

  const handleChange = (name, value) => {
    const update = { ...updatedRow, [name]: value };
    setUpdatedRow(update);
    onElementChange(update);
  };

  return (
    <div
      className="DropChapter w3-row-padding"
      style={{
        borderColor: "black",
        border: "solid",
        borderWidth: "2px",
        borderRadius: "15px",
        marginLeft: "10px",
      }}
      id={updatedRow.numberRow ? updatedRow.numberRow : null}
    >
      <div>
        <div className="w3-container w3-margin-bottom w3-margin-top">
          <p>
            <b>{updatedRow.prefixTitle} </b>
            {/* <input
              placeholder="Введите название"
              defaultValue={updatedRow.title ? updatedRow.title : null}
              name="title"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            /> */}
          </p>
          <MyEditor
            config={TextFroalaConfig}
            data={updatedRow.content}
            changeElement={handleChange}
          /> 
        </div>
      </div>
    </div>
  );
};

export const Chapter = ({ row, onElementChange }) => {
  const [updatedRow, setUpdatedRow] = useState(row);

  const handleChange = (name, value) => {
    const update = { ...updatedRow, [name]: value };
    setUpdatedRow(update);
    onElementChange(update);
  };

  // const ChildElementChange = (changedElement) => {
  //   const updatedChildElement = updatedRow.child.map((childelement) =>
  //     childelement.numberRow === changedElement.numberRow
  //       ? changedElement
  //       : childelement
  //   );
  //   const updatedElement = updatedRow;
  //   updatedElement.child = updatedChildElement;
  //   setUpdatedRow(updatedElement);
  //   onElementChange(updatedRow);
  // };

  return (
    <div
      className="DropChapter w3-row-padding"
      style={{
        borderColor: "black",
        border: "solid",
        marginLeft: "10px",
        borderWidth: "2px",
        borderRadius: "15px",
      }}
      id={updatedRow.numberRow ? updatedRow.numberRow : null}
    >
      <div>
        <div className="w3-container w3-margin-bottom w3-margin-top">
          <div
            className="Content Chapter w3-container w3-white w3-border w3-round-xlarge"
            style={{
              backgroundColor: "#eee",
              borderRadius: "15px",
              minHeight: "500px",
            }}
          >
            <p>
              <b>
                Раздел{" "}
                {updatedRow.prefix
                  ? updatedRow.prefix
                  : document.getElementsByClassName("Chapter").length}{" "}
              </b>
              <input
                placeholder="Введите название"
                defaultValue={updatedRow.title ? updatedRow.title : null}
                name="title"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </p>{" "}
            <p draggable="true"></p>
            <MyEditor
              config={TextFroalaConfig}
              data={updatedRow.content}
              changeElement={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Subchapter = ({ row, onElementChange }) => {
  const [updatedRow, setUpdatedRow] = useState(row);

  const handleChange = (name, value) => {
    const update = { ...updatedRow, [name]: value };
    setUpdatedRow(update);
    onElementChange(update);
  };
  // const changeEditor = (data) => {
  //   const update = { ...updatedRow, content: data };
  //   setUpdatedRow(update);
  //   onElementChange(update);
  // };

  // const ChildElementChange = (changedElement) => {
  //   const updatedChildElement = updatedRow.child.map((childelement) =>
  //     childelement.numberRow === changedElement.numberRow
  //       ? changedElement
  //       : childelement
  //   );
  //   const updatedElement = updatedRow;
  //   updatedElement.child = updatedChildElement;
  //   setUpdatedRow(updatedElement);
  //   onElementChange(updatedRow);
  // };

  return (
    <div
      className="DropChapter w3-row-padding"
      style={{
        borderColor: "black",
        border: "solid",
        borderWidth: "2px",
        borderRadius: "15px",
        marginLeft: "10px",
      }}
      id={updatedRow.numberRow ? updatedRow.numberRow : null}
    >
      <div>
        <div className="w3-container w3-margin-bottom w3-margin-top">
          <div
            className="Content Subchapter w3-container w3-white w3-border w3-round-xlarge"
            style={{
              backgroundColor: "#eee",
              borderRadius: "15px",
              minHeight: "500px",
            }}
          >
            <p>
              <b>
                Раздел{" "}
                {updatedRow.prefix
                  ? updatedRow.prefix
                  : document.getElementsByClassName("Chapter").length}{" "}
              </b>
              <input
                placeholder="Введите название"
                defaultValue={updatedRow.title ? updatedRow.title : null}
                name="title"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </p>{" "}
            <p draggable="true"></p>
            <MyEditor
              config={TextFroalaConfig}
              data={updatedRow.content}
              changeElement={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ImageArea = ({ row, onElementChange }) => {
  const [updatedRow, setUpdatedRow] = useState(row);

  const handleChange = (name, value) => {
    const update = { ...updatedRow, [name]: value };
    setUpdatedRow(update);
    onElementChange(update);
  };

  return (
    <div
      className="DropChapter w3-row-padding"
      draggable="true"
      style={{
        borderColor: "black",
        border: "solid",
        marginLeft: "10px",
        borderWidth: "2px",
        borderRadius: "15px",
      }}
    >
      <div>
        <div className="w3-container w3-margin-bottom w3-margin-top">
          <div
            className="Content ImageArea w3-container w3-white w3-border w3-round-xlarge"
            style={{ backgroundColor: "#eee", minHeight: "500px" }}
          >
            <b>Рисунок {updatedRow.prefix}</b>
            <p>
              <input
                defaultValue={updatedRow.title ? updatedRow.title : null}
                placeholder="Введите название"
                name="title"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </p>
            <MyEditor
              config={ImageFroalaConfig}
              changeElement={handleChange}
              data={updatedRow.content}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// export const ListArea = ({ row, onElementChange }) => {
//   const [updatedRow, setUpdatedRow] = useState(row);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const update = { ...updatedRow, [name]: value };
//     setUpdatedRow(update);
//     onElementChange(update);
//   };

//   return (
//     <div
//       className="DropChapter w3-row-padding"
//       draggable="true"
//       style={{
//         borderColor: "black",
//         border: "solid",
//         borderWidth: "2px",
//         borderRadius: "15px",
//         marginLeft: "10px",
//       }}
//     >
//       <div>
//         <div className="w3-container w3-margin-bottom w3-margin-top">
//           <div
//             className="Content w3-container w3-white w3-border w3-round-xlarge"
//             style={{ backgroundColor: "#eee", minHeight: "500px" }}
//           >
//             <p>
//               <b>Список</b>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const Table = ({ row, onElementChange }) => {
  const [updatedRow, setUpdatedRow] = useState(row);

  const handleChange = (name, value) => {
    const update = { ...updatedRow, [name]: value };
    setUpdatedRow(update);
    onElementChange(update);
  };
  return (
    <div
      className="DropChapter w3-row-padding"
      style={{
        borderColor: "black",
        border: "solid",
        borderWidth: "2px",
        borderRadius: "15px",
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "5px",
        marginRight: "5px",
      }}
    >
      <div>
        <div className="w3-container w3-margin-bottom w3-margin-top">
          <div
            className="Content Image w3-container w3-white w3-border w3-round-xlarge"
            style={{ backgroundColor: "#eee" }}
          >
            <b>Таблица</b>
            <p>
              <input
                defaultValue={updatedRow.title ? updatedRow.title : null}
                placeholder="Введите название"
                name="title"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </p>
            <MyEditor
              config={TableFroalaConfig}
              data={updatedRow.content}
              changeElement={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Equation = ({ row, onElementChange }) => {
  const [updatedRow, setUpdatedRow] = useState(row);

  const handleChange = (name, value) => {
    const update = { ...updatedRow, [name]: value };
    setUpdatedRow(update);
    onElementChange(update);
  };

  return (
    <div
      className="DropChapter w3-row-padding"
      draggable="true"
      style={{
        borderColor: "back",
        border: "solid",

        borderWidth: "1px",
        borderRadius: "15px",
        marginLeft: "10px",
      }}
    >
      <div>
        <div className="w3-container w3-margin-bottom w3-margin-top">
          <div
            className="Content w3-container w3-white w3-border w3-round-xlarge"
            style={{
              backgroundColor: "#eee",
              textAlign: "center",
              minHeight: "500px",
            }}
          >
            <p>
              <b>Уравнение </b>
            </p>
            <MyEditor
              config={EquationFroalaConfig}
              changeElement={handleChange}
              data={updatedRow.content}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
