function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "https://img.icons8.com/ios-filled/50/menu-rounded.png"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "https://img.icons8.com/ios-filled/50/000000/delete-sign--v1.png"
    }
}