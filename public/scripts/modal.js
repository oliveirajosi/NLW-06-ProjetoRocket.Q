module.exports = function Modal(){
    function open(){
        // Atribui a classe active para a modal
        document.querySelector('.modal-wrapper').classList.add("active")
    }
    function close(){
        //Remove a classe active da modal
    
    }

    return{
        open,
        close
    }
}