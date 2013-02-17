$(document).ready(function() {
//alert( $.cookie('username'));
if ( $.cookie('username') == undefined ) {
	$('#userModal').modal('show');
}
$('#usersubmit').click(function() {
	if ( $('#username').val() != undefined && $('#username').val() != null) {
		$.cookie('username', $('#username').val());
		$('#userModal').modal('hide');
	}
});

});