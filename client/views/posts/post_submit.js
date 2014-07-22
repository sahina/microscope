Template.postSubmit.events({

  'submit form': function(e) {
    e.preventDefault();
    
    var form = $(e.target);
    var post = {
      url: form.find('[name=url]').val(),
      title: form.find('[name=title]').val(),
      message: form.find('[name=message]').val()
    }

    post._id = Posts.insert(post);
    
    Router.go('postPage', post);
  }

});