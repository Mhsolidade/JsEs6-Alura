class NegociacaoController {
    constructor (){
        
        let $ = document.querySelector.bind(document);
        
        let inputData = $("#data");
        let inputQuantidade = $("#quantidade");
        let inputValor = $("#valor");

    }
    
    adiciona(event){
        event.preventDefault();

        
        console.log(this.inputData.value);
        console.log(this.inputQuantidade.value);


    }


}