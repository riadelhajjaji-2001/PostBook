import AsyncStorage from '@react-native-async-storage/async-storage';
import ScyclicStruc from '../hooks/ScyclicStruc'
export const useSetUser=async(user)=>{
    await  AsyncStorage.removeItem('user')
    await  AsyncStorage.setItem('user',JSON.stringify(user,ScyclicStruc()))
    console.log("the user is saved")

}
export const useGetUser=async()=>{
    const userData=await AsyncStorage.getItem("user");
    const user=JSON.parse(userData)
    console.log(user)
    return user;
    
}

export const useLogout=async()=>{
  await AsyncStorage.removeItem("user");
}

export const setName=async(name)=>{
    await AsyncStorage.setItem('name',name)
    console.log("the user is saved")
}
export const getName=async()=>{
    const userData=await AsyncStorage.getItem("name");
   // const user=JSON.parse(userData)
   console.log(userData)
   return userData
    

}