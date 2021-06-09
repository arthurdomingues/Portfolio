class HomeController {
  async index (req, res) {
    res.status(200)
    res.json({ Hello: 'Hello World' })
  }
}

module.exports = new HomeController()
