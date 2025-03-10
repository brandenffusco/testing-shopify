console.log('asf');

$("[data-variant-img]").click(function(e) {
    // Prevent Click Logic
    e.preventDefault();

    //Active Variant Class Toggle
    $('.active-variant').removeClass('active-variant');
    $(this).addClass('active-variant');

    //Switch out main Image 
    $(this).parents(".card-wrapper").find(".card__media img:first").attr('src', $(this).data("variant-img"));
    $(this).parents(".card-wrapper").find(".card__media img:first").attr('srcset', $(this).data("variant-img"));

    //Switch out Secondary Image
    $(this).parents(".card-wrapper").find(".card__media .alt-image").attr('src', $(this).data("variant-img-two"));
    $(this).parents(".card-wrapper").find(".card__media .alt-image").attr('srcset', $(this).data("variant-img-two"));
});