class NegociacaoController {
    constructor (){
        
        let $ = document.querySelector.bind(document);
        
        let _inputData = $("#data");
        let _inputQuantidade = $("#quantidade");
        let _inputValor = $("#valor");

    }
    
    adiciona(event){
        event.preventDefault();

        let data = new Date(
            ...this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2)
        );

        let negociacao = new Negociacao(
            this._inputData,
            this._inputQuantidade,
            this._inputValor
        );

        console.log(negociacao);
    }


}