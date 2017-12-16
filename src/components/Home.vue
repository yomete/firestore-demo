<template>
  <section class="container">
    <div class="columns">
      <div class="column is-8">
        <h1>All Contacts</h1>

        <div class="loader-section" v-if="loading">
          <div class="user-list">
            <div class="columns">
              <div class="column is-8">
                <p class="user-list__header animated-background__header"></p>
                <p class="user-list__sub animated-background__sub"></p>
                <p class="user-list__sub animated-background__sub"></p>
              </div>
              <div class="column is-4 right">
                <router-link class="button is-primary" to="/user">View Person</router-link>
              </div>
            </div>
          </div>

          <div class="user-list">
            <div class="columns">
              <div class="column is-8">
                <p class="user-list__header animated-background__header"></p>
                <p class="user-list__sub animated-background__sub"></p>
                <p class="user-list__sub animated-background__sub"></p>
              </div>
              <div class="column is-4 right">
                <router-link class="button is-primary" to="/user">View Person</router-link>
              </div>
            </div>
          </div>

          <div class="user-list">
            <div class="columns">
              <div class="column is-8">
                <p class="user-list__header animated-background__header"></p>
                <p class="user-list__sub animated-background__sub"></p>
                <p class="user-list__sub animated-background__sub"></p>
              </div>
              <div class="column is-4 right">
                <router-link class="button is-primary" to="/user">View Person</router-link>
              </div>
            </div>
          </div>

          <div class="user-list">
            <div class="columns">
              <div class="column is-8">
                <p class="user-list__header animated-background__header"></p>
                <p class="user-list__sub animated-background__sub"></p>
                <p class="user-list__sub animated-background__sub"></p>
              </div>
              <div class="column is-4 right">
                <router-link class="button is-primary" to="/user">View Person</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="user-list" v-for="person in contacts">
          <div class="columns">
            <div class="column is-8">
              <p class="user-list__header">{{person.firstname}} {{person.lastname}}</p>
              <div class="inner">
                <div class="left">
                  <p class="user-list__sub"><strong>Email</strong>: {{person.emailaddress}}</p>
                </div>
                <div class="right">
                  <p class="user-list__sub"><strong>Phone Number</strong>: {{person.phonenumber}}</p>
                </div>
              </div>
            </div>
            <div class="column is-4 right">
              <router-link class="button is-primary" v-bind:to="{ name: 'view-contact', params: { person: person.slug }}">View Person</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  import db from './firebaseInit'

  export default {
    name: 'home',
    data () {
      return {
        contacts: [],
        loading: true
      }
    },
    created () {
      db.collection('contacts').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          let data = {
            'id': doc.id,
            'firstname': doc.data().firstname,
            'lastname': doc.data().lastname,
            'emailaddress': doc.data().emailaddress,
            'phonenumber': doc.data().phonenumber,
            'slug': doc.data().slug
          }
          this.contacts.push(data)
        })
      })
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 30px;
    margin: 30px 0;
  }
  .user-list {
    margin-top: 30px;
    background-color: white;
    padding: 20px;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.05);
    .column {
      height: 95px;
    }
    .inner {
      .left {
        width: 50%;
        float: left;
        text-align: left;
      }
      .right {
        width: 50%;
        float: left;
        text-align: left;
        p {
          width: 100%;
          text-align: left;
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        background: #4B75FF;
      }
    }
    .user-list__header {
      font-size: 20px;
      font-weight: 700;
    }
    .user-list__sub {
      font-size: 15px;
      margin-top: 10px;
    }
  }
  @keyframes placeHolderShimmer{
    0%{
      background-position: -468px 0
    }
    100%{
      background-position: 468px 0
    }
  }
  .animated-background__header {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: placeHolderShimmer;
    animation-name: placeHolderShimmer;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: #eeeeee;
    background: -webkit-gradient(linear, left top, right top, color-stop(8%, #eeeeee), color-stop(18%, #dddddd), color-stop(33%, #eeeeee));
    background: -webkit-linear-gradient(left, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    -webkit-background-size: 800px 104px;
    background-size: 800px 104px;
    height: 20px;
    width: 400px;
    position: relative;
  }
  .animated-background__sub {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: placeHolderShimmer;
    animation-name: placeHolderShimmer;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: #eeeeee;
    background: -webkit-gradient(linear, left top, right top, color-stop(8%, #eeeeee), color-stop(18%, #dddddd), color-stop(33%, #eeeeee));
    background: -webkit-linear-gradient(left, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    -webkit-background-size: 800px 104px;
    background-size: 800px 104px;
    height: 20px;
    width: 200px;
    position: relative;
  }
</style>
