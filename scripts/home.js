function HomeIndex(){
    //properties
    const heightFromTop=300;
    //methods
    this.intialiseScrollToTopButton=function(){
        //window scroll event handler
        $(window).scroll(function(){
            //show or hide scroll button based on scoll distance
            var verticalHeight=$(this).scrollTop();
            if (verticalHeight > heightFromTop){
                $("#scrolltoTop").fadeIn();
            }
            else{
                $("#scrolltoTop").fadeOut();
            }
        });
        //scroll to top click event handler
        $("#scrolltoTop").click(function(){
            $("html,body").animate({scrollTop:0},"slow");
        });
    }   
}
$(document).ready(function(){
    //Instantiate new home class
    app.HomeIndex=new HomeIndex();
    //Intialize the Scoll to the Top Button
    app.HomeIndex.intialiseScrollToTopButton();
})();