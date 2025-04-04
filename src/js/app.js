import '../css/style.css';
import showHealth from './health';
import getHealthStatus from "./getHealthStatus";

const characters = [
  { name: "мечник", health: 10 },
  { name: "маг", health: 100 },
  { name: "лучник", health: 40 },
];

// Применяем getHealthStatus к каждому персонажу
const charactersContainer = document.getElementById('characters');

characters.forEach(character => {
  const healthColor = getHealthStatus(character);
  const healthStatus = showHealth(character);

  const characterDiv = document.createElement('div');
  characterDiv.className = `character ${healthColor}`;
  characterDiv.textContent = `${character.name}: ${healthStatus}`;

  charactersContainer.appendChild(characterDiv);
});

// Применяем showHealth к каждому персонажу
console.log('Script loaded'); // Проверка, что скрипт загружен
characters.forEach(character => {
  const healthStatus = showHealth(character);
  console.log(`Character: ${character.name}, Health Status: ${healthStatus}`); // Отладочный вывод
  console.log(`${character.name} is ${healthStatus}`); // Оригинальный вывод
});