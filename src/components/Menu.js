import { useState } from "react";
import { List, ListItemButton } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./css/modal.css";
import { ModalWindowAddItem, ModalWindowDeleteItem } from "./VKRModals";

const DocumentSidebar = ({
  row,
  count,
  onElement,
  ElementChange,
  deleteElement,
  Child,
  lastindex,
  setLastIndex,
  addElementChange,
  showelement,
}) => {
  const [updatedRow, setUpdatedRow] = useState(row);
  const [open, setOpen] = useState(false);
  const [activedelete, setActiveDelete] = useState(false);
  const [activeadd, setActiveAdd] = useState(false);

  const clickElement = (enable) => {
    onElement(enable);
  };
  const setIndex = (addindex) => {
    setLastIndex(addindex);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const deleteDocumentElement = (element) => {
    deleteElement(element);
  };

  const deleteChildElement = (changedElement) => {
    const updatedChildElement = updatedRow.child.filter(
      (child) => child.numberRow !== changedElement.numberRow
    );
    const updatedElement = updatedRow;
    updatedElement.child = updatedChildElement;
    setUpdatedRow(updatedElement);
    ElementChange(changedElement);
  };

  const addDocumentElement = (element) => {
    setUpdatedRow(element);
    addElementChange(element);
  };

  const AddChildElement = (AddElement) => {
    const updatedChildElement = updatedRow.child.map((childelement) =>
      childelement.numberRow === AddElement.numberRow
        ? AddElement
        : childelement
    );
    const updatedElement = updatedRow;
    updatedElement.child = updatedChildElement;
    setUpdatedRow(updatedElement);
    addElementChange(updatedElement);
  };

  return (
    <>
      {activedelete ? (
        <ModalWindowDeleteItem
          setActive={setActiveDelete}
          deleteDocumentElement={
            Child ? deleteChildElement : deleteDocumentElement
          }
          row={row}
        />
      ) : (
        <></>
      )}
      {activeadd ? (
        <ModalWindowAddItem
          setActive={setActiveAdd}
          setUpdateRow={setUpdatedRow}
          addDocumentElement={addDocumentElement}
          row={row}
          index={lastindex}
          setIndex={setIndex}
        />
      ) : (
        <></>
      )}
      <>
        {row.child.length > 0 ? (
          <div
            style={
              showelement.numberRow !== row.numberRow
                ? {
                    border: "solid",
                    borderRadius: "15px",
                    borderColor: "black",
                    borderWidth: "2px",
                    margin: "5px",
                  }
                : {
                    border: "solid",
                    borderRadius: "15px",
                    borderColor: "black",
                    borderWidth: "2px",
                    margin: "5px",
                    backgroundColor: "#bebebe",
                  }
            }
          >
            {row.idDirectoryTypeRow >= 5 && row.idDirectoryTypeRow <= 6 ? (
              <div style={{ display: "flex" }}>
                <ListItemButton
                  onClick={() => {
                    setActiveAdd(true);
                    setOpen(true);
                  }}
                  style={{ maxWidth: "60px", minWidth: "60px" }}
                >
                  <AddCircleIcon />
                </ListItemButton>
                
                {row.prefix === "1" ? <ListItemButton
                  onClick={() => {
                    setActiveDelete(true);
                    setOpen(true);
                  }}
                  style={{ maxWidth: "60px", minWidth: "60px" }}
                >
                  <DeleteIcon />
                </ListItemButton> :
                <ListItemButton
                onClick={() => {
                  // setActiveDelete(true);
                  setOpen(true);
                }}
                style={{ maxWidth: "60px", minWidth: "60px" }}
              >
                <DeleteIcon />
              </ListItemButton>}
                
                <ListItemButton
                  onClick={() => {
                    clickElement(row);
                    handleClick();
                  }}
                >
                  {open ? (
                    <ExpandLess onClick={handleClick} />
                  ) : (
                    <ExpandMore onClick={handleClick} />
                  )}
                  <ListItemText
                    onClick={handleClick}
                    primary={
                      row.prefixTitle +
                      " " +
                      (row.prefix === null ? "" : row.prefix + " ") +
                      row.title
                    }
                  />
                </ListItemButton>
              </div>
            ) : (
              <></>
            )}

            <Collapse in={open} unmountOnExit style={{ width: "100%" }}>
              <List component="nav" disablePadding>
                {row.child.map((child) => {
                  return (
                    <DocumentSidebar
                      row={child}
                      key={child.numberRow}
                      count={count + 1}
                      onElement={clickElement}
                      deleteElement={deleteDocumentElement}
                      ElementChange={deleteChildElement}
                      Child={true}
                      lastindex={lastindex}
                      setLastIndex={setIndex}
                      addElementChange={AddChildElement}
                      showelement={showelement}
                    />
                  );
                })}
              </List>
            </Collapse>
          </div>
        ) : (
          <div
            style={
              showelement.numberRow !== row.numberRow
                ? {
                    border: "solid",
                    borderRadius: "15px",
                    borderColor: "black",
                    borderWidth: "2px",
                    margin: "5px",
                    display: "flex",
                  }
                : {
                    border: "solid",
                    borderRadius: "15px",
                    borderColor: "black",
                    borderWidth: "2px",
                    margin: "5px",
                    display: "flex",
                    backgroundColor: "#bebebe",
                  }
            }
          >
            {row.idDirectoryTypeRow >= 5 && row.idDirectoryTypeRow <= 6 ? (
              <div style={{ display: "flex", width: "100%" }}>
                <ListItemButton
                  onClick={() => {
                    setActiveAdd(true);
                    setOpen(true);
                  }}
                  style={{ maxWidth: "60px", minWidth: "60px" }}
                >
                  <AddCircleIcon />
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    setActiveDelete(true);
                    setOpen(true);
                  }}
                  style={{ maxWidth: "60px", minWidth: "60px" }}
                >
                  <DeleteIcon />
                </ListItemButton>

                <ListItemButton onClick={() => clickElement(row)}>
                  <ExpandLess style={{ opacity: "0" }} />
                  <ListItemText
                    primary={
                      row.prefixTitle +
                      " " +
                      (row.prefix === null ? "" : row.prefix + " ") +
                      row.title
                    }
                  />
                </ListItemButton>
              </div>
            ) : row.idDirectoryTypeRow > 6 ? (
              <>
                <ListItemButton
                  style={{ maxWidth: "60px", minWidth: "60px", opacity: "0" }}
                >
                  <AddCircleIcon />
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    setActiveDelete(true);
                    setOpen(true);
                  }}
                  style={{ maxWidth: "60px", minWidth: "60px" }}
                >
                  <DeleteIcon />
                </ListItemButton>
                <ExpandLess style={{ opacity: "0" }} />
                <ListItemButton onClick={() => clickElement(row)}>
                  <ListItemText
                    primary={
                      row.prefixTitle +
                      " " +
                      (row.prefix === null ? "" : row.prefix + " ") +
                      row.title
                    }
                  />
                </ListItemButton>
              </>
            ) : (
              <>
                <ListItemButton
                  style={{ maxWidth: "60px", minWidth: "60px", opacity: "0" }}
                >
                  <AddCircleIcon />
                </ListItemButton>
                <ListItemButton
                  style={{
                    maxWidth: "60px",
                    minWidth: "60px",
                    opacity: "0",
                  }}
                >
                  <DeleteIcon />
                </ListItemButton>
                <ListItemButton onClick={() => clickElement(row)}>
                  <ListItemText
                    primary={
                      row.prefixTitle +
                      " " +
                      (row.prefix === null ? "" : row.prefix + " ") +
                      row.title
                    }
                  />
                </ListItemButton>
              </>
            )}
          </div>
        )}
      </>
    </>
  );
};

export default DocumentSidebar;
