$(document).ready(function() {

    //Show Banner
    $(".tu .desc").show(); //Show Banner
    $(".tu").animate({ opacity: 0.85 }, 1 ); //Set Opacity

    //Click and Hover events for thumbnail list
    $(".small ul li:first").addClass('active');
    $(".small ul li").click(function(){
        //Set Variables
        var imgAlt = $(this).find('img').attr("alt"); //Get Alt Tag of Image
        var imgTitle = $(this).find('a').attr("href"); //Get Main Image URL
        var imgDesc = $(this).find('.tu').html(); 	//Get HTML of block
        var imgDescHeight = $(".tu").find('.tu').height();	//Calculate height of block

        if ($(this).is(".active")) {  //If it's already active, then...
            return false; // Don't click through
        } else {
            //Animate			
            $(".tu ").animate({ opacity: 0, marginBottom: -imgDescHeight }, 250 , function() {
                $(".tu ").html(imgDesc).animate({ opacity: 0.85,	marginBottom: "0" }, 250 );
                $(".tu img").attr({ src: imgTitle , alt: imgAlt});
            });
        }

        $(".small ul li").removeClass('active'); //Remove class of 'active' on all lists
        $(this).addClass('active');  //add class of 'active' on this list only
        return false;

    }) .hover(function(){
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });

    //Toggle

});//Close Function





