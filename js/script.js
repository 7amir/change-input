new Vue({
  el: "#app",
  data: {
    // togglePassword: document.getElementsByClassName('toggle-password'),
    // t: document.querySelector('.password-field')
    revealPassword: false,
  },
  methods: {
    changeEye: function () {
      // if (document.querySelector('.password-field').type === "text") {
      //   document.querySelector('.password-field').type = "password";
      //   this.togglePassword[0].classList.remove('active')
      // } else {
      //   document.querySelector('.password-field').type = "text";
      //   this.togglePassword[0].classList.add('active')
      // }
      
      this.revealPassword = !this.revealPassword;
    }
  }
})
