var WService=function() {
WService.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
WService.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return WService._staticInstance.get_path();},
HelloWorld:function(succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'HelloWorld',false,{},succeededCallback,failedCallback,userContext); },
GetHotels:function(prefixText,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetHotels',false,{prefixText:prefixText},succeededCallback,failedCallback,userContext); }}
WService.registerClass('WService',Sys.Net.WebServiceProxy);
WService._staticInstance = new WService();
WService.set_path = function(value) { WService._staticInstance.set_path(value); }
WService.get_path = function() { return WService._staticInstance.get_path(); }
WService.set_timeout = function(value) { WService._staticInstance.set_timeout(value); }
WService.get_timeout = function() { return WService._staticInstance.get_timeout(); }
WService.set_defaultUserContext = function(value) { WService._staticInstance.set_defaultUserContext(value); }
WService.get_defaultUserContext = function() { return WService._staticInstance.get_defaultUserContext(); }
WService.set_defaultSucceededCallback = function(value) { WService._staticInstance.set_defaultSucceededCallback(value); }
WService.get_defaultSucceededCallback = function() { return WService._staticInstance.get_defaultSucceededCallback(); }
WService.set_defaultFailedCallback = function(value) { WService._staticInstance.set_defaultFailedCallback(value); }
WService.get_defaultFailedCallback = function() { return WService._staticInstance.get_defaultFailedCallback(); }
WService.set_enableJsonp = function(value) { WService._staticInstance.set_enableJsonp(value); }
WService.get_enableJsonp = function() { return WService._staticInstance.get_enableJsonp(); }
WService.set_jsonpCallbackParameter = function(value) { WService._staticInstance.set_jsonpCallbackParameter(value); }
WService.get_jsonpCallbackParameter = function() { return WService._staticInstance.get_jsonpCallbackParameter(); }
WService.set_path("/webservice/wservice.asmx");
WService.HelloWorld= function(onSuccess,onFailed,userContext) {WService._staticInstance.HelloWorld(onSuccess,onFailed,userContext); }
WService.GetHotels= function(prefixText,onSuccess,onFailed,userContext) {WService._staticInstance.GetHotels(prefixText,onSuccess,onFailed,userContext); }
