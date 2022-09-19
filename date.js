module.exports.getDate=function(){
    const today = new Date();
    // week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    // const day=today.toLocaleDateString("en-US",options); //this is modern date string function which i just customized using options parameter.
    return today.toLocaleDateString("en-US",options);
};


module.exports.getDay=function(){
    const today = new Date();
    // week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
    let options={
        weekday:"long"
    };

    // const day=today.toLocaleDateString("en-US",options); //this is modern date string function which i just customized using options parameter.
    return today.toLocaleDateString("en-US",options);
};
