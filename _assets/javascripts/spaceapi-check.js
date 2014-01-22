
$( document ).ready(function() {
    jQuery.get('/spaceapi.json',function(d){
       window.console.log(d.open);
       $('#space-status-open').toggle(d.open);
       $('#space-status-closed').toggle(!d.open);
    });
});

