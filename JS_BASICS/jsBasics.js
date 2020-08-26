console.log(this, "global");

var c = {
    name: "vakadu",
    log: function() {
        var self = this;
        self.name = "vinod";        
        console.log(self.name, self, "this");
        var changeName = function() {
            self.name = "vakadu vinod";   
            console.log(self.name, self, "this");
        }
        changeName();
    }
}

console.log(c.log());
