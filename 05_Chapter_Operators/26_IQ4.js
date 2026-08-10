//Interview questions

let responseTime = 850; // ms
let sla = 1000; //ms
let slaStatus = responseTime <= sla ? "Within SLA " : "SLA Breached" ;
console.log(slaStatus);
console.log(`Response: ${responseTime}ms - ${slaStatus}`);

//Template literal ->  `${}`
//Output : Withing SLA 

