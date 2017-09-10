function get_pages(current){
    $.ajax({
        url: '/get_pages',
        complete: function(data) {
            var pages = JSON.parse(data.responseText);
            var index = pages.message.indexOf(current);
            pages.message.splice(index, 1);
            for(i=0; i<pages.message.length; i++){
                var direction = document.createElement("a");
                var br = document.createElement("br");
                var links = document.getElementById("links");
                direction.setAttribute("href", "/html/" + pages.message[i]);
                direction.innerHTML = pages.message[i];
                links.appendChild(direction);
                links.appendChild(br);
            }
        }
    });
}
