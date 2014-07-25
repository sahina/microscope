Template.postSubmit.events({

  'submit form': function(e) {
    e.preventDefault();

    var form = $(e.target);
    var post = {
      url: form.find('[name=url]').val(),
      title: form.find('[name=title]').val(),
      message: form.find('[name=message]').val()
    }

    Meteor.call('post', post, function(error, result) {
      if (error) {
        // display the error to user
        Errors.throw(error.reason);

        if (error.error === 302)
          Router.go('postPage', {
            _id: error.details
          })
      } else {
        Router.go('postPage', {
          _id: id
        });
      }
    });

  }

});