require('dotenv').config();
const sequelize = require('./db/db');
const { Admins, Services, Masters } = require('./db/models');

async function seed() {
  await sequelize.sync();
  await Admins.findOrCreate({ where: { login: 'demo' }, defaults: { password: 'demo123' } });
  for (const title of ['Мужская стрижка', 'Оформление бороды', 'Стрижка машинкой']) {
    await Services.findOrCreate({ where: { title }, defaults: { price: '1200', price_medium: '1500', price_high: '1800', time: '45 мин' } });
  }
  for (const name of ['Алексей', 'Дмитрий']) {
    await Masters.findOrCreate({ where: { name, second_name: 'Демо' }, defaults: { description: 'Карточка для знакомства с каталогом.' } });
  }
  console.log('Демо-каталог готов. Вход: demo / demo123');
}
seed().catch(error => { console.error(error.message); process.exitCode = 1; }).finally(() => sequelize.close());
