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
        return alert(error.reason);
      } else {
        Router.go('postPage', {
          _id: result
        });
      }
    });

    // Router.go('postsList');

  }

});