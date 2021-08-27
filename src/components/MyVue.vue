<template >
  <div  id="myapp">

    <input type="text" id="firstname" placeholder="Enter Your name" v-model="firstname" />
    <input type="text" id=":lastname" placeholder="Enter Your lastname" v-model="lastname" />
    <input type="email" id="email" placeholder="Enter your email" v-model="email"/>
    <input type="password" id="password" placeholder="Enter your password" v-model="password"/>
    <input type="number" id="age" placeholder="Enter your age"  v-model="age"/>

    <div class="container">
      <div class="flex-column">
        <div class="col-6">
          <p>First name {{firstname}}</p>
        </div>
        <div class="col-6">
          <p>Last name  {{lastname}}</p>
        </div>
        <div class="col-6">
          <p>Email  {{email}}</p>
        </div>
        <div class="col-6">
          <p>Password {{password}}</p>
        </div>
        <div class="col-6">
          <p>age  {{age}}</p>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default  {
  name:"myapp",
  data() {
    return {
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      age:'',


    }
  }
}
</script>

<style  >
/*#result{*/
/*  max-width: 450px;*/
/*  border: 1px solid red;*/
/*  min-height: 50px;*/
/*  margin-left: 35px;*/
/*}*/

</style>
