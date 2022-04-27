import AsyncStorage from '@react-native-async-storage/async-storage';
export const useSetUser=async(user)=>{
    await  AsyncStorage.removeItem('user')
    await  AsyncStorage.setItem('user',JSON.stringify(user))
    console.log("the user is saved")

}
export const useGetUser=async()=>{
    const user=await AsyncStorage.getItem("user");
    return await JSON.parse(user);
    
}

export const useLogout=async()=>{
  await AsyncStorage.removeItem("user");
}

