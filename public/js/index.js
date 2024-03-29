const form = document.getElementById('form')

function onSubmit(form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form)
        const response = await fetch('/', {
            method: 'POST',
            body: formData
        })
        const data = await response.json()
        return data
    })
}