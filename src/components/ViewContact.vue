<template>
  <section class="container">

    <h1>View Contact</h1>

    <div class="contact--section">
      <p class="__name">{{firstname}} {{lastname}}</p>

      <p class="__email">{{emailaddress}}</p>

      <p class="__phonenumber">{{phonenumber}}</p>

    </div>
  </section>
</template>

<script>
  import db from './firebaseInit'
  export default {
    name: 'view-contact',
    data () {
      return {
        firstname: null,
        lastname: null,
        emailaddress: null,
        phonenumber: null
      }
    },
    beforeRouteEnter (to, from, next) {
      db.collection('contacts').where('slug', '==', to.params.person).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next(vm => {
            vm.firstname = doc.data().firstname
            vm.lastname = doc.data().lastname
            vm.emailaddress = doc.data().emailaddress
            vm.phonenumber = doc.data().phonenumber
          })
        })
      })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        db.collection('contacts').where('slug', '==', this.$route.params.person).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data())
            this.firstname = doc.data().firstname
            this.lastname = doc.data().lastname
            this.emailaddress = doc.data().emailaddress
            this.phonenumber = doc.data().phonenumber
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  section {
    height: 100vh;
  }
  h1 {
    font-size: 30px;
    margin: 30px 0;
  }
  p {
    margin-bottom: 20px;
  }
  .contact--section {
    background-color: white;
    padding: 20px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
    .__name {
      font-size: 30px;
    }
  }
</style>
