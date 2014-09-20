var ids=new Array('poll','comments','email');
function switchid(id,Tabid,aaa,tPoll){
	if (tPoll == 1) {document.getElementById('PollTab').className = 'tab';}
	document.getElementById('DiscussTab').className = 'tab';
	document.getElementById('EmailTab').className = 'tab';
	document.getElementById(Tabid).className = 'activeTab';
	hideallids();
	showhidediv(id,'block');
	if (aaa == 1) {document.getElementById('PollTab').blur()}
	//if (aaa == 1) {document.frmPoll.options[0].focus()}
	if (aaa == 2) {document.frmComments.comments.focus()}
	if (aaa == 3) {document.frmEmail.email.focus()}
	}
function hideallids(){//loop through the array and hide each element by id
	for (var i=0;i<ids.length;i++){
		showhidediv(ids[i],'none')}}
function showhidediv(id,showhide) {
	if (document.getElementById) { // IE5, NS6
		document.getElementById(id).style.display = showhide;}
	else {
		if (document.layers) { // Netscape 4
			document.id.display = showhide;}
		else { // IE 4
			document.all.id.style.display = showhide;}}}
function addfav() {
	if (window.sidebar) { // Mozilla Firefox Bookmark
		window.sidebar.addPanel(document.title, document.location.href,"");
	} else if( window.external ) { // IE Favorite
		window.external.AddFavorite(location.href,document.title); }
}
function setasHome(){//set as home page
	document.body.style.behavior='url(#default#homepage)';
	document.body.setHomePage('http://www.buzzle.com');
}