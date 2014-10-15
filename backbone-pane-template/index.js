'use strict';

var Base = require('ribcage-view')
  , _ = require('lodash')
  , rt = require('../../../lib/rt.js')
  , cache = require('../../../app/cache/')
  , Button = require('../../pieces/button')
  , Step = require('../../steps/{{name}}')
  , State = require('ampersand-state').extend({
    // forces you define all properties on the state model
    // this helps catch bugs and makes code more readable
    extraProperties: 'reject'
    // output the derived properties and the props in toJSON
    , toJSON: function toJSON(){
      return _.extend(this.serialize(), this.getAttributes({derived: true}))
    }
  })
  , {{PascalName}}

{{PascalName}} = Base.extend({

  className: '{{name}}'

, stackBranchStart: false

, navBarTitle: '{{name}}'

// back buttons are the default, you don't need to define one
// , navBarLeftButton: new Button({icon: 'chevron-left'})

// You may want to define a right button though.
// Set it to false otherwise.
// Don't forget to set a listener in BindEvents.
, navBarRightButton: new Button({label: 'Next'})

, State: State.extend({
    props: {

    }
  })

// Backbone Events
, bindEvents: function bindEvents(){
    // always stopListening so we don't reattach multiple listeners
    if (this.state){
      this.stopListening(this.state)
      // listen to state, model, etc… events
      // this.listenTo(this.state, 'change:text', this.onStateChangeText)
    }
  }

// e.g.
// , onStateChangeText: function onStateChangeText(state, value){
//     console.log(value)
//   }

// helper methods
// e.g.
// , findModelIndex: function findModelIndex(model){
//     this.collection.findIndex(model)
//   }

// public methods
// e.g.
// , getLabel: function getLabel(){
//     return this.state.label
//   }
//
// , setLabel: function setLabel(label){
//     this.state.label = label
//   }

// Create Subviews
, createStep: function createStep(){
    return new Step({})
  }

// Lifecycle Methods
, beforeInit: function beforeInit(options){
    this.state = new this.State(_.omit(options, ['model', 'collection']))
  }

, afterInit: function afterInit(){
    this.step = this.createStep()
  }

// load in all necessary data here
// if you don't need this method, you should delete it
// NOTE: you might need to create subviews here after you've loaded the necessary
// models and/or collections
// loadData docs: https://github.com/Techwraith/ribcage-view#loaddatafunction-done
, loadData: function loadData(done){
    done()
  }

// , beforeRender: function beforeRender(){
//   }

, afterRender: function afterRender(){
    this.appendSubview(this.step)
  }

})

module.exports = {{PascalName}}
