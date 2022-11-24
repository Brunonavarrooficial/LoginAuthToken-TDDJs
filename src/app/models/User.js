module.export = (Sequelize, DataTypes) => {
    const User = Sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
    })

    return User
}

