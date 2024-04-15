const { Services } = require("../db/models")

class ServicesController {
    async getServices(req, res) {
        const services = await Services.findAll()
        return res.json(services)
    }
    async editServices(req, res) {
        const {id, title, price, price_medium, price_high, service_time} = req.body;
        const service_edit = await Services.update(
            {
                title: title,
                price: price,
                price_medium: price_medium,
                price_high: price_high,
                time: service_time
            },
            {
                where: {
                    id: id,
                },
            }
        )
        return res.json(req.body)
    }
    async deleteServices(req, res) {
        const {id} = req.body;
       
        const service_delete = await Services.destroy({
            where: {
                id: id
            },
        });
        
        return res.json(id)
    }
    async addServices(req, res) {
        const {title, price, price_medium, price_high, service_time} = req.body;
       
        const service_add = await Services.create(
            {
                title: title,
                price: price,
                price_medium: price_medium,
                price_high: price_high,
                time: service_time
            }
        )
        return res.json(service_add)
    }

}

module.exports = new ServicesController()