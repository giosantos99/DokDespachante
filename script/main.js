const scrollToForm = () => {
  const button = document.querySelector('.toForm')

  const clickFn = (event) => {
    event.preventDefault()

    const formulario = document.querySelector('.formulario')

    formulario.scrollIntoView({ behavior: 'smooth', block: 'center' })
    
  }

  button.addEventListener('click', clickFn)
}
scrollToForm()


const onSerFilial = () => {
  const form = document.querySelector('.formContato')

  const submitFn = async (event) => {
    event.preventDefault()

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value

    const result = document.querySelector('.result')

    let texto

    const regex = /^[a-záàâãéèêíïóôõöúçñ]+$/i;
   
    const valido = nome.split(/ +/).every(parte => regex.test(parte))

    if (valido) {
      try {
        await axios.post('https://reqres.in/api/users', { first_name: nome, email })
        texto = 'Dados enviados com sucesso!'
      } catch (e) {
        console.log(Error(e))

        texto = 'Ocorreu um erro ao enviar os dados!'
      }
      
    } else texto = 'Dado inválido!'

    result.innerText = texto
  }

  form.addEventListener('submit', submitFn)
}
onSerFilial()
