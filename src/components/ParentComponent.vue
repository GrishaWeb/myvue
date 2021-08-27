<template>
  <div>
    <h1 v-if="fromChild">Hello from First component: {{ user }}</h1>
    <h2 v-else> the data is null  </h2>
    <child-component
      :message="msg"
      v-on:sendToParentData="showDataFromChild"
    />
    <p>{{fromChild}}</p>
    <div v-if="fetchedData">
        <p>{{fetchedData.id}}</p>
        <small>{{fetchedData.title}}</small>
    </div>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent";

export default {
  components: { ChildComponent },
    data() {
      return {
        user: {
          name: '',
          surname: '',
          job: '',
        },
        msg: 'this is a message from parent',
        fromChild: 'oldValuw  ',
        fetchedData: null,
      }
    },
    watch: {
      fromChild: function (newValue, oldValue){
          console.warn('new', newValue)
          console.error('old', oldValue)
      }
    },
    created() {
      // setTimeout(() => {
      //     fetch('https://jsonplaceholder.typicode.com/todos/1')
      //       .then(response => response.json())
      //       .then(json => {
      //         console.log(json)
      //         this.fetchedData = json;
      //       })
      // }, 2000)
    },
    methods: {
          showDataFromChild(arg){
              this.fromChild = arg;
          }
    }
}
</script>

<style scoped lang="css">

</style>
