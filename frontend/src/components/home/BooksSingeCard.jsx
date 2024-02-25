/* eslint-disable react/prop-types */

import {Link} from 'react-router-dom'
import {PiBookOpenTextLight} from 'react-icons/pi'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineEdit,} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineDelete} from 'react-icons/md'

const BooksSingeCard = ({book}) => {
  return (
    <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 realtive hover:shadow-xl">
            <h2 className="mx-20 bg-red-300 text-center rounded-lg">
                {book.publishYear}
            </h2>
            <h4 className="my-2 text-gray-500">{book._id}</h4>
            <div className="flex justify-start item-center gap-x-2">
                <PiBookOpenTextLight className="text-red-300 text-2xl"/>
                <h2 className="my-1">{book.title}</h2>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                <BiUserCircle className="text-red-300 text-2xl"/>
                <h2 className="my-1">{book.author}</h2>
            </div>
            <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
                <Link to={`/books/details/${book._id}`}><BsInfoCircle className="text-2xl text-green-800 hover:text-black"></BsInfoCircle>
                </Link>
                <Link to={`/books/edit/${book._id}`}><AiOutlineEdit className="text-2xl text-green-800 hover:text-black"></AiOutlineEdit>
                </Link>
                <Link to={`/books/delete/${book._id}`}><MdOutlineDelete className="text-2xl text-green-800 hover:text-black"></MdOutlineDelete>
                </Link>
            </div>


    </div>
  )
}

export default BooksSingeCard
