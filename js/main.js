function displayImagePreviewBlock(image){
    $("#pageBlock").fadeOut(200);
    $("#imagePreviewBlock").fadeIn(200);

    switch(image){
        case "Galeria1":
            $("#imagePreview").attr('src', 'img/' + image + '.png');
        break;
        case "Galeria2":
            $("#imagePreview").attr('src', 'img/' + image + '.png');
        break;
        case "Galeria3":
            $("#imagePreview").attr('src', 'img/' + image + '.png');
        break;
        case "Galeria4":
            $("#imagePreview").attr('src', 'img/' + image + '.png');
        break;
        case "Galeria5":
            $("#imagePreview").attr('src', 'img/' + image + '.png');
        break;
        case "Galeria6":
            $("#imagePreview").attr('src', 'img/' + image + '.png');
        break;
        case "Galeria7":
            $("#imagePreview").attr('src', 'img/' + image + '.png');
        break;
        case "Galeria8":
            $("#imagePreview").attr('src', 'img/' + image + '.png');
        break;
        case "Galeria9":
            $("#imagePreview").attr('src', 'img/' + image + '.png');
        break;
        case "Galeria10":
            $("#imagePreview").attr('src', 'img/' + image + '.png');
        break;
        case "Galeria11":
            $("#imagePreview").attr('src', 'img/' + image + '.png');
        break;
        case "Galeria12":
            $("#imagePreview").attr('src', 'img/' + image + '.png');
        break;
        case "Galeria13":
            $("#imagePreview").attr('src', 'img/' + image + '.png');
        break;
        case "Galeria14":
            $("#imagePreview").attr('src', 'img/' + image + '.png');
        break;
        case "Galeria15":
            $("#imagePreview").attr('src', 'img/' + image + '.png');
        break;
        case "Galeria16":
            $("#imagePreview").attr('src', 'img/' + image + '.png');
        break;
        case "Galeria17":
            $("#imagePreview").attr('src', 'img/' + image + '.png');
        break;
    }
}

function backToPage(){
    $("#pageBlock").fadeIn(200);
    $("#imagePreviewBlock").fadeOut(200);
}