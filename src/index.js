document.addEventListener('keypress', function (e) {


  if (e.key === "Enter") {
    f.btn().click();
  }
})




function start() {
  login();
}

function login() {
  showLoading();
  firebase.auth().signInWithEmailAndPassword(f.email().value, f.senha().value).then(response => {
    hideLoading();
    window.location.href = "pg/home.html"
  }).catch(error => {
    hideLoading();
    alert("Dados inválidos!")
  });

}


const f = {
  email: () => document.querySelector('#nome'),
  senha: () => document.querySelector('#senha'),
  btn: () => document.querySelector('#btnEntrar')
};













