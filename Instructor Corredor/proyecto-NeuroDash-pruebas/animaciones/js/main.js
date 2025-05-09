window.addEventListener('load', function () {
    const loading = this.document.getElementById('loader')
    const content = this.document.getElementById('content')

    const timeDuration = 5000; 

    this.setTimeout(function () {
        loading.style.display = 'none'
        content.style.display = 'block'
    }, timeDuration)
})

