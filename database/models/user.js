module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("users", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      confirm_password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
    });
    return Users;
  };

    