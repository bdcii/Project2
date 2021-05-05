const User = require('./User');
const Book = require('./Book');

User.hasMany(Book, {
  foreignKey: 'user_id',
  // foreignKey: 'user_email',
  // foreignKey: 'user_location',
  onDelete: 'CASCADE'
});

Book.belongsTo(User, {
  foreignKey: 'user_id',
  // foreignKey: 'user_email',
  // foreignKey: 'user_location'
});

module.exports = { User, Book };
