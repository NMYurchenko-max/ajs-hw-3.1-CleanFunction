export default function showHealth(units) {
  if (typeof units.health !== 'number' || units.health < 0) {
    throw new Error('Parameter is not a valid number!');
  }

  switch (true) {
    case (units.health > 50):
      return 'green'; // Здоровье более 50 - зелёный
    case (units.health > 15):
      return 'yellow'; // Здоровье от 50 и до 15 - жёлтый
    default:
      return 'red'; // Менее 15 - красный
  }
}