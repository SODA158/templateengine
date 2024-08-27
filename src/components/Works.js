import React, { useEffect, useState } from "react";
import "./css/pure.css";
import "./css/additionals.css";
import "./css/golos.ttf";
import "./css/pure-grid.css";
import "./css/site.css";
import "./css/TempDes.css";
import "./css/w3.css";
import "./css/w3dstu.css";
import "./css/w3pro.css";
import "./css/ContextMenu.css";
import "./css/editor.css";
import { Link, NavLink } from "react-router-dom";
// import ContextMenu from "./ContextMenu";
import { useGetWorksQuery } from "./reduxApi/WorksApi";

const Works = ({ Userid }) => {
  // const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  // const [contextMenuPosition, setContextMenuPosition] = useState({
  //   x: 0,
  //   y: 0,
  // });
  const { data = [], isLoading } = useGetWorksQuery(Userid);

  if (isLoading) return <div>Идет загрузка данных</div>;

  // const handleContextMenu = (e) => {
  //   e.preventDefault();
  //   setContextMenuPosition({ x: e.pageX, y: e.pageY });
  //   setIsContextMenuOpen(true);
  // };

  // const handleCloseContextMenu = () => {
  //   setIsContextMenuOpen(false);
  // };

  const Work = ({ work }) => {
    return (
      <div className="event-card">
        <div className="headline-location">
          <p className="headline">{work.title}</p>
          <div className="location-time">
            <p className="location">
              {work.idteacher}
              <br />
              <span className="dark-theme-text-link-color">
                Есть\отсутствуют правки
              </span>
            </p>
            <div className="timr">
              Дата последнего изменения:{work.savedate}
            </div>
          </div>
        </div>
        <div className="date-button">
          <div className="date">
            <div className="element">30</div>
            <div className="text-wrapper">
              сентября
              <br />
              2023
            </div>
          </div>
          <div className="button">
            <NavLink tag={Link} className="text-dark" to={"/Work/" + work.id}>
              <img
                className="icon-arrow-right"
                src="img/vuesax/download.svg"
                alt="+"
              />
            </NavLink>
          </div>
          <div className="button">
            <NavLink tag={Link} className="text-dark" to={"/Work/" + work.id}>
              <img
                className="icon-arrow-right"
                src="img/vuesax/download.svg"
                alt="+"
              />
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="body"
      style={{ margin: "0px 56px 0px 56p", display: "flex" }}
    >
      {data.map((component) => (
        <Work work={component} key={component.id} />
      ))}
    </div>
  );
};

export default Works;
