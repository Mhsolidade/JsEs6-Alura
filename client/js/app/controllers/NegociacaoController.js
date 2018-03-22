class NegociacaoController {
    constructor (){
        
        let $ = document.querySelector.bind(document);
        
        let _inputData = $("#data");
        let _inputQuantidade = $("#quantidade");
        let _inputValor = $("#valor");

    }
    
    adiciona(event){
        event.preventDefault();

        
        console.log(this.inputData.value);
        console.log(this.inputQuantidade.value);


    }


}