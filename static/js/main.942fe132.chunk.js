(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),i=a.n(o),s=(a(13),a(4)),c=a(5),l=a(1),u=a(7),h=a(6),m=(a(14),a(15),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={currentTemp:"",tomorrowTemp:"",location:""},n.handleChange=n.handleChange.bind(Object(l.a)(n)),n.fetchWeatherData=n.fetchWeatherData.bind(Object(l.a)(n)),n.success=n.success.bind(Object(l.a)(n)),n.error=n.error.bind(Object(l.a)(n)),n.generateURL=n.generateURL.bind(Object(l.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){navigator.geolocation.getCurrentPosition(this.success,this.error)}},{key:"success",value:function(e){this.setState({location:Math.round(e.coords.latitude).toString()+","+Math.round(e.coords.longitude).toString()}),this.fetchWeatherData(!0,e.coords.latitude.toString()+","+e.coords.longitude.toString())}},{key:"error",value:function(){this.setState({location:"Helsinki"}),this.fetchWeatherData(!1,"Helsinki")}},{key:"generateURL",value:function(e,t){return!1===e?"https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::forecast::hirlam::surface::point::multipointcoverage&place="+t:"https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::forecast::hirlam::surface::point::multipointcoverage&latlon="+t}},{key:"fetchWeatherData",value:function(e,t){var a=this,n=this.generateURL(e,t);fetch(n).then((function(e){if(200===e.status)return e.text();console.log("Problem: "+e.status)})).then((function(e){var t=(new DOMParser).parseFromString(e,"application/xml");window.responseParsed=t;var n=t.querySelector("doubleOrNilReasonTupleList").innerHTML.split("\n"),r=n.slice(1,n.length-1).map((function(e){return e.trim()})).map((function(e){return e.split(" ")}));a.setState({currentTemp:r[0][1],tomorrowTemp:r[23][1]})})).catch((function(e){console.log("Error: ",e)}))}},{key:"handleChange",value:function(e){"Enter"===e.key&&(this.setState({location:e.target.value}),this.fetchWeatherData(!1,e.target.value))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("input",{type:"text",className:"LocationInput",defaultValue:this.state.location,onKeyPress:this.handleChange}),r.a.createElement("h2",null,"Current location: ",this.state.location," ")),r.a.createElement("body",{className:"App-body"},r.a.createElement("div",{className:"Temperature"},r.a.createElement("h4",null,"Current Temperature"),this.state.currentTemp),r.a.createElement("div",{className:"Temperature"},r.a.createElement("h4",null,"Tomorrow's Temperature"),this.state.tomorrowTemp)))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.942fe132.chunk.js.map