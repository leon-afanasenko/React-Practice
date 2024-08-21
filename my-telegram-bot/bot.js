const TelegramBot = require("node-telegram-bot-api");

// Вставьте сюда ваш токен
const token = "7046081491:AAGWeErAIX4w1D-SRcBFJEctemx90oWu1yQ";

// Создаем экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Функция для вывода логов в консоль
const logToConsole = (message) => {
  console.log(message);
};

// Обрабатываем команду /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const userMessage = `User ${
    msg.from.username || msg.from.id
  } started the bot.`;
  logToConsole(userMessage);
  bot.sendMessage(
    chatId,
    "Добро пожаловать в нашу больничную кассу! Используйте команды для получения информации. Команда /help для списка команд."
  );
});

// Обрабатываем команду /help
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  const userMessage = `User ${
    msg.from.username || msg.from.id
  } used /help command.`;
  logToConsole(userMessage);
  bot.sendMessage(
    chatId,
    "Доступные команды:\n/start - Приветственное сообщение\n/help - Список команд\n/info - Информация о больнице\n/schedule - Расписание врачей\n/services - Доступные услуги\n/appointments - Запись на прием\n/contact - Контактные данные\n/insurance - Информация о страховании\n/feedback - Оставить отзыв\n/faq - Часто задаваемые вопросы\n/hours - Часы работы"
  );
});

// Команда /info
bot.onText(/\/info/, (msg) => {
  const chatId = msg.chat.id;
  const userMessage = `User ${
    msg.from.username || msg.from.id
  } used /info command.`;
  logToConsole(userMessage);
  bot.sendMessage(
    chatId,
    "Мы предоставляем медицинские услуги высокого качества. Наша больница оснащена современным оборудованием и предоставляет широкий спектр медицинских услуг."
  );
});

// Команда /schedule
bot.onText(/\/schedule/, (msg) => {
  const chatId = msg.chat.id;
  const userMessage = `User ${
    msg.from.username || msg.from.id
  } used /schedule command.`;
  logToConsole(userMessage);
  bot.sendMessage(
    chatId,
    "Расписание врачей можно посмотреть на нашем сайте: www.hospitalwebsite.com/schedule"
  );
});

// Команда /services
bot.onText(/\/services/, (msg) => {
  const chatId = msg.chat.id;
  const userMessage = `User ${
    msg.from.username || msg.from.id
  } used /services command.`;
  logToConsole(userMessage);
  bot.sendMessage(
    chatId,
    "Мы предлагаем следующие услуги:\n- Консультации специалистов\n- Диагностика\n- Лабораторные исследования\n- Хирургические операции\n- Реабилитация"
  );
});

// Команда /appointments
bot.onText(/\/appointments/, (msg) => {
  const chatId = msg.chat.id;
  const userMessage = `User ${
    msg.from.username || msg.from.id
  } used /appointments command.`;
  logToConsole(userMessage);
  bot.sendMessage(
    chatId,
    "Для записи на прием, пожалуйста, позвоните по телефону: +7 123 456 7890 или посетите наш сайт: www.hospitalwebsite.com/appointments"
  );
});

// Команда /contact
bot.onText(/\/contact/, (msg) => {
  const chatId = msg.chat.id;
  const userMessage = `User ${
    msg.from.username || msg.from.id
  } used /contact command.`;
  logToConsole(userMessage);
  bot.sendMessage(
    chatId,
    "Контактные данные:\nАдрес: ул. Примерная, д. 1, г. Примерск\nТелефон: +7 123 456 7890\nEmail: contact@hospitalwebsite.com"
  );
});

// Команда /insurance
bot.onText(/\/insurance/, (msg) => {
  const chatId = msg.chat.id;
  const userMessage = `User ${
    msg.from.username || msg.from.id
  } used /insurance command.`;
  logToConsole(userMessage);
  bot.sendMessage(
    chatId,
    "Мы принимаем все виды медицинского страхования. Подробности можно узнать на нашем сайте: www.hospitalwebsite.com/insurance"
  );
});

// Команда /feedback
bot.onText(/\/feedback/, (msg) => {
  const chatId = msg.chat.id;
  const userMessage = `User ${
    msg.from.username || msg.from.id
  } used /feedback command.`;
  logToConsole(userMessage);
  bot.sendMessage(
    chatId,
    "Мы ценим ваше мнение! Пожалуйста, отправьте свой отзыв на email: feedback@hospitalwebsite.com"
  );
});

// Команда /faq
bot.onText(/\/faq/, (msg) => {
  const chatId = msg.chat.id;
  const userMessage = `User ${
    msg.from.username || msg.from.id
  } used /faq command.`;
  logToConsole(userMessage);
  bot.sendMessage(
    chatId,
    "Часто задаваемые вопросы:\n1. Как записаться на прием?\n2. Как получить результаты анализов?\n3. Как работает наша служба поддержки?\nОтветы на все вопросы можно найти на нашем сайте: www.hospitalwebsite.com/faq"
  );
});

// Команда /hours
bot.onText(/\/hours/, (msg) => {
  const chatId = msg.chat.id;
  const userMessage = `User ${
    msg.from.username || msg.from.id
  } used /hours command.`;
  logToConsole(userMessage);
  bot.sendMessage(
    chatId,
    "Наши часы работы:\nПн-Пт: 09:00 - 18:00\nСб: 10:00 - 15:00\nВс: Выходной"
  );
});

// Обрабатываем любые другие сообщения
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const userMessage = `User ${msg.from.username || msg.from.id} sent message: ${
    msg.text
  }`;
  logToConsole(userMessage);

  if (
    msg.text.toLowerCase() !== "/start" &&
    msg.text.toLowerCase() !== "/help" &&
    msg.text.toLowerCase() !== "/info" &&
    msg.text.toLowerCase() !== "/schedule" &&
    msg.text.toLowerCase() !== "/services" &&
    msg.text.toLowerCase() !== "/appointments" &&
    msg.text.toLowerCase() !== "/contact" &&
    msg.text.toLowerCase() !== "/insurance" &&
    msg.text.toLowerCase() !== "/feedback" &&
    msg.text.toLowerCase() !== "/faq" &&
    msg.text.toLowerCase() !== "/hours"
  ) {
    bot.sendMessage(
      chatId,
      "Я бот больничной кассы. Используйте команду /help, чтобы увидеть доступные команды."
    );
  }
});
