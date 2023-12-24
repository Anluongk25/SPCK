
  // đưa thông tin đã đăng ký lên localStorage
  if(localStorage.getItem('accounts') === null){
    localStorage.setItem('accounts', JSON.stringify([]))
}
document.getElementById('submit').addEventListener('click', function (){
    const name = document.getElementById('Username').value
    const password = document.getElementById('password').value
    const account= {
        name: Username,
        password: password
    
    }
    const accounts = JSON.parse(localStorage.getItem('accounts'))
    accounts.push(account)
    localStorage.setItem('accounts', JSON.stringify(accounts))
})



