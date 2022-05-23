import { Link } from 'react-router-dom'


export function ToyPreview({ toy, onRemoveToy }) {
    const inStock = (toy.inStock) ? 'In stock' : 'missing'
    return (
        <div className="toy-preview">
            <h3>{toy.name}</h3>
            <h5>Price: {toy.price}</h5>
            <h3>{inStock}</h3>
            <button className='btn-delete' onClick={() => onRemoveToy(toy._id)}>x</button>
            <Link to={`/toy/edit/${toy._id}`}><button>Edit</button></Link>
            <Link to={`/toy/${toy._id}`}><button>Details</button></Link>
        </div >
    )
}