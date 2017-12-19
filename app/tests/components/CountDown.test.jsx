var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jquery");
var TestUtils = require("react-addons-test-utils");

var CountDown = require("CountDown");


describe('CountDown',()=>{
   it('should exist',()=>{
       expect(CountDown).toExist();
   });
   it('it should set CountDown',(done)=>{
      var countdown = TestUtils.renderIntoDocument(<CountDown />);
      countdown.handleSetCountdown(10);
      expect(countdown.state.count ).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');
      
      setInterval(()=>{
          expect(countdown.state.count).toBe(9);
          done();
      },1001);
     
   });
   
   it('it should never set CountDown to less than zero',()=>{
      var countdown = TestUtils.renderIntoDocument(<CountDown />);
      countdown.handleSetCountdown(1);
     
      
      setInterval(()=>{
          expect(countdown.state.count).toBe(0);
      },3001);
     
   });
});