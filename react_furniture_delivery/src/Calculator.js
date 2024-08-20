import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [fromFloor, setFromFloor] = useState(0);
  const [toFloor, setToFloor] = useState(0);
  const [fromApproach, setFromApproach] = useState(false);
  const [toApproach, setToApproach] = useState(false);
  const [fromElevator, setFromElevator] = useState(false);
  const [toElevator, setToElevator] = useState(false);
  const [itemCounts, setItemCounts] = useState({
    quantity1: 0,
    quantity2: 0,
    quantity3: 0,
    quantity4: 0,
    quantity5: 0,
    quantity6: 0,
    quantity7: 0,
    quantity8: 0,
    quantity9: 0,
    quantity13: 0,
    quantity14: 0,
    quantity16: 0,
    quantity17: 0,
    quantity15: 0,
    quantity10: 0,
    quantity11: 0,
    quantity12: 0,
    quantity18: 0,
    quantity19: 0,
    quantity20: 0,
    quantity21: 0,
    quantity22: 0,
    quantity23: 0,
    quantity25: 0,
    quantity26: 0,
    quantity27: 0,
    quantity28: 0,
    quantity29: 0,
    quantity30: 0,
    quantity31: 0,
    quantity32: 0,
    quantity33: 0,
    quantity34: 0,
  });

  const calculateMultiplier = () => {
    let floorMultiplier = 1;

    if (!fromElevator) {
      floorMultiplier += Math.abs(fromFloor) * 0.08;
    }

    if (!toElevator) {
      floorMultiplier += Math.abs(toFloor) * 0.08;
    }

    if (fromApproach) {
      floorMultiplier += 0.08;
    }

    if (toApproach) {
      floorMultiplier += 0.08;
    }

    return floorMultiplier;
  };

  const calculateClosetSlidingDoor = () => {
    // Добавьте логику расчета стоимости дверей шкафа
    return 0;
  };

  const calculateCloset = () => {
    // Добавьте логику расчета стоимости шкафа
    return 0;
  };

  const calculateHoneycombCost = () => {
    // Добавьте логику расчета стоимости сот
    return 0;
  };

  const calculateCost = () => {
    let totalCost = 0;

    // Добавьте логику расчета общей стоимости
    return totalCost;
  };

  const calculateTotalCost = () => {
    let totalCost = 0;

    totalCost += calculateClosetSlidingDoor();
    totalCost += calculateCloset();
    totalCost += calculateHoneycombCost();
    totalCost += calculateCost();

    if (totalCost > 5000) {
      totalCost = totalCost * 0.85;
    } else if (totalCost > 3000) {
      totalCost = totalCost * 0.9;
    }

    totalCost = Math.ceil(totalCost / 10) * 10;

    return totalCost;
  };

  const handleCalculateClick = () => {
    const totalCost = calculateTotalCost();
    alert(`Total cost: ${totalCost}`);
  };

  return (
    <main className="calculator">
      <h1>Calculator</h1>
      <div className="floor-inputs">
        <div>
          <label>From Floor:</label>
          <input
            type="number"
            value={fromFloor}
            onChange={(e) => setFromFloor(Number(e.target.value))}
            min="0"
          />
        </div>
        <div>
          <label>To Floor:</label>
          <input
            type="number"
            value={toFloor}
            onChange={(e) => setToFloor(Number(e.target.value))}
            min="0"
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={fromApproach}
              onChange={(e) => setFromApproach(e.target.checked)}
            />
            Approach From
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={toApproach}
              onChange={(e) => setToApproach(e.target.checked)}
            />
            Approach To
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={fromElevator}
              onChange={(e) => setFromElevator(e.target.checked)}
            />
            Elevator From
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={toElevator}
              onChange={(e) => setToElevator(e.target.checked)}
            />
            Elevator To
          </label>
        </div>
      </div>
      <div className="item-inputs">
        {Object.keys(itemCounts).map((key) => (
          <div key={key}>
            <label>
              {key}:
              <input
                type="number"
                value={itemCounts[key]}
                onChange={(e) =>
                  setItemCounts({
                    ...itemCounts,
                    [key]: Number(e.target.value),
                  })
                }
                min="0"
              />
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleCalculateClick}>Calculate</button>
    </main>
  );
};

export default Calculator;
