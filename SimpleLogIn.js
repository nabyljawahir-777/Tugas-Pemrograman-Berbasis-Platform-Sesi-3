const username = "admin";
const password = "12345";
if (username == "admin" && password == "12345"){
    console.log("Login Berhasil")
}else if (username != "admin" && password == "12345"){
    console.log("Login Tidak Berhasil")
}else if (username == "admin" && password != "12345"){
     console.log("Login Tidak Berhasil")
}else if (username != "admin" && password != "12345"){
     console.log("Login Tidak Berhasil")
}