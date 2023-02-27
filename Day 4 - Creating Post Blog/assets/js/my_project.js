let datas = []

function getData(event){
    event.preventDefault()

    let title = document.getElementById("namaProject").value
    let content = document.getElementById("deskripsi").value
    let image = document.getElementById("inputFile").files


    image = URL.createObjectURL(image[0])

    let data = {
        title,
        content,
        image,
        date: new Date(),
        author: "Yoga Wicaksono"
    }

    datas.push(data)
    showData()
}

const showData = () => {
    document.getElementById("isiMyProject").innerHTML = ''
    for(let i = 0; i < datas.length; i++) {
        document.getElementById("isiMyProject").innerHTML += `
            <div id="java">
                <div>
                <img src="${datas[i].image}" alt="Project">
                            <a href="my_project_detail.html target="_blank" style="text-decoration: none;">
                                <h2>
                                    ${datas[i].title}
                                </h2>
                            </a>
                            <p>
                                ${datas[i].content}.
                            </p>
                            </div>
                            <div class="logoCode">
                                <div>
                                    <i class="fa-brands fa-android fa-2x"></i>
                                </div>
                                <div>
                                    <i class="fa-brands fa-java fa-2x"></i>
                                </div>
                            </div>

                                <div style="margin:10px 10px; text-align:justify;">
                                ${datas[i].date} <br> ${datas[i].author}
                                </div>
                            
                            <div class="editProject">
                                <div>
                                    <button type="submit" style="margin: 20px 15px;">Edit</button>
                                </div>
                                <div>
                                    <button type="submit" style="margin: 20px 15px;">Delete</button>
                                </div>
                            </div>
             </div>`
    }
}