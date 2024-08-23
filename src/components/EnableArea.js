import { useState } from "react";
import {
  Chapter,
  MainArea,
  Subchapter,
  ListArea,
  ImageArea,
  Equation,
  Table
} from "./Areas";

const EnableArea = ({ row, onElementChange }) => {
    const [updatedRow, setUpdatedRow] = useState(row);

    const handleChange = (changedElement) => {
      setUpdatedRow(changedElement);
      onElementChange(changedElement); 
    };


  const GetArea = () => {
    if (row.idDirectoryTypeRow < 5) {
      return (
        <MainArea
          row={row}
          key={row.numberRow} 
          onElementChange={handleChange}
        />
      );
    }
    if (row.idDirectoryTypeRow === 5) {
      return (
        <Chapter
          row={row}
          key={row.numberRow}
            onElementChange={handleChange}
        />
      );
    }
    if (row.idDirectoryTypeRow === 6) {
      return (
        <Subchapter
          key={row.numberRow}
          row={row}
          id={row.numberRow}
          onElementChange={handleChange}
        />
      );
    }
    // if (row.idDirectoryTypeRow === 7) {
    //   return (
    //     <ListArea
    //       key={row.numberRow}
    //       row={row}
    //       id={null}
    //       onElementChange={handleChange}
    //     />
    //   );
    // }
    if (row.idDirectoryTypeRow === 8) {
      return (
        <Table
          key={row.numberRow}
          row={row}
          id={null}
          onElementChange={handleChange}
        />
      );
    }
    if (row.idDirectoryTypeRow === 9) {
      return (
        <ImageArea
          key={row.numberRow}
          row={row}
          id={null}
          onElementChange={handleChange}
        />
      );
    }
    if (row.idDirectoryTypeRow === 10) {
      return (
        <Equation
          key={row.numberRow}
          row={row}
          id={null}
          onElementChange={handleChange}
        />
      );
    }
  };

  return GetArea();
};
export default EnableArea;
