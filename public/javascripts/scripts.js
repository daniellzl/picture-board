$(document).ready(function() {

    // add picture button pressed
    $("#addPicture").click(function(){

        // save picture title and URL
        var title = $("#pictureTitle").val();
        var URL = $("#pictureURL").val();

        // if empty notify user
        if (title === "" || URL === "") {
            $('.modal-body').html("<h3>All fields are required.</h3>");
            return $('.modal').modal();

        // else create picture
        } else {
            $("#pictureTitle").val('');
            $("#pictureURL").val('');
            $.post("/user/create",
            {
                title: title,
                URL: URL
            },
            function(data, status){
                // if successful reload page
                return location.reload();
            });
        }
    });
})
