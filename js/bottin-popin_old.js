	// ==== ckset ========================================= //
	function _ReadCookie_(cookieName) { var theCookie=" "+document.cookie; var ind=theCookie.indexOf(" "+cookieName+"="); if (ind==-1) ind=theCookie.indexOf(";"+cookieName+"="); if (ind==-1 || cookieName=="") return ""; var ind1=theCookie.indexOf(";",ind+1); if (ind1==-1) ind1=theCookie.length; return unescape(theCookie.substring(ind+cookieName.length+2,ind1)); }
	function return_xiti_CID_list(){
	var _CID_LIST_ = '';
	if( _ReadCookie_('xtor412253')!="") { _CID_LIST_ += _ReadCookie_('xtor412253'); }
	if(_ReadCookie_('xtocl412253')!="") { _CID_LIST_ += '|'+decodeURIComponent(_ReadCookie_('xtocl412253')); }
	return _CID_LIST_; }
	// ==== ckset
	function is_touch_device() { if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1) || (navigator.userAgent.indexOf('iPad') != -1)) return true; return false; }
	// ============================================================================================================================================================ //
	function sendData( xiti_xtpage ){
	_url_ = 'https://fc1.1bis.com/societegenerale3/?path=eip&rdv=1&obj=1';
	var _CIDs_ ='';
	_CIDs_ = return_xiti_CID_list();
	if(_CIDs_!='') _url_+= '&src='+_CIDs_;
	else 		   _url_+= '&src=null';
	LoadCarte( _url_ , xiti_xtpage );		
	return true;
	}
	// ============================================================================================================================================================ //
	function LoadCarte( _url_ , _xiti_xtpage_ ){
	if(_xiti_xtpage_=="") return false;
	var _STRCIDTAB_ = _xiti_xtpage_.split(':');
	var _CIDPAGE_ = _STRCIDTAB_[_STRCIDTAB_.length-1];
	var _iframe_ = '';
		_iframe_ +=  '<div style="padding:0px;margin:0px auto;height:0px;float:none;" id="spacer_top" ></div>';
		_iframe_ +=  '<div style="box-shadow: 0px 0px 15px #555;padding:0px;margin:0px auto;width:770px;height:613px;border:2px solid #555;background:#fff;float:none;">';
		_iframe_ +=  '<div class="etape" style="padding:20px 0px;margin:0px auto;width:100%;height:50px;float:none;border-bottom:1px solid #aaa;"></div>';	
		_iframe_ +=  '<iframe id="bottinFrame" scrolling="no" marginwidth="0" style="overflow:hidden;border:0px;width:770px;height:522px;" src="'+_url_+'|'+_CIDPAGE_+'" frameborder="0"></iframe>';
		_iframe_ +=  '</div>';
		_iframe_ +=  '<div style="width:200px;padding:5px 0px;margin:0px auto;background:#555;color:#fff;font-size:12px;float:none;text-align:center;display:block;cursor:pointer;" onclick="$(\'#contentprehome\').css(\'display\',\'none\');$(\'#contentprehome2\').css(\'display\',\'none\'); $(\'body\').css(\'box-sizing\',\'border-box\'); $(\'body\').css(\'-moz-box-sizing\',\'border-box\'); $(\'body\').css(\'-webkit-box-sizing\',\'border-box\'); $(\'body\').css(\'-o-box-sizing\',\'border-box\');">FERMER</div>';
		var img_ = new Image();
		img_.src = 'https://logs128.xiti.com/hit.xiti?s=412253&s2=253&p='+_xiti_xtpage_+'-RDV_Popin&di=0#'+Math.random();

	$('body').prepend ('<div id="contentprehome2" style="z-index:3; opacity:0;-moz-opacity:0;-ms-filter:\'alpha(opacity=0)\';filter:alpha(opacity=0);width:100%;margin:0px auto;padding:0px;z-index:100;position:absolute;">'+_iframe_+'</div><div id="contentprehome" style="z-index:99;position:absolute;float:left;width:100%;height:100%;background:#fff;opacity:0;-moz-opacity:0;-ms-filter:\'alpha(opacity=0)\';filter:alpha(opacity=0);"></div>');

	$('body').css('height','100%');
	$('body').css('box-sizing','content-box');
	$('body').css('-moz-box-sizing','content-box');
	$('body').css('-webkit-box-sizing','content-box');
	$('body').css('-o-box-sizing','content-box');
	$('#contentprehome').delay(300).animate({opacity:0.9}, 800 , function(){ $('#contentprehome2').animate({opacity:1}); });

	var spacr_top = $(window).height() - 600;												  
	var topH_ = Math.ceil(spacr_top/2);
	if(spacr_top>1) $('#spacer_top').css('height', topH_+'px');
	else 			  $('#spacer_top').css('height', '1px');

	return true;
	}
	