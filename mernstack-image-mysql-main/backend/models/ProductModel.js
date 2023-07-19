import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Product = db.define('product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true,
});

export default Product;

(async () => {
  try {
    await db.sync();
    console.log('Product model synced successfully.');
  } catch (error) {
    console.error('Error syncing Product model: ', error.message);
  }
})();
