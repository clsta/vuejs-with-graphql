<template>
  <div id="app">
    <h1>Find the position</h1>
    <section class = "dropdown-wrapper">
        <div class="dropdown">
            <input v-model="searchQuery" type="text" id= "inputstate" placeholder="Search for State">
            <div id = "statelist" class = "options">
                <ul>
                <li @click="selectItem(state)" v-for= "(state, index) in filteredState" :key="`state-${index}`">
                {{state.name}}
                </li>
                </ul>
            </div>
        </div>
    </section>
    <GoogleMap v-bind:inputposition="filteredState" ></GoogleMap>
  </div>
</template>
<script>
import GoogleMap from './components/GoogleMap.vue'
import {filterState} from './graphql/findstates'
export default{
  name: 'App',
  components: {
    GoogleMap
  },
  data(){
    return{
       searchQuery:"",
       selectedItem:null,
       statell:[]
    }
   
  },
  computed:{
    filteredState(){
      
      if(this.searchQuery ==""){
        return [];
      }
        
        return this.findState(this.searchQuery);
      

    },

  },
  methods:{
    selectItem(state){
      document.getElementById("inputstate").value = state.name;
      this.searchQuery = state.name;

    },
    findState(state){
      filterState({"name": state}).then(
        res =>{
          this.statell = res.data.getfilteredStates
        }
      )
      return this.statell

    },
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
        body{text-align:center}
        .dropdown-wrapper{
            width: 400px;
            position: relative;
            margin: auto;
            margin-left:10%;
            
        }
        .selected-item{
            height: 40px;
            border: 2px solid gray;
            padding: 5px;
            font-size: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .dropdown{
            position: absolute;
            border: 2px solid gray;
            top:45px;
            left:0;
            right:0;
            width: 100%;
        }
        input{
            width:90%;
            height:30px;
            border: 2px solid rgb(127, 79, 182);
            font-size: 16px;
            padding: 5px;
        }
        .options{
            width: 100%;
        }
        ul{
            list-style: none;
            text-align: left;
            padding-left:8px;
            max-height: 300px;
            overflow-y: scroll;
            overflow-x: hidden;
        }
        li{
            width: 100%;
            border-bottom: 1px solid gray;
            padding:10px;
            cursor: pointer;
        }
        li:hover{
            background-color: rgb(183, 196, 209);
        }
        #map{
            height:400px;
            width:100%;
        }
</style>

