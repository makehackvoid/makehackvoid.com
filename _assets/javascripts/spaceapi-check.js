
$( document ).ready(function() {
    jQuery.get('/spaceapi.json',function(d){
       $('#space-status-open').toggle(d.open);
       $('#space-status-closed').toggle(!d.open);
    });
});

