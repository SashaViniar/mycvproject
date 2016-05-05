$(document).ready(function($) {
    $('#net').fadeOut("fast");
    $('#plus').fadeOut("fast");
    $('#sql').fadeOut("fast");
    $('#ht').fadeOut("fast");
})



var a = true;
var b = true;
var c = true;
var d = true;


$('#btn-net').click(function() {
    if (a) {
        $('#net').fadeIn("slow");
        $('#plus').fadeOut("slow");
        $('#sql').fadeOut("slow");
        $('#ht').fadeOut("slow");
        a = false;
        b = true;
        c = true;
        d = true;
    }
    else {
        $('#net').fadeOut("slow");
        a = true;
    }

});
$('#btn-plus').click(function() {
    if (b) {
        $('#net').fadeOut("slow");
        $('#plus').fadeIn("slow");
        $('#sql').fadeOut("slow");
        $('#ht').fadeOut("slow");
        b = false;
        a = true;
        c = true;
        d = true;
    }
    else {
        $('#plus').fadeOut("slow");
        b = true;
    }

});


$('#btn-sql').click(function() {
    if (c) {
        $('#net').fadeOut("slow");
        $('#plus').fadeOut("slow");
        $('#sql').fadeIn("slow");
        $('#ht').fadeOut("slow");
        c = false;
        a = true;
        b = true;
        d = true;
    }
    else {
        $('#idsql').fadeOut("slow");
        c = true;
    }

});


$('#btn-html').click(function() {
    if (d) {
        $('#net').fadeOut("slow");
        $('#plus').fadeOut("slow");
        $('#sql').fadeOut("slow");
        $('#ht').fadeIn("slow");
        d = false;
        a = true;
        b = true;
        c = true;
    }
    else {
        $('#idhtmlcssjs').fadeOut("slow");
        d = true;
    }

});


$('#btn-send').click(function() {
    // Please set your email in url field
    $.ajax({
            url: "https://formspree.io/vinar262@gmail.com",
            method: "POST",
            data: {
                email: email.value,
                message: msg.value,
                textarea: textaream.value
            },
            dataType: "json"
        })
        .done(function() {
            $('#container').html('<h1 color = "white">Thank you!</h1>');
        })
});
//regex101




/*
var emailConmp = ['exa','mail','@gmail.com'];
idemail.InnerHtml= emailConmp.join('');
*/