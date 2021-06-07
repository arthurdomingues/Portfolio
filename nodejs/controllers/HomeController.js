class HomeController {
  async index (req, res) {
    res.send('Hello World!!')
  }
}

module.exports = new HomeController()
