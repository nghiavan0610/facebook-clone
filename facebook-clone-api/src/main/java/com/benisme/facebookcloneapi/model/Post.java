package com.benisme.facebookcloneapi.model;

import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Blob;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Post {

    private String id;

    private String post;
    private String name;
    private String email;
    private String image;
    private String file;
    private String profilePic;
    private String timeStamp;
}
