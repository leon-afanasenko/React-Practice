import React from "react";

function ListsComponent() {
  return (
    <div className="lists-container">
      <h2>Лионель Месси: Легенда футбола</h2>
      <h3>Достижения</h3>
      <ul>
        <li>
          <b>"Золотой мяч"</b>: 7 раз (рекорд)
          <ul>
            <li>2009</li>
            <li>2019</li>
            <li>2012</li>
            <li>2015</li>
            <li>2019</li>
            <li>2021</li>
            <li>2022</li>
          </ul>
        </li>
        <li>
          <b>Чемпионат мира</b>: 1 (2022)
        </li>
        <li>
          <b>Чемпионат Испании</b>: 10
        </li>
        <li>
          <b>Лига Чемпионов УЕФА</b>: 4
        </li>
      </ul>

      <h3>Ключевые характеристики</h3>
      <ol>
        <li>
          <b>Феноменальный дриблинг</b>: Месси известен своей способностью
          обходить соперников с легкостью.
        </li>
        <li>
          <b>Точность паса</b>: Его пасы - это настоящее искусство, они всегда
          находят своих адресатов.
        </li>
        <li>
          <b>Невероятная скорость</b>: Месси способен развивать огромную
          скорость на поле, оставляя защитников позади.
        </li>
        <li>
          <b>Магия левой ноги</b>: Левая нога Месси - это инструмент, который
          создает волшебство на поле, забивая невероятные голы.
        </li>
      </ol>
    </div>
  );
}

export default ListsComponent;
