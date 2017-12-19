var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jquery");
var TestUtils = require("react-addons-test-utils");

var CountDownForm = require("CountDownForm");



describe('CountDownForm',()=>{
    it('should exist',()=>{
       expect(CountDownForm).toExist(); 
    });
    
    it('should setCountdown when a valid seconds entered',()=>{
       var spy = expect.createSpy();
       var countdownForm = TestUtils.renderIntoDocument(<CountDownForm onSetCountDown={spy} />);
       var $el = $(ReactDOM.findDOMNode(countdownForm));
       countdownForm.refs.Seconds.value='109';
       TestUtils.Simulate.submit($el.find('form')[0]);
       expect(spy).toHaveBeenCalledWith(109);
    });
});