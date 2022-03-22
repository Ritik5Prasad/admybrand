import React,{useState} from 'react'
import foodData from './dummy-data/food-data.json'
import { FlatList,Text,View,TextInput,StyleSheet,Button,TouchableOpacity} from 'react-native'


const SearchBarScreen=(props)=> {
  const [text,changeText]=useState("");
  const [data,setData]=useState([])  
  
  
  
    const search=(el)=>{
        if(text.length === 0)
        return
        return el.name>text;
    }
  return (
    <View>
              <View style={styles.searchContainer}>
        <TextInput  onChangeText={newText => changeText(newText)}
       value={text}  placeholder='Search'  />
                  <View style={styles.searchButton}><Button  color='orange' title="+"/></View>
              </View>
             <FlatList data={foodData.filter(search)}
             keyExtractor={item => item.name} renderItem={
                 itemData=>(
                    <TouchableOpacity  onPress={()=>{
                        setData(oldArray => [...oldArray, {"name":itemData.item.name}]);
                        changeText("");
                    }} style={styles.search}><Text>{itemData.item.name}</Text></TouchableOpacity >
                 )
             } />
                  
              <FlatList
              
              data={data}
              keyExtractor={item=>item.name}
              renderItem={
                  itemData => (
                      <View
                     style={styles.listContainer}>
                          <Text  style={styles.listText} >{itemData.item.name}</Text></View>
                  )
              }
              />
    </View>
  )
}
const styles=StyleSheet.create({
    input:{
        padding:2,
        fontSize:20
    },
    searchContainer:{
        marginTop:52,
        borderWidth:1,
        marginLeft:10,
        marginRight:10,
        width:"95%",
        alignContent:'center',
        textAlign:'center',
        flexDirection:'row',
        display:'flex',
        justifyContent:'space-between'
    },
    listContainer:{
        marginTop:10,
        padding:12,
        fontSize:23,
        fontWeight:'bold'
    },
    listText:{
        fontWeight:'bold',
        fontSize:23,
        borderBottomWidth:1
    },
    searchButton:{
        width:60,
        fontSize:23,
        color:'black',
        
        
    },
   ScrollView:{
       marginTop:20,
       borderWidth:2,
       width:'80%',
       height:'40%',
       marginLeft:20
   },
   search:{
       padding:4,

   }
})
export default SearchBarScreen