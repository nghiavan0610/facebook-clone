package com.benisme.facebookcloneapi.repository;

import com.benisme.facebookcloneapi.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<PostEntity, String> {
}
