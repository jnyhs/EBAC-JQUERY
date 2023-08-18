$(document).ready(function() {
    $('#task-form').submit(function(e) {
        e.preventDefault();

        const taskText = $('#task-input').val();
        const listItem = $('<li></li>').text(taskText);
        listItem.appendTo('#tasks');
        $('#task-input').val('');

    });

    $('#tasks').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});