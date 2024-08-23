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
// import { NavLink } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import ContextMenu from "./ContextMenu";

const Works = ({ Userid }) => {
  const [works, setWorks] = useState();
  const [loading, setLoading] = useState(false);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });

  const GetWorks = async () => {
    const result = await fetch("https://localhost:7180/api/Construct/" + Userid); //API строк содержащихся в работе
    if (result.ok) {
      const arias = await result.json();
      const workslist = arias.map((element) => element);
      setWorks(arias);
      setLoading(true);
      return arias;
    }
    setWorks();
    setLoading(true);
    return;
  };

  useEffect(() => {
    GetWorks();
  }, []);
  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenuPosition({ x: e.pageX, y: e.pageY });
    setIsContextMenuOpen(true);
  };

  const handleCloseContextMenu = () => {
    setIsContextMenuOpen(false);
  };

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
      {loading ? (
        works.map((component) => <Work work={component} key={component.id} />)
      ) : (
        <div>Идет загрузка данных</div>
      )}
      {loading ? <div style={{ textAlign: "center" }}></div> : <></>}
    </div>
  );
};

export default Works;
