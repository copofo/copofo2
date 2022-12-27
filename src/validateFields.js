function teste(){
    const email = f.email().value
    const senha = f.senha().value

    f.btn().disabled = !senha ? true : false
    f.btn().disabled = !email ? true : false

  
}