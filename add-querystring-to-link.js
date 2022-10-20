var Webflow = Webflow || [];
Webflow.push(function () {

// add custom query strings to the plan buttons
plans = $("*[data-qs-plan]");
plans.each(function () {    
 var href = $(this).attr('href');
 var plan = $(this).attr('data-qs-plan'); 
 var plan_description = $(this).attr('data-qs-service-description');
 var plan_service_type = $(this).attr('data-qs-service-type');
 var query = "";
 if (!href.includes('?plan=')) { 
      query += `?plan=${plan}`;
 }
 if (!href.includes('service-description=')) { 
      query += `&service-description=${plan_description}`;
 }
 if (!href.includes('service-type=')) { 
      query += `&service-type=${plan_service_type}`;
 }

 $(this).attr('href',`${href}${query}`);
 
});


});
