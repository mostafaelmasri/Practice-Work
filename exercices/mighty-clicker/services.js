app.service('RedService', function() {
 var self = this;
 this.score = 100;
 this.increment= function(){
   self.score++;  
 }
 
this.decrement = function(){
    self.score--;
}
this.reset = function(){
    self.score = 0;
}    
    
});
            
            
app.service('BlueService', function() {
 var self = this;
 this.score = 100;
 this.increment= function(){
   self.score++;  
 }
 
this.decrement = function(){
    self.score--;
}
this.reset = function(){
    self.score = 0;
}    
 
    
});            
            
            
            