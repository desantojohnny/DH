let dia = "terça-feira";

let resultado = dia == "Domingo" ? "vou para praia" : "fique em casa"; //if ternario - ele foi criado para situações simples, não consegue colocar um novo else if
console.log(resultado)

switch(dia){
    case "Segunda":
        console.log("Vou para o trabalho")
        break;
        case "Quarta-feira":
            console.log("Dia de estudar")
            break;
            case "Sexta-feira":
                console.log("Dia de HappyHour")
                break;
                default:
                    console.log("Vá ao cinema")
}