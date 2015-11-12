var Reflux = require('reflux');

var action = Reflux.createAction();

var store = Reflux.createStore({
    init() {
        this.listenTo(action, this.onAction)
    },

    onAction(data){
        this.trigger(data);
    }
});

store.listen(function(data){
    console.log(data);
})

action({message: "Live long and prosper"});


