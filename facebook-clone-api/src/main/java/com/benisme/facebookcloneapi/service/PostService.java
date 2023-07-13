package com.benisme.facebookcloneapi.service;

import com.benisme.facebookcloneapi.model.Post;

import java.util.List;

public interface PostService {
    Post addPost(Post post) throws Exception;

    List<Post> getPost();
}
