import React, { useEffect, useState } from 'react'
import {  Text, View,TextInput,StyleSheet,ScrollView, TouchableOpacity, FlatList, SafeAreaView, Button} from 'react-native'
import Post from '../components/Post'
import useGetPosts from '../hooks/useGetPosts'
import Icon from 'react-native-vector-icons/MaterialIcons';
import TopHeader from '../components/TopHeader';

function PostsScreen({navigation}) {
  //  state
    const [posts,setPosts]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [query,setQuery]=useState("")
    const [track,setTrack]=useState(0)
    const [Limit, setLimit] = useState(0)
    const [page, setPage] = useState(0)
    const [refresh, setRefresh] = useState(false)
   
  //state
    const searchByTag=async(tag)=>{
        setIsLoading(true)
        const fetchedPosts= await useGetPosts(`https://dummyapi.io/data/v1/tag/${tag}/post`,5);
        if (fetchedPosts!==[]) {setPosts(fetchedPosts.data);
        setIsLoading(false)}
    }
  //  
    const fetchFivePosts=async()=>{
      
      setIsLoading(true)
      //setPage(page+1)
      const fetchedPosts=await useGetPosts(page,Limit);
      setPosts(await fetchedPosts.data)
      setIsLoading(false)
    }
    const fetchMoreFivePosts=async()=>{
  
      setRefresh(true)
      setPage(page+1)
      const fetchedPosts=await useGetPosts(page,Limit);
      setPosts([...await fetchedPosts.data])
      setIsLoading(false)
      setRefresh(false)
     
    }
    useEffect(async()=>{
        setPage(0)
        setLimit(5)
        await fetchFivePosts();
       
      
    },[])
//check if we can pass an entir object as param to the navigation
    const viewPost=(post_id)=>{
      navigation.navigate("ViewPost",{id:post_id})
  }
  
  const handleSearchByTag=async(tag)=>{
              setIsLoading(true)
              if(tag===""){
                
                const fetchedPosts=await useGetPosts(url);
                setPosts(fetchedPosts.data);
                setIsLoading(false)
            }else{
              await searchByTag(tag)
              setQuery(tag)
              setIsLoading(false)
            }
              }
 
  const renderItem=({item:post})=><Post tagQ={query} OnPress={()=>viewPost(post.id)} post={post} />
  //reeeeeeeeeendreing
  return (

    <SafeAreaView style={styles.container}>
      <TopHeader navigation={navigation}/>

      <View style={styles.toolsBar}>
          <View style={styles.search}>
                 <TextInput style={styles.searchText} placeholder='Search posts' onChangeText={(text)=>{setIsLoading(true); handleSearchByTag(text)}}/>  
                {/* il reste le cas ou input est vide */}
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("CreatePost")} style={styles.addPost}>
              <Icon size={28} name="post-add"  />
          </TouchableOpacity>
          
      </View>

     
        <View style={styles.Postcontainer}>

      
{ 
            
            !isLoading? <FlatList
                    data={posts}
                    renderItem={renderItem}
                    keyExtractor={(post)=>post.id}
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
                borderTopColor:'blue',
                borderRightColor:'blue'

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
              paddingTop:0


            },
            FlatListContainer:{
              backgroundColor:'red',
              flex:1
            },
            refresh:{
                  alignItems:'center',
                  padding:20,
                  backgroundColor:'#eee'
            },
            refreshText:{
             color:'black'

            }
})