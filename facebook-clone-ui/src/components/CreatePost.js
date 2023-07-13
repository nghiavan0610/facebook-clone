'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { IoMdPhotos } from 'react-icons/io';
import { BsEmojiSmile } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addPost } from '@/redux/features/postSlice';

const CreatePost = ({ user }) => {
    const fbUrl = process.env.NEXT_PUBLIC_FACEBOOK_CLONE_ENDPOINT;

    const inputRef = useRef(null);
    const hiddenFileInput = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);
    const dispatch = useDispatch();

    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                setImageToPost(e.target.result);
            };
        }
    };

    const removeImage = () => {
        setImageToPost(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!inputRef.current.value) return;
        const formData = new FormData();

        formData.append('file', imageToPost);
        formData.append('post', inputRef.current.value);
        formData.append('name', user.name);
        formData.append('email', user.email);
        formData.append('profilePic', user.image);

        try {
            const response = await axios.post(fbUrl, formData, {
                headers: { Accept: 'application/json' },
            });

            inputRef.current.value = '';
            dispatch(addPost(response.data));
            removeImage();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
            <div className="flex p-4 space-x-2 items-center">
                <Image
                    src={user.image}
                    height={40}
                    width={40}
                    alt="user-image"
                    className="rounded-full cursor-pointer"
                />
                <form className="flex flex-1">
                    <input
                        className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4"
                        type="text"
                        ref={inputRef}
                        placeholder={`What's on your mind, ${user.name}`}
                    />
                    <button hidden onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>

            {imageToPost && (
                <div
                    onClick={removeImage}
                    className="flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer"
                >
                    <Image
                        src={imageToPost}
                        height={40}
                        width={50}
                        alt="image-to-post"
                        className="object-contain h-10"
                    />
                    <RiDeleteBin6Line className="h-8 hover:text-red-500" />
                </div>
            )}

            <div className="flex justify-evenly py-2">
                <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
                    <HiOutlineVideoCamera size={20} className="text-red-500" />
                    <p className="font-semibold text-gray-600">Live Video</p>
                </div>
                <div
                    onClick={handleClick}
                    className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer"
                >
                    <IoMdPhotos size={20} className="text-green-500" />
                    <p className="font-semibold text-gray-600">Photo/Video</p>
                    <input onChange={addImageToPost} type="file" hidden accept="image/*" ref={hiddenFileInput} />
                </div>
                <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
                    <BsEmojiSmile size={20} className="text-yellow-500" />
                    <p className="font-semibold text-gray-600">Feeling/Activity</p>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
