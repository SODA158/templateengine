export const ModalWindowDeleteItem = ({
  setActive,
  row,
  deleteDocumentElement,
}) => {
  const onhandleclick = (element) => {
    setActive(false);
    deleteDocumentElement(element);
  };

  return (
    <div className="modal" onClick={() => setActive(false)}>
      <div
        className="modalcontent"
        onClick={(e) => e.stopPropagation()}
        style={{ textAlign: "center" }}
      >
        <h2>Вы уверены, что хотите удалить пункт "{row.title}"</h2>
        <button onClick={() => onhandleclick(row)}>Удалить</button>
        <button onClick={() => setActive(false)}>Отмена</button>
      </div>
    </div>
  );
};

export const ModalWindowAddItem = ({
  setActive,
  row,
  addDocumentElement,
  index,
  setIndex,
  setUpdateRow,
}) => {
  const AddSubchapter = () => {
    row.child.push({
      idWorks: row.idWorks,
      idDirectoryTypeRow: 6,
      numberRow: index + 1,
      prefixTitle:"Подраздел",
      prefix:
        row.prefix +
        "." +
        (row.child.filter((element) => element.idDirectoryTypeRow === 6)
          .length +
          1),
      title: "Новый подраздел",
      content: "",
      parentNumber: row.numberRow,
      child: [],
      active: false,
    });
    setActive(false);
    setIndex(index + 1);
    addDocumentElement(row);
    // setUpdateRow(row);
  };
  const AddTable = () => {
    row.child.push({
      idWorks: row.idWorks,
      idDirectoryTypeRow: 8,
      numberRow: index + 1,
      prefixTitle:"Таблица",
      prefix:
        row.prefix +
        "." +
        (row.child.filter((element) => element.idDirectoryTypeRow === 8)
          .length +
          1),
      title: "Новая таблица",
      content: "",
      parentNumber: row.numberRow,
      child: [],
      active: false,
    });
    setActive(false);
    setIndex(index + 1);
    addDocumentElement(row);
  };
  const AddImage = () => {
    row.child.push({
      idWorks: row.idWorks,
      idDirectoryTypeRow: 9,
      numberRow: index + 1,
      prefixTitle:"Рисунок",
      prefix:
        row.prefix +
        "." +
        (row.child.filter((element) => element.idDirectoryTypeRow === 9)
          .length +
          1),
      title: "Новое изображение",
      content: "",
      parentNumber: row.numberRow,
      child: [],
      active: false,
    });
    setActive(false);
    setIndex(index + 1);
    addDocumentElement(row);
  };
  const AddEquation = () => {
    row.child.push({
      idWorks: row.idWorks,
      idDirectoryTypeRow: 10,
      numberRow: index + 1,
      prefixTitle:"Уравнение",
      prefix:
        row.prefix +
        "." +
        (row.child.filter((element) => element.idDirectoryTypeRow === 10)
          .length +
          1),
      title: "",
      content: "",
      parentNumber: row.numberRow,
      child: [],
      active: false,
    });
    setActive(false);
    setIndex(index + 1);
    addDocumentElement(row);
  };

  return (
    <div className="modal" onClick={() => setActive(false)}>
      <div
        className="modalcontent"
        onClick={(e) => e.stopPropagation()}
        style={{ textAlign: "center" }}
      >
        <h2>Выберите пункт, который хотите добавить</h2>

        {row.child.length > 0 ? (
          <div>
            <button onClick={() => AddSubchapter()}>Подраздел</button>
            <button onClick={() => AddImage()}>Изображение</button>
            <button onClick={() => AddTable()}>Таблица</button>
            <button onClick={() => AddEquation()}>Уравнение</button>
            {/* <button onClick={() => onhandleclick(AddSubchapter)}>Подраздел</button> */}
          </div>
        ) : (
          <div>
            <button onClick={() => AddSubchapter()}>Подраздел</button>
            <button onClick={() => AddImage()} disabled="true">
              Изображение
            </button>
            <button onClick={() => AddTable()} disabled="true">
              Таблица
            </button>
            <button onClick={() => AddEquation()} disabled="true">
              Уравнение
            </button>
            {/* <button onClick={() => onhandleclick(AddSubchapter)}>Подраздел</button> */}
          </div>
        )}

        <button onClick={() => setActive(false)}>Отмена</button>
      </div>
    </div>
  );
};
