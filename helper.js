'use strict'

const Helper = {
    capitalizeFirstLetter: (x) => {
        return x.toLowerCase( ).replace( /\b[a-z]/g, function ( letter ) {
          return letter.toUpperCase( );
        })
    }
};
