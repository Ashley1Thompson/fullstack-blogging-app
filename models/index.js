const User = require('./User');
const Content = require('./Content');

User.hasMany(Content, {
  foreignKey: 'user_id'
});

Content.belongsTo(User, {
  foreignKey: 'user_id'
});

Content.hasMany(Comment);

User.hasMany(Comment);

module.exports = { User, Content };