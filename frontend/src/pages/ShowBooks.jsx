/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect,useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import BackButton from '../components/BackButton.jsx'
import Spinner from '../components/Spinner.jsx'

const ShowBooks = ()=> {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(()=>{
        setLoading(true)
        axios.get(`http://localhost:5555/books/${id}`).then((response) => {
          console.log(id)
            setBook(response.data)
            setLoading(false)
        }).catch((error)=>{
          console.log(error.message)
          setLoading(false)
        })
    }, [])
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-xl my-4'>Details of {book.title}</h1>
      {loading ? (
        <Spinner/>
      ) : (
        <div className="flex flex-col border-2 border-sky-00 rounded-xl w-fit p-4">
            <div className="my-4">
                <span className="text-xl mr-4 text-blue-600">ID</span>
                <span>{book._id}</span>
            </div>
            <div className="my-4">
                <span className="text-xl mr-4 text-blue-600">Title</span>
                <span>{book.title}</span>
            </div>
            <div className="my-4">
                <span className="text-xl mr-4 text-blue-600">Author</span>
                <span>{book.author}</span>
            </div>
            <div className="my-4">
                <span className="text-xl mr-4 text-blue-600">Published Year</span>
                <span>{book.publishYear}</span>
            </div>
            <div className="my-4">
                <span className="text-sm mr-4 text-red-800" >Created at:</span>
                <span className="text-xs">{new Date(book.createdAt).toString()}</span>
                <br/>
                <span className="text-sm mr-4 text-red-800" >Updated at:</span>
                <span className="text-xs">{new Date(book.updatedAt).toString()}</span>
            </div>
        </div>

      )}
      
    </div>
  )
}

export default ShowBooks
