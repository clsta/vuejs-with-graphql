<template>
  <div>
  <span>{{markers}}</span>
    <br>
    <GmapMap
      :center='center'
      :zoom='3'
      style='width:800px;  height: 600px;margin-left:40%;'
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in filteredposition"
        :position="m"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: { lat: 53.54714585529198, lng:  -113.49410179636037 },
      searchposition: { lat: 61.3850, lng: -73.587 },
      currentPlace: null,
    }
  },
  mounted() {
    this.geolocate();
    delete this.inputposition['name'];
  },
  methods: {

  },
  computed:{
    filteredposition(){
    delete this.inputposition['name'];
    return this.inputposition
    },


  },
  props: {
          inputposition: []
          }
        
};

</script>