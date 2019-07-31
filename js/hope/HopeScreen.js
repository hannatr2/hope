// Copyright 2019, University of Colorado Boulder

/**
 * @author Hanna
 */
define( require => {
  'use strict';

  // modules
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );
  const hope = require( 'HOPE/hope' );
  const HopeModel = require( 'HOPE/hope/model/HopeModel' );
  const HopeScreenView = require( 'HOPE/hope/view/HopeScreenView' );

  class HopeScreen extends Screen {

    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {

      const options = {
        backgroundColorProperty: new Property( 'white' ),
        tandem: tandem
      };

      super(
        () => new HopeModel( tandem.createTandem( 'model' ) ),
        ( model ) => new HopeScreenView( model, tandem.createTandem( 'view' ) ),
        options
      );
    }
  }

  return hope.register( 'HopeScreen', HopeScreen );
} );