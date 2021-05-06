const User = require('./User');
const Book = require('./Books');

// User.hasMany(Book, {
// foreignKey:'user_id',
//   onDelete: 'CASCADE'
// });

Book.belongsTo(User, {
foreignKey:'user_location',
});

module.exports = { User, Book };
