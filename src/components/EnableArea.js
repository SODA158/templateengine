import { useState } from "react";
import {
  Chapter,
  MainArea,
  Subchapter,
  ListArea,
  ImageArea,
  Equation,
  Table,
} from "./Areas";
import { useSelector } from "react-redux";

const EnableArea = () => {
  const enable = useSelector((store) => store.workstrings.enableArea);

  // const handleChange = (changedElement) => {
  //   setUpdatedRow(changedElement);
  //   onElementChange(changedElement);
  // };
  
  const GetArea = () => {
    if (enable.idDirectoryTypeRow < 5) {
      return (
        <MainArea
          enable={enable}
          key={enable.numberRow}
          // onElementChange={handleChange}
        />
      );
    }
    if (enable.idDirectoryTypeRow === 5) {
      return (
        <Chapter enable={enable} key={enable.numberRow} 
        // onElementChange={handleChange} 
        />
      );
    }
    if (enable.idDirectoryTypeRow === 6) {
      return (
        <Subchapter
          key={enable.numberRow}
          enable={enable}
          id={enable.numberRow}
          // onElementChange={handleChange}
        />
      );
    }
    // if (enable.idDirectoryTypeRow === 7) {
    //   return (
    //     <ListArea
    //       key={enable.numberRow}
    //       enable={enable}
    //       id={null}
    //       onElementChange={handleChange}
    //     />
    //   );
    // }
    if (enable.idDirectoryTypeRow === 8) {
      return (
        <Table
          key={enable.numberRow}
          enable={enable}
          id={null}
          // onElementChange={handleChange}
        />
      );
    }
    if (enable.idDirectoryTypeRow === 9) {
      return (
        <ImageArea
          key={enable.numberRow}
          enable={enable}
          id={null}
          // onElementChange={handleChange}
        />
      );
    }
    if (enable.idDirectoryTypeRow === 10) {
      return (
        <Equation
          key={enable.numberRow}
          enable={enable}
          id={null}
          // onElementChange={handleChange}
        />
      );
    }
  };
  
  if(enable===null) return <div>загрузка</div>
  return GetArea();
};
export default EnableArea;
