import "./style.css";

import { useState } from "react";

const sortament = {
  list: { name: "Лист", src: "https://metal-calculator.ru/assets/List.png" },
  circle: {
    name: "Круг",
    src: "https://metal-calculator.ru/assets/Circle.png",
  },
  channel: {
    name: "Швеллер",
    src: "https://metal-calculator.ru/assets/ChannelY.png",
  },
  corner: {
    name: "Уголок",
    src: "https://metal-calculator.ru/assets/Corner.png",
  },
  pipeRound: {
    name: "Труба круглая",
    src: "https://metal-calculator.ru/assets/PipeCircle.png",
  },
  pipeProfile: {
    name: "Труба профильная",
    src: "https://metal-calculator.ru/assets/PipeProf.png",
  },
  hexagon: {
    name: "Шестигранник",
    src: "https://metal-calculator.ru/assets/Hexahedron.png",
  },
};
const material = {
  steel: { name: "Сталь" },
  copper: { name: "Медь", ro: "Плотность меди" },
  bronze: { name: "Бронза" },
  wood: { name: "Дерево" },
  aluminum: { name: "Алюминий" },
};
const sortamentList = Object.entries(sortament);
const materialsList = Object.entries(material);

function App() {
  const [activeSortament, setActiveSortament] = useState(sortamentList[0]);
  const [activeMaterial, setActiveMaterial] = useState(materialsList[0]);
  return (
    <div className="main-container">
      <div className="stroki">
        <p className="count-row">
          <b>Сортамент:</b>
          <span> {activeSortament[1].name} </span>
        </p>
        <p className="count-row">
          <b>Матриал:</b>
          <span> {activeMaterial[1].name} </span>
        </p>
      </div>
      <div className="widget">
        <ul>
          {sortamentList.map((elem) => {
            const [key, sortament] = elem;
            return (
              <li key={key}>
                <button
                  className="list-button"
                  onClick={() => {
                    setActiveSortament(elem);
                  }}
                >
                  {sortament.name}
                </button>
              </li>
            );
          })}
        </ul>

        <ul>
          {materialsList.map((elem) => {
            const [key, material] = elem;
            return (
              <li key={key}>
                <button
                  className="list-button"
                  onClick={() => {
                    setActiveMaterial(elem);
                  }}
                >
                  {material.name}
                </button>
              </li>
            );
          })}
        </ul>

        <div>
          {/* Рабочее поле */}
          <img src={activeSortament[1].src} alt={activeSortament[1].name} />
        </div>
      </div>
    </div>
  );
}

export default App;
