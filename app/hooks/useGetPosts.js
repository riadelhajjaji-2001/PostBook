
const useGetPosts =async (url,limit) => {
    console.log("postsScreen")
        const myHeaders=new Headers();
        myHeaders.append("app-id","625c402dc48cf93352d6e34b");
        const  myInit={
            method:'GET',
            headers:myHeaders,
        
        }
        const res=await fetch(url+limit,myInit);
        const data=await res.json();
        return data;

}

export default useGetPosts