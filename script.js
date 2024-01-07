// đưa thông tin đã đăng ký lên localStorage
if (localStorage.getItem("accounts") === null) {
  localStorage.setItem("accounts", JSON.stringify([]));
}
document.getElementById("submit").addEventListener("click", function () {
  const name = document.getElementById("Username").value;
  const password = document.getElementById("password").value;
  const account = {
    name: name,
    password: password,
  };
  const accounts = JSON.parse(localStorage.getItem("accounts"));
  accounts.push(account);
  localStorage.setItem("accounts", JSON.stringify(accounts));
});
// kiểm tra tài khoản đã có trên local storage chưa
function checkLogin() {
  const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
  //lấy giá trị từ form
  const enteredUsername = document.getElementById("Username").value;
  const enteredPassword = document.getElementById("password").value;
  //kiểm tra tài khoản đã tồn tại trong local storage chưa
  const foundAccount = storedAccounts.find(
    (account) =>
      account.name === enteredUsername &&
      account.password === enteredPassword
  );
  if (foundAccount) {
    alert("Bạn đã đăng nhập thành công.");
  } else {
    alert("Bạn chưa đăng ký tài khoản.");
  }
}
