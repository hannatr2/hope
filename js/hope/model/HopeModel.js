// Copyright 2019, University of Colorado Boulder

/**
 * @author Hanna
 */
define( require => {
  'use strict';

  // modules
  const hope = require( 'HOPE/hope' );

  /**
   * @constructor
   */
  class HopeModel  {

    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {
      //TODO
    }

    // @public resets the model
    reset() {
      //TODO Reset things here.
    }

    // @public
    step( dt ) {
      //TODO Handle model animation here.
    }
  }

  return hope.register( 'HopeModel', HopeModel );
} );