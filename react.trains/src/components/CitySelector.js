import React from "react";

const cities = [
  "Berlin",
  "Dresden",
  "Munich",
  "Frankfurt",
  "Halle",
  "Cologne",
  "Hamburg",
  "Stuttgart",
  "Düsseldorf",
  "Nuremberg",
  "Leipzig",
  "Bremen",
  "Hannover",
  "Augsburg",
  "Würzburg",
  "Essen",
  "Mannheim",
  "Karlsruhe",
  "Kiel",
  "Bonn",
  "Regensburg",
  "Mainz",
  "Lübeck",
  "Chemnitz",
  "Potsdam",
  "Offenbach",
  "Rostock",
  "Heidelberg",
  "Erfurt",
  "Jena",
  "Braunschweig",
  "Göttingen",
  "Ulm",
  "Freiburg",
  "Wuppertal",
  "Mönchengladbach",
  "Pforzheim",
  "Remscheid",
  "Gelsenkirchen",
  "Cottbus",
  "Hagen",
  "Solingen",
  "Saarbrücken",
  "Trier",
  "Aachen",
  "Zwickau",
  "Koblenz",
  "Mülheim an der Ruhr",
  "Ludwigshafen",
  "Marl",
  "Siegen",
  "Kaiserslautern",
  "Tübingen",
  "Friedrichshafen",
  "Zweibrücken",
  "Villingen-Schwenningen",
  "Hildesheim",
  "Gera",
  "Minden",
  "Konstanz",
  "Lörrach",
  "Lüneburg",
  "Hof",
  "Weimar",
  "Greifswald",
  "Neubrandenburg",
  "Paderborn",
  "Bayreuth",
  "Landshut",
  "Schwerin",
  "Ravensburg",
  "Worms",
  "Goslar",
  "Nordhausen",
  "Bamberg",
  "Aschaffenburg",
  "Bad Honnef",
  "Bielefeld",
  "Leverkusen",
  "Bad Kreuznach",
  "Cuxhaven",
  "Darmstadt",
  "Langenfeld",
  "Bautzen",
  "Halle (Saale)",
  "Rüsselsheim",
  "Neuss",
  "Jülich",
  "Vechta",
  "Buxtehude",
  "Stendal",
  "Ahrensburg",
  "Pinneberg",
  "Herten",
  "Gummersbach",
  "Rheda-Wiedenbrück",
  "Wesel",
  "Sankt Augustin",
  "Dachau",
  "Bad Salzuflen",
  "Waldbronn",
  "Völklingen",
];

const uniqueCities = cities.map((city, index) => ({
  id: `${city}-${index}`,
  name: city,
}));

function CitySelector({ selectedCity, onSelectCity }) {
  return (
    <div className="city-selector">
      <label htmlFor="city">Город Отправления:</label>
      <select
        id="city"
        value={selectedCity}
        onChange={(e) => onSelectCity(e.target.value)}
      >
        <option value="">Выберите город</option>
        {uniqueCities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;
