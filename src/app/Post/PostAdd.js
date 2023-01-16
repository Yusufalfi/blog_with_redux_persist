import React, {useState} from 'react'
import { addPosts } from './PostSlice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

const PostAdd = () => {

    const selector = useSelector((user) => user.user)
    // console.log("Post add Selector", selector);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        //if all true
        if(title && content && userId) {
            dispatch(addPosts({
                id: nanoid(),
                title: title,
                content: content,
                userId: userId,
                date: new Date().toISOString(),
            }));
            setTitle("")
            setContent("")
            setUserId("")
            navigate('/')
        }else {
            alert("silahkan isi tidak boleh Kosong!!!")
        }
    }

  return (
    <div className='border p-5'>
        <h1 className='font-bold text-xl mb-5 '>Add Post</h1>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col mb-4'>
                <label>Title</label>
                <input 
                 type='text' 
                 value={title}
                 onChange={(e) => setTitle(e.target.value)} 
                 placeholder='title'
                 className='border border-black outline-none py-1 px-3'
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Author</label>
                <select onChange={(e) => setUserId(e.target.value)} className='border border-black outline-none py-1 px-3'>
                    <option>--Pilih Penulis--</option>
                    {selector.map((user) => (
                     <option key={user.id} value={user.id}>{user.penulis}</option>
                    ))}
                </select>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Content</label>
                <textarea 
                 value={content}
                 onChange={(e) => setContent(e.target.value)}
                 placeholder='content' 
                 cols='30' rows='10' 
                 className='border border-black outline-none py-1 px-3'
                 ></textarea>
            </div>
            <div>
                <button
                 className='bg-blue-200 px-5 py-2 w-full mt-2 mb-2'>
                  Add Post
                </button>
            </div>
        </form>
    </div>
  )
}

export default PostAdd