let peso = document.querySelector('#fomulario');
FormData.addEventListenner('submit', function (e) {
    e.preventDefalt();
    console.log('eveno')
})