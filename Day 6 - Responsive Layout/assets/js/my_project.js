let datas = []

function getData(event){
    event.preventDefault()

    let title = document.getElementById("namaProject").value
    let content = document.getElementById("deskripsi").value
    let image = document.getElementById("inputFile").files

    const date1 = document.getElementById("tglAkhir").value;
    const date2 = document.getElementById("tglMulai").value;

    // Convert input dates to Date objects
    const dateObj1 = new Date(date1);
    const dateObj2 = new Date(date2);

    // Calculate difference in milliseconds
    const milliseconds = Math.abs(dateObj2 - dateObj1);

    // Convert milliseconds to months
    const months = Math.floor(milliseconds / (1000 * 60 * 60 * 24 * 30.44));

    const checkboxes = document.getElementsByName('coding');
    const checkedItems = [];
  
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedItems.push(checkbox.value);
      }
    });
  
    console.log(checkedItems);
  
    image = URL.createObjectURL(image[0])

    let data = {
        title,
        content,
        image,
        date : months + " Bulan",
        author: "Yoga Wicaksono",
        cek : checkedItems,
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
                                <i class="${datas[i].cek}"></i>
                                </div>
                            </div>

                                <div style="margin:10px 10px; text-align:justify;">
                                ${datas[i].date} <br> ${datas[i].author} <br>
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