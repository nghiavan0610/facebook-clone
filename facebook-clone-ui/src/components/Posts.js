import React, { useEffect } from 'react';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { addAllPosts, selectPost } from '@/redux/features/postSlice';
import axios from 'axios';

const Posts = () => {
    const fbUrl = process.env.NEXT_PUBLIC_FACEBOOK_CLONE_ENDPOINT;
    const dispatch = useDispatch();
    const posts = useSelector(selectPost);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(fbUrl);
                dispatch(addAllPosts(response.data));
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Posts;
