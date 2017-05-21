<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
  
          <div class="modal-header">
            <slot name="header">
              <h3 class="center">Add a customer</h3>
            </slot>
          </div>
  
          <div class="modal-body">
            <slot name="body">
              <div class="form-group row">
                <label for="firstname" class="col-2 col-form-label">Firstname</label>
                <div class="col-10">
                  <input v-model.trim="firstName" class="form-control" type="text" id="firstname">
                </div>
              </div>
              <div class="form-group row">
                <label for="lastname" class="col-2 col-form-label">Lastname</label>
                <div class="col-10">
                  <input v-model.trim="lastName" class="form-control" type="text" id="lastname">
                </div>
              </div>
              <div class="form-group row">
                <label for="nat" class="col-2 col-form-label">Nationality</label>
                <div class="col-10">
                  <input v-model.trim="nat" class="form-control" type="text" id="nat">
                </div>
              </div>
              <div class="form-group row">
                <label for="example-email-input" class="col-2 col-form-label">Email</label>
                <div class="col-10">
                  <input v-model.trim="email" class="form-control" type="email" id="example-email-input">
                </div>
              </div>
            </slot>
          </div>
  
          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-success modal-default-button" @click="$emit('close')">
                Validate
              </button>
              <button class="btn btn-danger modal-default-button" @click="$emit('close')">
                Cancel
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'toto.tutu@gmail.com',
      nat: 'FR'
    }
  }
}
</script>

<style scoped>
.index {
  visibility: hidden
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 40%;
  margin: 0px auto;
  padding: 20px 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.modal-header h3 {
  margin-top: 0;
}

/*.modal-body {
  margin: 20px 0;
}*/

.modal-default-button {
  float: right;
}







/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

