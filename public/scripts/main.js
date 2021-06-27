import { query } from 'express'
import {Modal} from './modal'

const modal = Modal()

//Pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach( button => {
    //Adicionar a escuta
    button.eventlistener("click", event =>{
        //Abrir modal
        modal.open()
    })
})

modal.open()