import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { List, ListItemButton } from "@mui/material";
import EnableArea from "./EnableArea";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DocumentSidebar from "./Menu";
import SaveIcon from "@mui/icons-material/Save";

const DocumentBody = () => {
  const [elements, setElements] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [showElement, setShowElement] = useState(null);
  const [count, setCount] = useState(0);
  const [documentChanged, setDocumentChanged] = useState(false);

  const getChildList = (parent, list) => {
    const childdata = list
      .filter((elements) => elements.parentNumber === parent)
      .map((filtredelements) => ({
        idWorks: id,
        idDirectoryTypeRow: filtredelements.idDirectoryTypeRow,
        numberRow: filtredelements.numberRow,
        prefixTitle: filtredelements.prefixTitle,
        prefix: filtredelements.prefix,
        title: filtredelements.title,
        content: filtredelements.content,
        parentNumber: filtredelements.parentNumber,
        child: getChildList(filtredelements.numberRow, list),
        active: false,
      }));
    return childdata;
  };

  const GetArias = async () => {
    const result = await fetch("https://localhost:7180/api/Construct/Work/" + id); //API строк содержащихся в работе
    if (result.ok) { // Проверка на ответ API 
      const arias = await result.json(); // Разбиение на массив
      setCount(arias.length); //Установка начального индекса
      const chapterdata = arias.map((element) => ({
        idWorks: id,
        idDirectoryTypeRow: element.idDirectoryTypeRow,
        numberRow: element.numberRow,
        prefixTitle: element.directoryNameRow,
        prefix: element.prefix,
        title: element.title,
        content: element.content,
        parentNumber: element.parentNumber,
        child: null,
        active: false,
      }));
      setShowElement(chapterdata[0]); // Устанавливается первый раздел по-умолчанию

      chapterdata.map(
        (element) =>
          (element.child = getChildList(element.numberRow, chapterdata))
      );
      const chapterlist = chapterdata
        .filter((element) => element.parentNumber === null)
        .map((element) => element);
      setShowElement(chapterlist[0]);
      setElements(chapterlist);
      setLoading(true);
      return arias;
    }
    setElements();
    setLoading(true);
    return;
  };

  useEffect(() => {
    GetArias();
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const flattenElements = (arr) => {
    let result = [];
    arr.forEach((element) => {
      result.push({
        idWorks: Number(id),
        idDirectoryTypeRow: element.idDirectoryTypeRow,
        prefixTitle: element.prefixTitle,
        numberRow: element.numberRow,
        prefix: element.prefix,
        title: element.title,
        content: element.content,
        parentNumber: element.parentNumber,
      });
      if (element.child) {
        result = result.concat(flattenElements(element.child));
      }
    });
    return result;
  };

  const elementChange = (array, row) => {
    let result = [];
    array.forEach((element) => {
      if (element.child.length > 0) {
        const child = elementChange(element.child, row);
        element.child = child;
      }
      if (element.numberRow === row.numberRow) {
        element = row;
      }
      result.push(element);
    });
    return result;
  };

  const SetEnableArea = (row) => {
    setElements(elementChange([...elements], row));
    setDocumentChanged(true);
  };

  const PostData = async () => {
    if (window.confirm("Вы действительно хотите сохранить?")) {
      const NewData = flattenElements([...elements]);
      const option = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(NewData),
      };
      const url = "/api/Construct/SaveWork/" + id;
      const result = await fetch(url, option);
      if (result.ok) alert("Успешное сохранение");
      else alert("Ошибка сохранения");
    } else {
      console.log("Сохранение отменено");
    }
  };

  const handleElementChange = (changedElement) => {
    const updatedElements = elements.map((element) =>
      element.numberRow === changedElement.numberRow ? changedElement : element
    );
    setElements(updatedElements);

  };

  const DeleteElement = (deletedElement) => {
    const updatedElements = elements.map((element) =>
      element.prefix > deletedElement.prefix
        ? { ...element, prefix: element.prefix - 1 }
        : element
    );
    const deletedElements = updatedElements.filter(
      (element) => element.numberRow !== deletedElement.numberRow
    );
    setElements(deletedElements);
    setDocumentChanged(true);
  };

  const showArea = (enableElement) => {
    setShowElement(enableElement);
  };

  const addChapter = () => {
    let LastIndex = 0;
    elements.forEach((element, index) => {
      if (element.idDirectoryTypeRow === 5) {
        LastIndex = index + 1;
      }
    });
    const newelement = {
      idWorks: Number(id),
      idDirectoryTypeRow: 5,
      numberRow: count + 1,
      prefixTitle: "Раздел",
      prefix: (
        elements.filter((element) => element.idDirectoryTypeRow === 5).length +
        1
      ).toString(),
      title: "Новый раздел",
      content: "",
      parentNumber: null,
      child: [],
      active: true,
    };
    setCount(count + 1);
    const newarr = [
      ...elements.slice(0, LastIndex),
      newelement,
      ...elements.slice(LastIndex),
    ];
    setElements(newarr);
  };

  return (
    <div className="Work" id={id} style={{ maxHeight: "900px" }}>
      {loading ? (
        <div
          style={{ textAlign: "center", borderColor: "black", border: "5px" }}
        >
          <ListItemButton
            onClick={PostData}
            alignItems="center"
            style={{
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <SaveIcon />
          </ListItemButton>
        </div>
      ) : (
        <></>
      )}
      <div style={{ display: "flex" }}>
        <List
          style={{
            overflowY: "auto",
            overflowWrap: "break-word",
            maxHeight: "500px",
            minwidth: "25vw",
            maxWidth: "25vw",
            borderColor: "black",
            border: "solid",
            borderWidth: "1px",
            marginLeft: "5px",
            borderRadius: "2px",
          }}
          sx={{ width: "100%", bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {loading ? (
            elements.map((component) => {
              return (
                <DocumentSidebar
                  row={component}
                  key={component.numberRow}
                  onElement={showArea}
                  deleteElement={DeleteElement}
                  ElementChange={handleElementChange}
                  type={false}
                  lastindex={count}
                  setLastIndex={setCount}
                  addElementChange={handleElementChange}
                  showelement={showElement}
                />
              );
            })
          ) : (
            <div>Идет загрузка данных</div>
          )}
          <div style={{ textAlign: "center", justifyContent: "center" }}>
            <ListItemButton
              alignItems="center"
              style={{ textAlign: "center", justifyContent: "center" }}
              onClick={() => addChapter()}
            >
              <AddCircleIcon />
            </ListItemButton>
          </div>
        </List>

        {loading ? (
          <div style={{ width: "60vw" }}>
            <EnableArea row={showElement} onElementChange={SetEnableArea} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default DocumentBody;
