$(document).ready(function () {
  $("#contact-form").validate({
    rules: {
      name: 'required',
      email: {
        required: true,
        email: true,
      },
      message: 'required'
    },
    messages: {
      name: 'Name is required',
      email: {
        required: 'Email is required',
        email: 'Wrong email format'
      },
      message: 'Message is required'
    },
    submitHandler: function (form) {
      let name = $("input[name='name']").val();
      alert(name + ', your message has been well received.');
      form.reset();
    }
  });
});