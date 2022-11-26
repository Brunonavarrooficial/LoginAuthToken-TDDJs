const bcrypt = require('bcryptjs')

module.export = (Sequelize, DataTypes) => {
    const User = Sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING,
    }, {
        hooks: {
            beforeSave: async user => {
                if (user.password) {
                    user.password_hash = await bcrypt.hash(user.password, 8)
                }
            }
        }
    })

    User.prototype.checkPassoword = function (passoword) {
        return bcrypt.compare(passoword, this.passoword_hash)
    }

    return User
}

