var React = require("react");

var CountDownForm = React.createClass({
    onSubmit :function (e) {
        e.preventDefault();
        var strSeconds = this.refs.Seconds.value;
        if(strSeconds.match(/^[0-9]*$/) && strSeconds.length > 0 ){
            this.refs.Seconds.value="";
            this.props.onSetCountDown(parseInt(strSeconds,10));
        }
    },
    render : function(){
        return (
            <div>
                 <form ref='form' onSubmit={this.onSubmit}>
                     <input type="text" ref="Seconds" placeholder="Enter time in seconds" />
                     <button className="button expanded" type="submit">Start</button>
                 </form>
             </div>
        );
    }
});


module.exports=CountDownForm;