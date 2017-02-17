var pg = require ('pg');

var pgConString = "postgres://postgres:root@localhost/node_hero"

pg.connect(pgConString, function(err, client) {
  if(err) {
    console.log(err);
  }
  client.on('notification', function(msg) {
   console.log(msg);
   //console.log(msg.payload);
	//console.log('Shyam');
  });
  var query = client.query("LISTEN watchers");
}); 


