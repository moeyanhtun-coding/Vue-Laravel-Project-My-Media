<template>
  <div class="d-flex justify-content-center mt-3">
    <button class="btn btn-danger me-4" v-on:click="homePage()">Home</button>
  </div>
  <div class="offset-3 col-6">
    <div
      v-if="validation"
      class="mt-3 alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      <strong>The Credential Do Not Match !! </strong>
    </div>
    <div class="shadow mb-5 mt-3 p-5">
      <h2 class="col-4 mb-3 border-bottom">Login Form</h2>
      <div class="mb-3 mt-3">
        <label for="email" class="form-label">Email:</label>
        <input
          v-model="userData.email"
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter email"
          name="email"
        />
      </div>
      <div class="mb-3">
        <label for="pwd" class="form-label">Password:</label>
        <input
          v-model="userData.password"
          type="password"
          class="form-control"
          id="pwd"
          placeholder="Enter password"
          name="pswd"
        />
        <small></small>
      </div>
      <button type="submit" v-on:click="login()" class="btn btn-primary">
        Submit
      </button>
    </div>
  </div>
</template>

<script src="../js/loginPage.js"></script>
