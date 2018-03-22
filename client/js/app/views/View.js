class View {

    constructor(elemento) {
        this._elemento = elemento
    }

    template(){
        throw new Error('Deve ser Implementado o method tamplate!');
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}