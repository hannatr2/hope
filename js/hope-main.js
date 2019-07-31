// Copyright 2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Hanna
 */
define( require => {
  'use strict';

  // modules
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const HopeScreen = require( 'HOPE/hope/HopeScreen' );
  const Tandem = require( 'TANDEM/Tandem' );

  // strings
  const hopeTitleString = require( 'string!HOPE/hope.title' );

  const simOptions = {
    credits: {
      //TODO fill in credits, all of these fields are optional, see joist.CreditsNode
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      qualityAssurance: '',
      graphicArts: '',
      soundDesign: '',
      thanks: ''
    }
  };

  // launch the sim - beware that scenery Image nodes created outside of SimLauncher.launch() will have zero bounds
  // until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
  SimLauncher.launch( () => {
    const sim = new Sim( hopeTitleString, [
      new HopeScreen( Tandem.rootTandem.createTandem( 'hopeScreen' ) )
    ], simOptions );
    sim.start();
  } );
} );