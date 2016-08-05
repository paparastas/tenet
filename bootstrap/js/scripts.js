var status_text = null; // Status text var
var status_status = 0; // 0 = non-edit mode | 1 = edit mode

function hide_textarea() {
    $('#status-input').val('');
    $('#status-input').toggle();
    $('#status-confirm').toggle();
    $('#status-edit').toggle();
    $('#status-text').toggle();
    status_status = 0;
}


$(document).ready(function() {
    status_text = "Default status. Hello world!"
    $('#status-text').text(status_text);
    // Spoiler scripts
    $('.spoiler').click(function() {
        $(this).toggleClass("folded").toggleClass("unfolded").next().slideToggle();
    });

    // Sidebar-slider
    $('.settings').click(function() {
        $('.sidebar-nav').toggle("slide");
    });

    // Status: click edit button
    $('#status-edit').click(function() {
        $(this).toggle();
        $('#status-text').toggle();
        $('#status-confirm').toggle();
        $('#status-input').toggle();        
        $('#status-input').val(status_text);
        status_status = 1;
    });

    // Status: click confirm buttom
    $('#status-confirm').click(function() {
        status_text = $('#status-input').val();
        $('#status-text').text(status_text);
        $(this).toggle();
        $('#status-text').toggle();
        $('#status-edit').toggle();
        $('#status-input').toggle();
        status_status = 0;
    });

    // Status: click delete button. Smart - when no text will work fine
    $('#status-delete').click(function() {         
        if (status_status == 1) { 
            hide_textarea();         
        } else {
            if (status_text) {$('#modal-1').modal('show');}
        }         
    });

    // Modal: delete confirmation button
    $('#btn-delete-btn').click(function() {
        status_text = null;
        $('#modal-1').modal('hide');
        $('#status-text').text('');
        $('#status-input').val('');        
    });
});