
//Method to track nav button clicks
//input: string (btn) - github or linkedIn clicked
const nav = function(btn){
    mixpanel.track("nav", { 
        "button": btn, 
    });
}

// track nav button click
const contactAction = function(btn){
      mixpanel.track("contact-click", { 
        "button": btn, 
      });
}


// track contact btn
const contact = function() { 
    mixpanel.track("contact", { 
      "button": "Main", 
    });
}


//Method to track project button clicks
//input: string (app) - name of app clicked
const project = function(app) { 
    mixpanel.track("project", { 
      "button": app, 
    });
}
