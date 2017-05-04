'use strict'
const AddressView = Backbone.View.extend({
  tagName: 'div',
  className: 'addressList',
  template: _.template($( '.addressListTemplate' ).html( )),
  render: function ( ) {
    this.$el.html(this.template( this.model.attributes ));
    return this;
  }
});
