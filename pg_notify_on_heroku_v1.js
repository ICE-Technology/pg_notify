var pg = require ('pg');

const PORT = process.env.PORT || 3000;
var pgConString = "postgres://wnloxtbfrbjnae:c129f387c6659dd0f9033f00c94c24ea77af9735db7fad916dd011a95b567e30@ec2-23-21-184-181.compute-1.amazonaws.com:5432/d63icc9v8kpsii"
//pg.defaults.ssl = true;
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


