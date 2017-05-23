<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
  
          <div class="modal-header">
            <slot name="header">
              <h3 slot="header">{{ mode }} customer</h3>
            </slot>
          </div>
  
          <div class="modal-body">
            <slot name="body">
              <div class="form-group row">
                <label for="firstname" class="col-2 col-form-label">Firstname</label>
                <div class="col-10">
                  <input v-model.trim="customer.firstName" placeholder="constantin" class="form-control" type="text" id="firstname">
                </div>
              </div>
              <div class="form-group row">
                <label for="lastname" class="col-2 col-form-label">Lastname</label>
                <div class="col-10">
                  <input v-model.trim="customer.lastName" placeholder="guidon" class="form-control" type="text" id="lastname">
                </div>
              </div>
              <div class="form-group row">
                <label for="nat" class="col-2 col-form-label">Nationality</label>
                <select v-model="customer.nationalite">
                  <option v-for="lang in languages" :value="lang">{{lang}}</option>
                </select>
              </div>
              <div class="form-group row">
                <label for="example-email-input" class="col-2 col-form-label">Email</label>
                <div class="col-10" :class="{ 'control': true, 'has-danger': errors.has('email') }">
                  <input class="form-control" v-validate="'required|email'" :class="{'form-control-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
                  <small v-show="errors.has('email')" class="form-control-feedback">{{ errors.first('email') }}</small>
                </div>
              </div>
            </slot>
          </div>
  
          <div class="modal-footer">
            <slot name="footer">
              <button v-if="mode != 'update'" class="btn btn-success modal-default-button" @click="createCustomer(customer)">
                Create
              </button>
              <button v-if="mode == 'update'" class="btn btn-success modal-default-button" @click="updateCustomer(customer)">
                Update
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
      mode: ''
    }
  },
  props: {
    customers: Array,
    customer: Object,
    languages: Array
  },
  methods: {
    createCustomer: function (customer) {
      // this.$emit('close')
      // this.$emit('create', customer)
      console.log(this.$validator.errorBag, this.errors)
    },
    updateCustomer: function (customer) {
      this.$emit('close')
      this.$emit('update', customer)
    }
  },
  mounted: function () {
    this.customer.firstName ? this.mode = 'update' : this.mode = 'create'
  }
}
</script>

<style scoped>
small.has-danger{
  text-align: left;
}

label[for="nat"] {
  margin-right: 8%;
}

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
  text-transform: capitalize
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

