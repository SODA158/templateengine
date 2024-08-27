import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { List, ListItemButton } from "@mui/material";
import EnableArea from "./EnableArea";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DocumentSidebar from "./DocumentSidebar";
import SaveIcon from "@mui/icons-material/Save";
import { useGetWorkStringsQuery } from "./reduxApi/WorksApi";
import { useDispatch, useSelector } from "react-redux";
import {
  setData,
  increment,
  decrement,
  incrementByAmount,
  setShowElement,
  setCount,
} from "./slices/DocumentDobySlice";

const DocumentBody = () => {
  // const [elements, setElements] = useState([]);
  // const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const { data = [], isLoading } = useGetWorkStringsQuery();

  // const [showElement, setShowElement] = useState(data[0]);
  // const [count, setCount] = useState(0);
  // const [documentChanged, setDocumentChanged] = useState(false);
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.workstrings.list);
  const showElement = useSelector((state) => state.workstrings.count);

  // const { data = [], isLoading } = useGetWorkStringsQuery();

  // const getChildList = (parent, list) => {
  //   const childdata = list
  //     .filter((data) => data.parentNumber === parent)
  //     .map((filtredelements) => ({
  //       idWorks: id,
  //       idDirectoryTypeRow: filtredelements.idDirectoryTypeRow,
  //       numberRow: filtredelements.numberRow,
  //       prefixTitle: filtredelements.prefixTitle,
  //       prefix: filtredelements.prefix,
  //       title: filtredelements.title,
  //       content: filtredelements.content,
  //       parentNumber: filtredelements.parentNumber,
  //       child: getChildList(filtredelements.numberRow, list),
  //       active: false,
  //     }));
  //   return childdata;
  // };

  // const GetArias = () => {
  //   const chapterdata = data.map((element) => ({
  //     idWorks: id,
  //     idDirectoryTypeRow: element.idDirectoryTypeRow,
  //     numberRow: element.numberRow,
  //     prefixTitle: element.directoryNameRow,
  //     prefix: element.prefix,
  //     title: element.title,
  //     content: element.content,
  //     parentNumber: element.parentNumber,
  //     child: null,
  //     active: false,
  //   }));
  //   const chapterlist = chapterdata
  //     .filter((element) => element.parentNumber === null)
  //     .map((element) => element);
  //   chapterlist.map(
  //     (element) =>
  //       (element.child = getChildList(element.numberRow, chapterdata))
  //   );
  //   // setShowElement(chapterdata[0]); // Устанавливается первый раздел по-умолчанию

  //   // chapterdata.map(
  //   //   (element) =>
  //   //     (element.child = getChildList(element.numberRow, chapterdata))
  //   // );
  //   //   const chapterlist = chapterdata
  //   //     .filter((element) => element.parentNumber === null)
  //   //     .map((element) => element);
  //   //   setShowElement(chapterlist[0]);
  //   //   setElements(chapterlist);
  //   //   setLoading(true);
  //   //   return arias;
  //   // }
  //   // setElements();
  //   // setLoading(true);
  //   // return;
  //   setElements(chapterlist);
  // };

  // const GetAreas = () =>{

  //   dispatch(setData(data));

  // }

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    dispatch(setCount(data.length));

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  if (isLoading) return <div>Идет загрузка данных</div>;
  // else dispatch(setData(data));
  // const getChildList = (parent, list) => {
  //   const childdata = list
  //     .filter((data) => data.parentNumber === parent)
  //     .map((filtredelements) => ({
  //       idWorks: id,
  //       idDirectoryTypeRow: filtredelements.idDirectoryTypeRow,
  //       numberRow: filtredelements.numberRow,
  //       prefixTitle: filtredelements.prefixTitle,
  //       prefix: filtredelements.prefix,
  //       title: filtredelements.title,
  //       content: filtredelements.content,
  //       parentNumber: filtredelements.parentNumber,
  //       child: getChildList(filtredelements.numberRow, list),
  //       active: false,
  //     }));
  //   return childdata;
  // };

  // const GetArias = () => {
  //   const chapterdata = data.map((element) => ({
  //     idWorks: id,
  //     idDirectoryTypeRow: element.idDirectoryTypeRow,
  //     numberRow: element.numberRow,
  //     prefixTitle: element.directoryNameRow,
  //     prefix: element.prefix,
  //     title: element.title,
  //     content: element.content,
  //     parentNumber: element.parentNumber,
  //     child: null,
  //     active: false,
  //   }));
  //   const chapterlist = chapterdata
  //     .filter((element) => element.parentNumber === null)
  //     .map((element) => element);
  //   chapterlist.map(
  //     (element) =>
  //       (element.child = getChildList(element.numberRow, chapterdata))
  //   );
  //   // setShowElement(chapterdata[0]); // Устанавливается первый раздел по-умолчанию

  //   // chapterdata.map(
  //   //   (element) =>
  //   //     (element.child = getChildList(element.numberRow, chapterdata))
  //   // );
  //   //   const chapterlist = chapterdata
  //   //     .filter((element) => element.parentNumber === null)
  //   //     .map((element) => element);
  //   //   setShowElement(chapterlist[0]);
  //   //   setElements(chapterlist);
  //   //   setLoading(true);
  //   //   return arias;
  //   // }
  //   // setElements();
  //   // setLoading(true);
  //   // return;
  //   setElements(chapterlist);
  // };

  // const flattenElements = (arr) => {
  //   let result = [];
  //   arr.forEach((element) => {
  //     result.push({
  //       idWorks: Number(id),
  //       idDirectoryTypeRow: element.idDirectoryTypeRow,
  //       prefixTitle: element.prefixTitle,
  //       numberRow: element.numberRow,
  //       prefix: element.prefix,
  //       title: element.title,
  //       content: element.content,
  //       parentNumber: element.parentNumber,
  //     });
  //     if (element.child) {
  //       result = result.concat(flattenElements(element.child));
  //     }
  //   });
  //   return result;
  // };

  // const elementChange = (array, row) => {
  //   let result = [];
  //   array.forEach((element) => {
  //     if (element.child.length > 0) {
  //       const child = elementChange(element.child, row);
  //       element.child = child;
  //     }
  //     if (element.numberRow === row.numberRow) {
  //       element = row;
  //     }
  //     result.push(element);
  //   });
  //   return result;
  // };

  // const SetEnableArea = (row) => {
  //   setElements(elementChange([...data], row));
  //   setDocumentChanged(true);
  // };

  // const PostData = async () => {
  //   if (window.confirm("Вы действительно хотите сохранить?")) {
  //     const NewData = flattenElements([...data]);
  //     const option = {
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(NewData),
  //     };
  //     const url = "https://localhost:7154/api/User/SaveWork/" + id;
  //     const result = await fetch(url, option);
  //     if (result.ok) alert("Успешное сохранение");
  //     else alert("Ошибка сохранения");
  //   } else {
  //     console.log("Сохранение отменено");
  //   }
  // };

  // const handleElementChange = (changedElement) => {
  //   const updatedElements = data.map((element) =>
  //     element.numberRow === changedElement.numberRow ? changedElement : element
  //   );
  //   setElements(updatedElements);
  // };

  // const DeleteElement = (deletedElement) => {
  //   const updatedElements = data.map((element) =>
  //     element.prefix > deletedElement.prefix
  //       ? { ...element, prefix: element.prefix - 1 }
  //       : element
  //   );
  //   const deletedElements = updatedElements.filter(
  //     (element) => element.numberRow !== deletedElement.numberRow
  //   );
  //   setElements(deletedElements);
  //   setDocumentChanged(true);
  // };

  // const showArea = (enableElement) => {
  //   setShowElement(enableElement);
  // };

  // const addChapter = () => {
  //   let LastIndex = 0;
  //   data.forEach((element, index) => {
  //     if (element.idDirectoryTypeRow === 5) {
  //       LastIndex = index + 1;
  //     }
  //   });
  //   const newelement = {
  //     idWorks: Number(id),
  //     idDirectoryTypeRow: 5,
  //     numberRow: count + 1,
  //     prefixTitle: "Раздел",
  //     prefix: (
  //       data.filter((element) => element.idDirectoryTypeRow === 5).length + 1
  //     ).toString(),
  //     title: "Новый раздел",
  //     content: "",
  //     parentNumber: null,
  //     child: [],
  //     active: true,
  //   };
  //   setCount(count + 1);
  //   const newarr = [
  //     ...data.slice(0, LastIndex),
  //     newelement,
  //     ...data.slice(LastIndex),
  //   ];
  //   setElements(newarr);
  // };

  // console.log(elements);
  // else GetArias();

  return (
    // <div className="Work" id={id} style={{ maxHeight: "900px" }}>
    //   <div style={{ textAlign: "center", borderColor: "black", border: "5px" }}>
    //     <ListItemButton
    //       // onClick={PostData}
    //       alignItems="center"
    //       style={{
    //         textAlign: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <SaveIcon />
    //     </ListItemButton>
    //   </div>

    //   <div style={{ display: "flex" }}>
    //     <List
    //       style={{
    //         overflowY: "auto",
    //         overflowWrap: "break-word",
    //         maxHeight: "500px",
    //         minwidth: "25vw",
    //         maxWidth: "25vw",
    //         borderColor: "black",
    //         border: "solid",
    //         borderWidth: "1px",
    //         marginLeft: "5px",
    //         borderRadius: "2px",
    //       }}
    //       sx={{ width: "100%", bgcolor: "background.paper" }}
    //       component="nav"
    //       aria-labelledby="nested-list-subheader"
    //     >
    //       {data
    //         .filter((filtredelement) => filtredelement.parentNumber === null)
    //         .map((element) => (
    //           // <div>{element.directoryNameRow}</div>
    //           <DocumentSidebar
    //             row={element}
    //             key={element.numberRow}
    //             // onElement={showArea}
    //             // deleteElement={DeleteElement}
    //             // ElementChange={handleElementChange}
    //             // type={false}
    //             lastindex={data.length}
    //             // setLastIndex={setCount}
    //             // addElementChange={handleElementChange}
    //             showelement={showElement == null ? data[0] : showElement}
    //           />
    //         ))}
    //       <div style={{ textAlign: "center", justifyContent: "center" }}>
    //         <ListItemButton
    //           alignItems="center"
    //           style={{ textAlign: "center", justifyContent: "center" }}
    //           // onClick={() => addChapter()}
    //         >
    //           <AddCircleIcon />
    //         </ListItemButton>
    //       </div>
    //     </List>

    //     <div style={{ width: "60vw" }}>
    //       <EnableArea
    //       // onElementChange={SetEnableArea}
    //       />
    //     </div>
    //   </div>
    // </div>
    <>
      {data.map((elem) => (
        <div>{elem.numberRow}</div>
      ))}
      <div>{showElement}</div>
    </>
  );
};

export default DocumentBody;
