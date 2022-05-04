import React, { useEffect, useState } from 'react'
import {  Text, View,TextInput,StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Button} from 'react-native'
import Post from '../components/Post'
import useGetPosts from '../hooks/useGetPosts'
import Icon from 'react-native-vector-icons/MaterialIcons';
import TopHeader from '../components/TopHeader';
import useGetPostsByTag from '../hooks/useGetPostsByTag';

function PostsScreen({navigation}) {
  //  state
    const [posts,setPosts]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [query,setQuery]=useState("")
    const [networkError,setNetworkError]=useState(false)
    const [Limit, setLimit] = useState(0)
    const [page, setPage] = useState(0)
    const [refresh, setRefresh] = useState(false)
    const [retry, setRetry] = useState(false)
    
   
  //state
    const searchByTag=async(tag)=>{
        
          var fetchedPosts= await useGetPostsByTag(tag,page,Limit);
          const PostsArray=await fetchedPosts.data;
          setPosts(await fetchedPosts.data)
          setIsLoading(false)       
                    
        
       
      //  console.log(fetchedPosts.data)
    }
  //  
    const fetchFivePosts=async()=>{
      setIsLoading(true)
      try{
      const fetchedPosts=await useGetPosts(page,Limit);
      setPosts(await fetchedPosts.data)
    }catch{
      setNetworkError(true)
    }
      setIsLoading(false)
    }
    const fetchMoreFivePosts=async()=>{
  
              setRefresh(true)
              setPage(page+1)
              const fetchedPosts=await useGetPosts(page,Limit);
              setPosts([...posts,...await fetchedPosts.data])
              setRefresh(false)
              console.log("from refresh")
         
     
     
    }
    useEffect(async()=>{
        setPage(0)
        setLimit(5)
        await fetchFivePosts();
       
      
    },[retry])
//check if we can pass an entir object as param to the navigation
    const viewPost=(post_id)=>{
      navigation.navigate("ViewPost",{id:post_id})
  }
  
  const handleSearchByTag=async(tag)=>{
             
              
              if(tag===""){
                setIsLoading(true)
                const fetchedPosts=await useGetPosts(page,Limit);
                setPosts(await fetchedPosts.data);
                setIsLoading(false)
            }else{
              setIsLoading(true)
              await searchByTag(tag)
              setQuery(tag)
             
            }
            setIsLoading(false)
              }
 
  const renderItem=({item:post})=><Post tagQ={query} OnPress={()=>viewPost(post.id)} post={post} />
  //reeeeeeeeeendreing
  return networkError?<View style={styles.netwokErrorContainer}>
    <Text >check network connexion than try</Text>
    <Button title='Retry' onPress={()=>{setRetry(!retry);setNetworkError(false)}}/>
  
  
  </View>:(

    <SafeAreaView style={styles.container}>
      <TopHeader navigation={navigation}/>

      <View style={styles.toolsBar}>
          <View style={styles.search}>
                 <TextInput style={styles.searchText} placeholder='Search posts' onChangeText={async(text)=>{setIsLoading(true);await handleSearchByTag(text)}}/>  
                {/* il reste le cas ou input est vide */}
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("CreatePost")} style={styles.addPost}>
              <Icon size={28} name="post-add"/>
          </TouchableOpacity>
          
      </View>

     
        <View style={styles.Postcontainer}>
            { 
             !isLoading?
                posts.length===0? <View style={styles.noResultForSearch}>
                  <Text style={styles.noResultForSearchText}>
                No results for that tag</Text>
                      </View>:
                    <FlatList
                    data={posts}
                    renderItem={renderItem}
                    keyExtractor={(post,index)=>post.id+index}
                    onEndReached={async()=>await fetchMoreFivePosts()}
                    onEndReachedThreshold={0}
                />:<View style={styles.isLoading}><Text style={styles.isLoadingText} >Loading...</Text></View>
              }

              








        </View>
        {
        refresh?<View style={styles.refresh}><Text style={styles.refreshText}>Refreshing...</Text>
        </View>:null
        }
    </SafeAreaView>
  )
}

export default PostsScreen
const styles = StyleSheet.create({
            container:{
              flex:1,
              backgroundColor:"#fff",
              padding:2
            },
            toolsBar:{
              alignItems:'center',
              flexDirection:'row',
              justifyContent:'space-around'

            },
            addPost:{
            
            // backgroundColor:'blue',
              padding:7,
            

            },
            search:{
                borderColor:'#000',
                margin:3,
                borderWidth:1,
                width:230,
                borderColor:'blue',

            },
            searchText:{
               padding:5,
               marginRight:23
              // fontSize:18,
             
            },
            isLoading:{
              flex:1,
              justifyContent:'center',
              alignItems:'center',
              marginTop:120,
              padding:30
              
            },
            isLoadingText:{
              flex:1,
              fontWeight:'bold',
              fontSize:16,
              color:'rgba(0,0,0,0.5)'
            },
            Postcontainer:{
            
               flex:1,
              padding:10,
              paddingTop:0,
              


            },
            FlatListContainer:{
              backgroundColor:'red',
              flex:1
            },
            refresh:{
                  alignItems:'center',
                  padding:20,
                  backgroundColor:'rgba(0,0,0,0.6)'
            },
            refreshText:{
             color:'#fff',
             fontWeight:'bold'

            },
            netwokErrorContainer:{
              flex:1,
                  justifyContent:'center',
                  alignItems:'center'
            },
            noResultForSearch:{
              flex:1,
              justifyContent:'flex-start',
              backgroundColor:'#eee'
            },
            noResultForSearchText:{
              padding:40,
              color:"black"
            }
})