function getData(){
    let nama = document.getElementById("nama").value
    let email = document.getElementById("email").value
    let phoneNumber = document.getElementById("phoneNumber").value
    let subject = document.getElementById("subject").value
    let address = document.getElementById("address").value

    if(nama == "") {
        return alert("Nama Harus Diisi")
    } else if(email == "") {
        return alert("Email Harus Diisi")
    } else if(phoneNumber == "") {
        return alert("No Telpon Harus Diisi")
    } else if(subject == "") {
        return alert("Kepentingan Harus Diisi")
    } else if(address == "") {
        return alert("Pesan Harus Diisi")
    }

    const emailReceiver= "yogaaneh1@gmail.com"

    let a = document.createElement("a")
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo Nama Saya ${nama}, bisakah menghubungi saya di ${phoneNumber}, Alamat saya di ${address}`
    a.click()

    let data = {
        nama,
        email,
        phoneNumber,
        subject,
        address
    }
    
    console.log(data)

}

