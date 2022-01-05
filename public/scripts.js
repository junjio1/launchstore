// const input = document.querySelector(`input[name="price"]`)
// input.addEventListener("keydown", function(e){


//    setTimeout(() => {
//     let { value } = e.target
//     // lern about regular expressions  https://www.w3schools.com/js/js_regexp.asp
//     // \D = every alphabetic character
//     // \d = every number 
//     //  \g global
//        value = value.replace(/\D/g, "")

//         value = new Intl.NumberFormat('pt-BR', {
//             style: `currency`,
//             currency: `BRL`
//         }).format(value/100)

//        e.target.value = value
//    }, 1);
// })

const Mask = {
    apply(input, func){
        setTimeout(() => {
            input.value = Mask[func](input.value)
        }, 1);
    },
    formatBRL(value){
        value = value.replace(/\D/g, "")

        return new Intl.NumberFormat('pt-BR', {
            style: `currency`,
            currency: `BRL`
        }).format(value/100)
    }
}

const PhotosUpload = {
    uploadLimit: 6,
    handleFileInput(event) { 
        const { files: fileList } = event.target
        const { uploadLimit } = PhotosUpload

        if(fileList.length > uploadLimit){
            alert(`Envie no maximo ${uploadLimit} photos`)
            event.preventDefault()
            return
        }

        Array.from(fileList).forEach((file)=>{
            const reader = new FileReader()

            reader.onload = () => {
                const image = new Image()
                image.src = String(reader.result)

                const div = document.createElement('div')
                div.classList.add("photo")

                div.onclick = () => alert('remover foto')

                div.appendChild(image)

                document.querySelector('#photos-preview').appendChild(div)
            }

            reader.readAsDataURL(file)

        })
    }
}