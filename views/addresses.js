'use strict'
const AddressesView = Backbone.View.extend({
  el: '#addresses',
  events: {
    'click #add': 'addAddress'
  },
  initialize: function ( initialAddresses ) {
    this.collection = new Addresses( initialAddresses );
    this.collection.comparator = 'name';
    this.collection = this.collection.sort( );
    this.render( );
    this.listenTo( this.collection, 'add', this.render );
  },
  render: function ( ) {
    $( ".addressList" ).detach( );
    this.collection.each( function ( item ) {
      this.renderAddress( item );
    }, this);
  },
  renderAddress: function ( item ) {
    let addressView = new AddressView({ model: item });
    this.$el.append( addressView.render( ).el );
    $( "form" ).trigger( "reset" );
  },
  addAddress: function ( e ) {
    let formData = {};
    $( '#addressForm div' ).children( 'input' ).each( function ( i, el ) {
      if ( $( el ).val( ) !== '' ) {
        formData[el.id] = $( el ).val( ).toLowerCase( ).replace( /\b[a-z]/g, function ( letter ) {
          return letter.toUpperCase( );
        });
      }
    });
    if ( $( '#name' ).val( ) !== '' || $( '#city' ).val( ) !== '' ) {
      e.preventDefault( );
      this.collection.add(new Address( formData ));
    }
  }
})
