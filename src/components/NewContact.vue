<template>

  <section class="container">
    <h1>Add New Contact</h1>

    <form @submit.prevent="saveContact">

      <div class="field">
        <label class="label">First Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="First Name" v-model="firstname" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Last Name" v-model="lastname" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Email Address</label>
        <div class="control">
          <input class="input" type="email" placeholder="Email Address" v-model="emailaddress" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Phone Number</label>
        <div class="control">
          <input class="input" type="text" placeholder="Phone Number" v-model="phonenumber" required>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button type="submit" class="button is-link">Submit</button>
        </div>
      </div>

    </form>
  </section>

</template>

<script>
    import db from './firebaseInit'
    export default {
      name: 'new-contact',
      data () {
        return {
          firstname: null,
          lastname: null,
          emailaddress: null,
          phonenumber: null
        }
      },
      methods: {
        saveContact () {
          const slug = this.generateUUID()

          db.collection('contacts').add({
            firstname: this.firstname,
            lastname: this.lastname,
            emailaddress: this.emailaddress,
            phonenumber: this.phonenumber,
            slug: slug
          })
            .then(docRef => {
              console.log('Document written with ID: ', docRef.id)
              this.$router.push(`/${slug}`)
            })
            .catch(function (error) {
              console.error('Error adding document: ', error)
            })
        },
        generateUUID () {
          let d = new Date().getTime()
          let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0
            d = Math.floor(d / 16)
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
          })
          return uuid
        }
      }
    }
</script>

<style scoped>

  section {
    height: 100vh;
  }

  h1 {
    font-size: 30px;
    margin: 30px 0;
  }

  .input {
    height: 40px;
  }

</style>
