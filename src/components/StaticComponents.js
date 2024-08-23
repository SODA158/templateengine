export const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0e468b", bottom: 0 }}>
      <div className="info">
        <div className="pure-u-md-8-24 pure-u-1">
          <h3>
            <b
              style={{
                color: "#fff",
                font: "26px/34px Golos, sans-serif",
                fontWeight: "bolder",
                letterSpacing: "-0.91px",
              }}
            >
              Учись.<span style={{ color: "#fdc51f" }}>Исследуй.</span>{" "}
              Действуй.
            </b>
          </h3>
        </div>
        <div className="pure-u-md-6-24 pure-u-1" style={{ color: "#fff" }}>
          <p>Управление цифрового развития</p>
          <p>будние дни с 8:30 до 17:00</p>
          <p>8 863 273 85 29</p>
          <p>spu-06.2@donstu.ru</p>
          <p>344000, г. Ростов-на-Дону, пл. Гагарина, 8, ауд. 201</p>
        </div>
        <div className="pure-u-md-6-24 pure-u-1" style={{ color: "#fff" }}>
          <p>Отдел по работе с обучающимися</p>
          <p>будние дни с 8:30 до 17:00</p>
          <p>8 863 273-87-12</p>
          <p>otvet8-108@donstu.ru</p>
          <p>пл. Гагарина, 1, Корпус – 8, аудитория 106</p>
        </div>
        <div className="pure-u-md-4-24 pure-u-1" style={{ color: "#fff" }}>
          <p>Пресс-служба</p>
          <p>8 863 273 85 25</p>
          <p>reception@donstu.ru</p>
        </div>
      </div>
      <h5
        style={{
          color: "#c7c9cf",
          marginBottom: 0,
          padding: "1rem 0rem 3rem 3.5rem",
        }}
      >
        Донской государственный технический университет © 2024
      </h5>
    </footer>
  );
};

export const Header = () => {
  return (
    <div className="header-custom">
      <div className="div-20" style={{ margin: "24px" }}>
        <a href="/UserWorks/1">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee60558de37fe2f8623b04265544530a2f1bd4f730490f9c52b13c7ffa2ff3c2?"
            className="img-7"
          />
        </a>
        <a href="UserWorks/1">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fce0c2fdebed67788b977d6fb82a69f48b2556de1464fd5d14ec21bcf1e3411c?"
            className="img-8"
          />
        </a>
      </div>
      <div className="div-21" style={{ margin: "24px" }}>
        <div className="div-22">
          <a href="https://edu.donstu.ru/WebApp/#/">Вернуться в ЭИОС</a>
        </div>
      </div>
    </div>
  );
};
