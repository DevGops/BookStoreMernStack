/* eslint-disable react/prop-types */

import BooksSingeCard from './BooksSingeCard'

const BooksCard = ({books})=> {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((item)=>(
            <BooksSingeCard key={item._id} book={item}/>
        ))}
    </div>
  )
}

export default BooksCard