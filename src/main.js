$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const urlImg = $('#imgUrl').val();
        const novoItem = $('<li style = "display: none"></li>');

        $(`<img src="${urlImg}" />`).appendTo(novoItem);

        $(`
        <div class="overlay-img-link">
            <a href="${urlImg}" target="_blank"> 
                Ver imagem em tamanho real 
            </a> 
        </div>
        `).appendTo(novoItem);
        
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(2000);
        $('#imgUrl').val('');
    
    });
});