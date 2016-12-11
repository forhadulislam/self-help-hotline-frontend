$(document).ready(function(){
    
    $(".search-form").submit(function(e){
        e.preventDefault();
        var keyword = $("#keyword").val();
        var category = $("#category").val();
        location.href = "#/search?keyword=" + keyword + "&category=" + category;
        return false;
        
    })
    
})

