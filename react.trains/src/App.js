import React, { useState } from "react";
import ScheduleTable from "./components/ScheduleTable";
import TimeSelector from "./components/TimeSelector";
import TicketPurchase from "./components/TicketPurchase";
import CitySelector from "./components/CitySelector";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import trains from "./components/trainData";
import "./App.css";

function App() {
  // Состояние для хранения выбранных городов
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // Состояние для хранения выбранной даты
  const [date, setDate] = useState(new Date());

  // Состояние для хранения количества пассажиров
  const [passengers, setPassengers] = useState(1);

  // Состояние для хранения выбранного класса билета
  const [classType, setClassType] = useState("2. Klasse");

  // Состояние для хранения выбранного часа
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  // Состояние для хранения выбранной минуты
  const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());

  // Состояние для хранения выбранного поезда
  const [selectedTrain, setSelectedTrain] = useState(null);

  // Состояние для хранения отфильтрованных поездов
  const [filteredTrains, setFilteredTrains] = useState([]);

  // Состояние для хранения опции "с пересадками"
  const [hasZwischenhalte, setHasZwischenhalte] = useState(false);

  // Состояние для хранения выбранного типа транспорта
  const [verkehrsmittel, setVerkehrsmittel] = useState("Alle");

  // Состояние для хранения выбранного времени пересадки
  const [umstiegszeit, setUmstiegszeit] = useState("Normal");

  // Состояние для опции "только прямые рейсы"
  const [onlyDirect, setOnlyDirect] = useState(false);

  // Состояние для опции "провоз велосипеда"
  const [bikeOption, setBikeOption] = useState(false);

  // Функции для обновления состояния
  const handleFromChange = (value) => setFrom(value);
  const handleToChange = (value) => setTo(value);

  // Обработчик изменения даты
  const handleDateChange = (newDate) => {
    setDate(newDate);
    setCurrentHour(newDate.getHours());
    setCurrentMinute(newDate.getMinutes());
  };

  // Обработчики изменения количества пассажиров и класса билета
  const handlePassengersChange = (e) => setPassengers(e.target.value);
  const handleClassChange = (e) => setClassType(e.target.value);

  // Обработчик изменения опции "с пересадками"
  const handleZwischenhalteChange = () =>
    setHasZwischenhalte(!hasZwischenhalte);

  // Обработчик изменения типа транспорта
  const handleVerkehrsmittelChange = (e) => setVerkehrsmittel(e.target.value);

  // Обработчик изменения времени пересадки
  const handleUmstiegszeitChange = (e) => setUmstiegszeit(e.target.value);

  // Обработчики изменения опций "только прямые рейсы" и "провоз велосипеда"
  const handleOnlyDirectChange = () => setOnlyDirect(!onlyDirect);
  const handleBikeOptionChange = () => setBikeOption(!bikeOption);

  // Функция для выбора поезда
  const handleSelectTrain = (train) => setSelectedTrain(train);

  // Обработчики изменения часа и минуты
  const handleHourChange = (e) => setCurrentHour(Number(e.target.value));
  const handleMinuteChange = (e) => setCurrentMinute(Number(e.target.value));

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredTrains(
      trains.filter((train) => {
        const [hour, minute] = train.departureTime.split(":").map(Number);
        return (
          hour === currentHour &&
          minute === currentMinute &&
          train.arrivalStation === to
        );
      })
    );
  };

  return (
    <div className="app">
      <h1>Поиск билетов на поезд</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <CitySelector selectedCity={from} onSelectCity={handleFromChange} />
          <CitySelector selectedCity={to} onSelectCity={handleToChange} />

          <div className="date-picker">
            <label htmlFor="date">Дата поездки:</label>
            <DatePicker
              selected={date}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              locale="ru"
            />
          </div>
        </div>

        <TimeSelector
          currentHour={currentHour}
          currentMinute={currentMinute}
          handleHourChange={handleHourChange}
          handleMinuteChange={handleMinuteChange}
        />

        <div className="additional-options">
          <label>
            Пересадки:
            <input
              type="checkbox"
              checked={hasZwischenhalte}
              onChange={handleZwischenhalteChange}
            />
          </label>

          <label>
            Транспорт:
            <select
              value={verkehrsmittel}
              onChange={handleVerkehrsmittelChange}
            >
              <option value="Alle">Все</option>
              <option value="ICE">ICE</option>
              <option value="IC">IC</option>
              <option value="RE">RE</option>
            </select>
          </label>

          <label>
            Время пересадки:
            <select value={umstiegszeit} onChange={handleUmstiegszeitChange}>
              <option value="Нормальная">Нормальная</option>
              <option value="Минимальная">Минимальная</option>
            </select>
          </label>

          <label>
            Только прямые рейсы:
            <input
              type="checkbox"
              checked={onlyDirect}
              onChange={handleOnlyDirectChange}
            />
          </label>

          <label>
            Провоз велосипеда:
            <input
              type="checkbox"
              checked={bikeOption}
              onChange={handleBikeOptionChange}
            />
          </label>
        </div>

        <div className="passenger-class-options">
          <label htmlFor="passengers">Количество пассажиров:</label>
          <select
            id="passengers"
            value={passengers}
            onChange={handlePassengersChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <label htmlFor="class">Класс:</label>
          <select id="class" value={classType} onChange={handleClassChange}>
            <option value="1. Класс">1. Класс</option>
            <option value="2. Класс">2. Класс</option>
          </select>
        </div>

        <button type="submit" className="search-button">
          Искать
        </button>
      </form>

      <ScheduleTable
        currentHour={currentHour}
        currentMinute={currentMinute}
        selectedCity={to}
        onSelectTrain={handleSelectTrain}
      />

      {selectedTrain && <TicketPurchase train={selectedTrain} />}
    </div>
  );
}

export default App;
