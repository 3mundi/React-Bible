var catalogList = [
  {
    Id: 1,
    price: 5,
    description: 'this is a <b>cool</b> product'
  },
  {
    Id: 2,
    price: 5,
    description: '<span style="color:blue">this is a cool product</span>'
  },
  {
    Id: 3,
    price: 5,
    description: '<b>this</b> is a cool product'
  },
  {
    Id: 4,
    price: 5,
    description: '<b><i>this</i> is the coolest product!</b>'
  },
  {
    Id: 5,
    price: 5,
    description: '<span style="color:red">this is a cool product</span>'
  },
  {
    Id: 6,
    price: 5,
    description: 'this is a <i>cool</i> product'
  }
];


var Card = React.createClass({

    render: function () {
        return (
            <div>
                <h2>{this.props.Id}</h2>
                <h2>{this.props.price}</h2>
                <div dangerouslySetInnerHTML={{__html: this.props.description}}/>
            </div>
        )
    }
})

var App = React.createClass({

    getInitialState: function () {
        return {
            catalogList: this.props.catalogList.splice(0)
        }
    },

    render: function () {
        var that = this;
        return (
            <div>
                {this.state.catalogList.map(function (catalog) {
                    return (
                        <Card Id={catalog.Id} price={catalog.price} description={catalog.description}></Card>
                    )
                }, this)}
            </div>
        )
    }
})


React.render(<App catalogList={catalogList}></App>, document.body);
