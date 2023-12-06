import React from 'react'

const ItemDetail = () => {
  return (
    <div className='col-md-4 iifset-md-4'>
        <img src={item.imagen} className='img-fluid' alt={item.nombre} />
        <h3>{item.nombre}</h3>
        <p>{item.descripcion}</p>
        <p>$ {item.precio}</p>
        <p>Cantidad/Stock: {item.stock}</p>
    </div>
  )
}

export default ItemDetail