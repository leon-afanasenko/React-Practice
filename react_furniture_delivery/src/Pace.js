function calculate() {
  // Получаем значения из формы
  const item = document.getElementById("item").value;
  const quantity = parseInt(document.getElementById("quantity").value, 10);
  const floorFrom = parseInt(document.getElementById("floorFrom").value, 10);
  const floorTo = parseInt(document.getElementById("floorTo").value, 10);
  const disassembly = document.getElementById("disassembly").checked;
  const assembly = document.getElementById("assembly").checked;

  // Проверяем корректность данных
  if (isNaN(quantity) || isNaN(floorFrom) || isNaN(floorTo)) {
    alert("Пожалуйста, введите корректные значения.");
    return;
  }

  // Вычисление стоимости
  let baseCost = 100; // Базовая стоимость
  if (item === "wardrobe") {
    baseCost = 200;
  } else if (item === "bed") {
    baseCost = 150;
  } else if (item === "table") {
    baseCost = 50;
  }

  // Стоимость за этаж
  const floorCost = 10;

  // Общая стоимость
  const totalCost =
    baseCost * quantity + Math.abs(floorTo - floorFrom) * floorCost;

  // Добавляем дополнительные услуги
  let additionalCost = 0;
  if (disassembly) additionalCost += 50;
  if (assembly) additionalCost += 50;

  // Итоговая стоимость
  const finalCost = totalCost + additionalCost;

  // Отображение результата
  document.getElementById("result").innerHTML = `
      <h3>Итоговая стоимость:</h3>
      <p>Предмет: ${item}</p>
      <p>Количество: ${quantity}</p>
      <p>Этаж от: ${floorFrom}</p>
      <p>Этаж до: ${floorTo}</p>
      <p>Разборка: ${disassembly ? "Да" : "Нет"}</p>
      <p>Сборка: ${assembly ? "Да" : "Нет"}</p>
      <p><strong>Итоговая стоимость: ${finalCost} руб.</strong></p>
    `;
}
