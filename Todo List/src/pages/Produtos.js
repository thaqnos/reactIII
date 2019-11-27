import React, { Fragment } from 'react'
import Card from '../components/Card/Card'

const produtos = [
    {
        id: 1,
        title: "Juarez",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1XsdmwmduNHV4V1tXjPCazVlvQWanTUjJ3I_tbi4OC0Y3cLwu",
        price: "Ranzinza"
    },
    {
        id: 2,
        title: "Ricardo",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDiLRPJ4FJY77i79_3y0KYYkZGN9-RRWqjjL_pUP9t48Cq2SLH",
        price: "Amigo de todos"
    },
    {
        id: 3,
        title: "Tabata",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbVy5djXeO4Rv1W_f1M6BkZJwtHwb5EFtb1-97PeTspALuRJJj",
        price: "Bravinia"
    },
    {
        id: 4,
        title: "Bellinha",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJTBCznbVTPI60LH5lBRX-I5B_Zaj06EgOMs3R6TpIgJkkcIF1",
        price: "Muito fofinha"
    },
    {
        id: 5,
        title: "Margarida",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFBpvlO5zd5W7_DvRoPG2ocqsCIDQb6ACFuwyqHS59oAqKJtvg",
        price: "Muito engraçado"
    },
    {
        id: 6,
        title: "Toinho",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoIZ2ANB63sD9YfO60PQu_atsbhUvOecOTErVhGUJ732lJZYXg",
        price: "Show"
    },
    {
        id: 7,
        title: "Ribamar",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQM3gFylnhOFI1zM881G4vyHPRMGdSrLlQI7Qy9gk0Th8QDWtLN",
        price: "Amigo d+"
    },
    {
        id: 8,
        title: "Allan",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7Cq7W1vRdYbY3UXWK9eLS5yABA5RKOU4h8jqgX0enspxnpzhr",
        price: "Doidinho"
    },
    {
        id: 9,
        title: "Robierto",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqxcnVgFGMXkHd0uIseqeEyp4MDMqqoGT1qlOJQ-lkBpm-x99Q",
        price: "Muito esperto"
    },
    {
        id: 10,
        title: "Madalena",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1hY-M7fpL5FYm68L39jIKfNB8-8E673VpnXRPEag6GchyVLhx",
        price: "Muito dócil"
    }
]

const Produtos = () => (
    <Fragment>
        {produtos.map(item => (
            <Card key={item.id} produto={item}/>
        ))}
    </Fragment>
)

export default Produtos;