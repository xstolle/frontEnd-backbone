'use strict'
const AddressesView = Backbone.View.extend({
  el: '.addresses',
  events: {
    'click .addButton': 'addAddress'
  },
  initialize: function ( initialAddresses ) {
    this.collection = new Addresses( initialAddresses );
    this.collection.comparator = 'name';
    this.collection = this.collection.sort( );
    this.render( );
    this.listenTo( this.collection, 'add', this.render );
  },
  render: function ( ) {
    this.$( ".addressList" ).detach( );
    this.collection.each( function ( item ) {
      this.renderAddress( item );
    }, this);
  },
  renderAddress: function ( item ) {
    const addressView = new AddressView({ model: item });
    this.$el.append( addressView.render( ).el );
    this.$( "form" ).trigger( "reset" );
  },
  addAddress: function ( e ) {
    let formData = {
      name: this.$( '.name' ).val( ),
      city: this.$( '.city' ).val( )
    };
    if ( formData.name !== '' && formData.city !== '' ) {
      e.preventDefault( );
      formData.name = Helper.capitalizeFirstLetter( formData.name );
      formData.city = Helper.capitalizeFirstLetter( formData.city );
      this.collection.add(new Address( formData ));
    }
  }
})
