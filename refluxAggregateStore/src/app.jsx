var Reflux = require('reflux');


var updateAge = Reflux.createAction();
var updateName = Reflux.createAction();

var ageStore = Reflux.createStore({
  init(){
    this.listenTo(updateAge, this.onUpdateAge);
  },

  onUpdateAge(data){
    this.trigger(data);
  }                                
});

var nameStore = Reflux.createStore({
  init(){
    this.listenTo(updateName, this.onUpdateName);
  },

  onUpdateName(data){
    this.trigger(data);
  }
});

var personStore = Reflux.createStore({
  person: {name: "", age: 0},

  init(){
    this.listenTo(updateName, this.onPersonUpdated);
    this.listenTo(updateAge, this.onPersonUpdated);
  },

  onPersonUpdated(data){
    var {name, age} = data;//ES6 extract data from an object on the right size of the equal sign
    this.person.name = name || this.person.name;
    this.person.age = age || this.person.age;                                
    console.log(this.person);
  }
});


updateAge({age: 50});
updateName({name: "John"});
updateName({name: "Frank"});
updateAge({age: 30});
updateAge({age: 35});
updateName({name: "Sally"});






