Fams = new Meteor.Collection('fams');
if(Meteor.isClient) {
  template.fars.events({
    'click .submit':function()  {
      Fams.insert({
        name: $('.farmr').val()
      });
      $('.farmr').val('');
    }
  })
}
