import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Post from '../components/Post'
import useGetPosts from '../hooks/useGetPosts'

function PostsScreen() {
    const url="https://dummyapi.io/data/v1/post?page=1&limit=10"
    const [posts,setPosts]=useState([])
    useEffect(async()=>{
        const fetchedPosts= await useGetPosts(url);
        setPosts(fetchedPosts.data);
        setTimeout(()=> console.log(fetchedPosts.data),1000)
      
        //erroe handling for fetching posts
    },[])
  return (
    <View>
        {!(posts===[])?
        posts.map((post)=><Post post={post} key={post.id}/>):<Text>no posts</Text>
        }
    </View>
  )
}

export default PostsScreen