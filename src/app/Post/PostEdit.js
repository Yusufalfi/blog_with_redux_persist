import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { editPosts } from './PostSlice';



const PostEdit = () => {
    const params = useParams()
    const dispatch = useDispatch();
    const selector = useSelector((user) => user.post);
  
    console.log("postEdit", selector);
    // console.log(params.id)
    const navigate = useNavigate();
    const existingUser = selector.filter(post => post.id === params.id);
    const {title, content, userId} = existingUser[0];

    const [value, setValue] = useState({
        title : title,
        content: content,
        // userId: userId,
    })
    

const handleSubmit = (e) => {
    // e.preventDefault()
    setValue({
        title: "",
        content: "",
        // userId: "",
    })
    dispatch(editPosts({
        id: params.id,
        title : value.title,
        content: value.content
    }))
    //if all true
    navigate('/')

}

  return (
    <div className='border p-5'>
        <h1 className='font-bold text-xl mb-5 '>Edit Post</h1>
        {/* <form > */}
            <div className='flex flex-col mb-4'>
                <label>Title</label>
                <input 
                 type='text' 
                 value={value.title}
                 onChange={(e) => setValue({...value, title: e.target.value})} 
                 placeholder='title'
                 className='border border-black outline-none py-1 px-3'
                />
            </div>
            {/* <div className='flex flex-col mb-4'>
                <label>Author</label>
                <select  onChange={(e) => setValue({...value, title: e.target.value})}className='border border-black outline-none py-1 px-3'>
                    <option>--Pilih Penulis--</option>
                    {selector.map((user) => (
                     <option key={user.id} value={user.id}>{user.penulis}</option>
                    ))}
                </select>
            </div> */}
            <div className='flex flex-col mb-4'>
                <label>Content</label>
                <textarea 
                 value={value.content}
                 onChange={(e) => setValue({...value, content: e.target.value})}
                 placeholder='content' 
                 cols='30' rows='10' 
                 className='border border-black outline-none py-1 px-3'
                 ></textarea>
            </div>
            <div>
                <button onClick={handleSubmit}
                 className='bg-blue-200 px-5 py-2 w-full mt-2 mb-2'>
                  Edit Post
                </button>
            </div>
        {/* </form> */}
    </div>
  )
}

export default PostEdit

