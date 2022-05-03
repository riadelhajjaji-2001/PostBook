
const useGetPostsByTag =async (tag,page,limit) => {
    const url=`https://dummyapi.io/data/v1/tag/${tag}/post?page=${page}&limit=${limit}`
    console.log("postsScreen")
        const myHeaders=new Headers();
        myHeaders.append("app-id","625c402dc48cf93352d6e34b");
        const  myInit={
            method:'GET',
            headers:myHeaders,
        
        }
        const res=await fetch(url,myInit);
        const data=await res.json();
        return data;

}

export default useGetPostsByTag
// const searchByTag=async(tag)=>{
//     setIsLoading(true)
//     const fetchedPosts= await useGetPosts(`https://dummyapi.io/data/v1/tag/${tag}/post`,5);
//     if (fetchedPosts!==[]) {setPosts(fetchedPosts.data);
//     setIsLoading(false)}
// }