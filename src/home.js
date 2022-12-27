const f = {
  btnSair: () => document.getElementById('logout'),
  btn: () => document.getElementById('recarregar'),
  add: () => document.getElementById('add')
}

function logout() {
  firebase.auth().signOut()
    .then(() => {
      window.location.href = '../index.html'
    })
    .catch(() => {
      aler('Erro ao fazer logout!')
    })
}

f.btn().addEventListener('click', ()=>{
  window.location.reload(true)
})

findOperation();

function findOperation() {


  firebase.firestore()
    .collection('entregas')
    .orderBy('date')
    .get()
    .then(snaphot => {
      const operation = snaphot.docs.map(doc => doc.data())
      addOperationToScreen(operation)
    })

 
}

/*Tipo
"1 cx / pg 56"
ap
"154"
code
"Nf: 3250073"
date
"2022-11-30"
nome
"Cynthia Bernardi"
status
"Entregue"
type
"income"*/

function addOperationToScreen(operation) {
  const orderList = document.getElementById('operation')
  operation.forEach(operation => {

    const li = document.createElement('li')
    li.classList.add(operation.type)

    const ap = document.createElement('p')
    ap.innerHTML = "<h1>" + operation.ap + "</h1>"
    li.appendChild(ap)

    const nome = document.createElement('p')
    nome.innerHTML = operation.nome
    li.appendChild(nome)

    const tipo = document.createElement('p')
    tipo.innerHTML = operation.Tipo
    li.appendChild(tipo)

    const code = document.createElement('p')
    code.innerHTML = operation.code
    li.appendChild(code)

    const status = document.createElement('p')
    status.innerHTML = operation.status


    const data = document.createElement('p')
    data.innerHTML = operation.date
    li.appendChild(data)

  

    orderList.appendChild(li)
  })

}



function formatDate(data) {
  return new Date(data).toLocaleDateString('pt-br')
}

