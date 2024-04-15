const { Admins } = require("../db/models")


class AdminController {
    async getAdmins(req, res) {
        const admins = await Admins.findAll()
        return res.json(admins)
    }
    async registration(req, res) {
        const {login, password} = req.body

        if(!login || !password) {
            return console.log("Некорректно")
        }
        const candidate = await Admins.findOne({where: {login}})
        if(candidate) {
            return console.log("Пользователь с таким Логином уже существует!")
        }
        
        const user = await Admins.create({login, password})
        
        return res.json(user)
    }

    async login(req, res, next) {
        const {login, password} = req.body

        const admin = await Admins.findOne({where: {login}})
        if (!admin) {
            return next('Пользователь с таким именем не найден')
        }
        let comparePassword = await Admins.findOne({where: {password}})
        if(!comparePassword) {
            return next("Указан неверный пароль")
        }
        return res.json(admin)
    }
}

module.exports = new AdminController()