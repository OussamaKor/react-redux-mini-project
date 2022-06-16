import React , {useState} from 'react'
import { addUser } from '../../redux/api'
import { useDispatch } from 'react-redux'
import './Form.css'

export default function Form() {
    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const handleSubmit= (e) =>{
        e.preventDefault();
        addUser({nom,email},dispatch)
    }
  return (
    <form onSubmit={handleSubmit} >
        <div className='form-group'>
            <input type="text"
            placeholder="Entrer Name"
            onChange={(e)=> setNom(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <input type="text"
            placeholder="Entrer Email"
            onChange={(e)=> setEmail(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <input type="submit"
            placeholder="Add User"
            />
        </div>


    </form>
  )
}
