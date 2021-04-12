const Profile = require('../model/Profile')

module.exports = {
  async index(req, res) {
    res.render("profile", { profile: await Profile.get() })
  },
  
  async update(req, res) {
    //req.body, pegar dados
    const data = req.body
    //Define semanas do ano
    const weksPerYear = 52
    //Remove semanas de férias e pega semanas de cada mês
    const weeksPerMonth = (weksPerYear - data["vacation-per-year"]) / 12
    //Total de horas trabalhadas na semana
    const weekTotalHours = data["hours-per-day"] * data["days-per-week"]
    //Horas trabalhadas no mês
    const monthlyTotalHours = weekTotalHours * weeksPerMonth
    //Qual sera o valor de horas
    const valueHours = data["value-hour"] = data["monthly-budget"] / monthlyTotalHours
    //Ajusta object profile
    const profile = await Profile.get()
    await Profile.update({
      ...profile,
      ...req.body,
      "value-hour": valueHours
    })
    return res.redirect('/profile')
  }
}