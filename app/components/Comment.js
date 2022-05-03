import { View, Text ,Image,StyleSheet} from 'react-native'
import React from 'react'

const Comment = ({comment}) => {
    
  return (
    <View style={styles.commentContainer}>
        <View style={styles.owner}>
            <Image style={styles.ownerImage} source={{uri:comment.owner.picture}}/>
            <View>
                <Text style={styles.ownerName} >{comment.owner.title}. {comment.owner.firstName} {comment.owner.lastName}</Text>
            </View>
            
        </View>
      <Text style={styles.message}>{comment.message}</Text>
      <Text style={styles.publishDate}>{comment.publishDate}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    commentContainer:{
        borderWidth: 1,
        backgroundColor: '#eee',
        padding: 10,
        width:'90%',
        borderRadius:12,
        marginBottom:5,
        flex:1
        
    },
    owner: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
       
    
      },
      ownerName: {
        marginLeft: 9,
        marginBottom: 1,
        color:'rgba(0,0,255,0.7)'
    
    
      },
      commentDate: {
        width: '100%',
        marginLeft: 9
      },
      ownerImage: {
        borderRadius: 50,
        width: 30,
        height: 30,
        
      },
      publishDate:{
        alignSelf:'flex-end',
        fontSize:12,
        color:'rgba(0,0,0,0.7)'
            },
          message:{
          padding:2,

            }
})

export default Comment