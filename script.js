//Welcome Speech
function welcome(){
    const user = document.getElementById("user-name").value;
    if (user.trim =="") {
        alert("Tolong isi nama anda!");
    } else {
        document.getElementById("user").textContent = user;
    }
}

// form validation
function formValidation(){
    const nama = document.getElementById("name-input").value;
    const tanggalLahir = document.getElementById("date").value;
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked')?.value;
    const pesan = document.getElementById("pesan").value;

    // Display current time
    const currentTime = new Date().toLocaleString();
    document.getElementById("current-time").textContent = currentTime;

    // Display form data
    if (nama && tanggalLahir && jenisKelamin && pesan) {
        alert("Mohon lengkapi semua data!");
    } else {
        
        document.getElementById("result-form").innerHTML = `
            <strong>Nama:</strong> ${nama} <br>
            <strong>Tanggal Lahir:</strong> ${tanggalLahir} <br>
            <strong>Jenis Kelamin:</strong> ${jenisKelamin} <br>
            <strong>Pesan:</strong> ${pesan}
        `;
    }
};

// banner auto slide
let indexBanner = 0;

function nextSlide(){
    if (indexBanner = indexBanner + 1 ){
        changeBackground()
    }
    

//fungsi untuk mengubah background
function changeBackground(){
    let bannerList = document.getElementsByClassName('banner-image');
    console.log(bannerList.length);

    //reset index banner
    if (indexBanner > bannerList.length - 1 ){
        indexBanner = 0 ;
    }
    indexBanner != i ;
    //looping untuk mengubah background
    for(let i = 0; i < indexList.length; i++){
        bannerList[i].style.display = 'none';
    }
    bannerList[indexBanner].style.display = 'block';
}}
setInterval(nextSlide, 3000);
