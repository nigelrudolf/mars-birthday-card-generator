console.log("CONNECTION ESTABLISHED");


const app = {

    init : function(){
        console.log(`initiate then call collectInfo function`);
        this.collectInfo();
    },

    collectInfo : function(){
        console.log(`collect info from user, then call getInfo function`);
        this.getInfo();
    },

    getInfo : function(){
        console.log(`get info from api, then call displayInfo function`);
        this.displayInfo();
    },

    displayInfo : function(){
        console.log(`display info from api, then call share to social media function`);
        this.socialMedia();
    },

    socialMedia : function(){
        console.log(`share to social media.`);
    
    },

}

app.init();
