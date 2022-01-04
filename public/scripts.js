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

        return value = new Intl.NumberFormat('pt-BR', {
            style: `currency`,
            currency: `BRL`
        }).format(value/100)
    }
}