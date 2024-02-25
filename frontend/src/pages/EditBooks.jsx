/* eslint-disable react-hooks/exhaustive-deps */

import {useState ,useEffect} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


const EditBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear  ,setPublishYear] = useState('');
  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams()
  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5555/books/${id}`).then((response)=>{
      setAuthor(response.data.author)
      setTitle(response.data.title)
      setPublishYear(response.data.publishYear)
      setLoading(false)
    }).catch((error)=>{
      setLoading(false)
      alert('error occured please check console')
      console.log(error)
    })
  },[])


  const handleEditBooks = ()=>{
    const data = {
      title, 
      author, 
      publishYear
    }
    setLoading(true)
    axios.put(`http://localhost:5555/books/${id}`,data).then(()=>{
      setLoading(false)
      navigate('/')
    }).catch((error)=>{
      setLoading(false)
      alert(`error occured ${error.message}`)
      console.log(error)
    })
  }

  return (
   <div className="p-4">
      <BackButton/>
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner/> : ''}
      
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input type="text"
                  value={title}
                  onChange={(e)=> setTitle(e.target.value)} 
                  className="border-2 border-gray-500 px-4 py-2 w-full" />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input type="text"
                  value={author}
                  onChange={(e)=> setAuthor(e.target.value)} 
                  className="border-2 border-gray-500 px-4 py-2 w-full" />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">PublishYear</label>
            <input type="number"
                  value={publishYear}
                  onChange={(e)=> setPublishYear(e.target.value)} 
                  className="border-2 border-gray-500 px-4 py-2 w-full" />
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={handleEditBooks}
          >Save
          </button>
      </div>
   </div>
  )
}

export default EditBooks
