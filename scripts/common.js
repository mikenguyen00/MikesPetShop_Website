function Common(){
    let self = this;
    //properties
    this.promoBar=
        {
        promoItems:null,
        currentItems:0,
        numberOfItems:0,

        };
        //methods
    this.initialisePromo=function(){
        //get all items in promobar
        let promoItems=$("#promo > div");
        //set values
        this.promoBar.promoItems=promoItems
        this.promoBar.numberOfItems=promoItems.length;
        //initiate promo loop
        this.startDelay();
    }
    this.showNextPromoItems=function(){
        //fade out current mess.
        $(self.promoBar.promoItems).fadeOut("slow").promise().done(function(){
            //increment current promo counter
            if(self.promoBar.currentItems>=(self.promoBar.numberOfItems-1)){
                //reset counter to zero
                self.promoBar.currentItems=0;
            }
            else{
                //increment counter by 1
                self.promoBar.currentItems++;
            }
            //fade in next mess.
            $(self.promoBar.promoItems).eq(self.promoBar.currentItems).fadeIn("slow",function(){
                //delay before next message
                self.startDelay();
            });
        });
    }
    this.startDelay=function(){
        //wait 4 sec then show next mess.
        setTimeout(function(){
            self.showNextPromoItems()
        },4000);
    }
}
$(document).ready(function(){
    //instantiate new Common class
    app.Common=new Common();
    //initalize promo bar
    app.Common.initialisePromo();
});