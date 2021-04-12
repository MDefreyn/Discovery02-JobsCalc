module.exports = {
  remainingDays(job) {
    //Dias para finalizar o projeto
    const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed()
    //Pegar data de criação do projeto
    const createdDate = new Date(job['created_at'])
    //Definir quantos dias o projeto precisa
    const dueDay = createdDate.getDate() + Number(remainingDays)
    //Definir data de finalização do projeto
    const dueDate = createdDate.setDate(dueDay)
    //Definir dias faltantes em Milisegundos
    const timeDiffInMs = dueDate - Date.now()
    //Milisegundos de um dia
    const dayInMs = 1000 * 60 * 60 * 24
    //Definir a diferença de dias para o final do projeto
    const dayDiff = Math.ceil(timeDiffInMs / dayInMs)
    return dayDiff
  },

  calculateBudget: (job, valueHour) => valueHour * job['total-hours']
}