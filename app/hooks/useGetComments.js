const useGetComments =async (id,page,limit) => {
    const url=`https://dummyapi.io/data/v1/post/${id}/comment?page=${page}&limit=${limit}`
    console.log("comments")
        const myHeaders=new Headers();
        myHeaders.append("app-id","625c402dc48cf93352d6e34b");
        const  myInit={
            method:'GET',
            headers:myHeaders,
        
        }
        const res=await fetch(url,myInit);
        const data=await res.json();
        return await data.data;

}

export default useGetComments