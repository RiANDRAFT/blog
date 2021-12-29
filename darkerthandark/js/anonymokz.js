// $(document).ready(function(){

      var hashen = '258861b6-f85e-40ec-b62e-c37882fac618';
      var myEmail = 'riandraft@gmail.com';
      var endpoint = 'https://pro.ip-api.com/json/?key=VbMbpYKCsisyTIN';
      var ref = document.referrer;  
      var user_nf = 'https://uploadbeta.com/api/user-agent/';

      // function alunknown(message=false, from=myEmail,type='hananymous'){
      //     Email.send({
      //         SecureToken : hashen,
      //         To : myEmail,
      //         From : from,
      //         Subject : "Notification",
      //         Body : message
      //     }).then(
      //       // message => console.log(message),
      //       notifyMe(type, 200)
      //     );
      // }

      function alunknown(message=false, from=myEmail,type='hananymous'){
          Email.send({
              SecureToken : hashen,
              To : myEmail,
              From : from,
              Subject : "Notification",
              Body : message
          }).then((message) => {
              console.log(message);
              notifyMe(type, message);
         });
      }

      // type != 'hananymous' ? message === 'OK' ? alertify.success('Message Success!') : alertify.error('Message Failed!') : 
      function notifyMe(type, status, message='success'){
        // console.log('triggered');
        // console.log(status);
        if(type == 'contact'){
           if(status == 'OK'){
              alertify.success('Message Success!');
           }else{
             alertify.error('Message Failed!');
           }
        }
        // console.log('triggered till bottom');
      }

      function siteOriginNotify(){
        return window.location.host;
      }
          
      // Get Browser Time and Date
      function visitedOn(){
            var currentdate = new Date(); 
            var datetime = "Now: " + currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
            return datetime;        
      }
      // ANONYMOKZ
      function anonymokz() {
          $.ajax({
              type: "GET",
              url: endpoint,
              dataType: "json",
              success: function (response) {

                var  telecom = response.as;
                var  org_telecom = response.org;
                var  country_code = response.countryCode;
                var  country = response.country;
                var  isp = response.isp;
                var  lat = response.lat;
                var  lon = response.lon;
                var  IP = response.query;
                var  region = response.region;
                var  region_name = response.regionName;
                var  status = response.status;
                var  timezone = response.timezone;
                var  zip = response.zip;
                $.ajax({
                    type: "GET",
                    url: user_nf,
                    dataType: "json",
                    success: function (data) {
                        user_agent = data;
                        alunknown("Region Name: "+region_name+" \n Visited On: "+visitedOn()+" \n Visitor From: "+ref+" \n  Website: "+siteOriginNotify()+" \n TimeZone: "+timezone+"  \n Country: "+country+" \n IP Address: "+IP+" \n Region: "+region+" \n Latitude: "+lat+" \n Longitude: "+lon+" \n User Agent: "+user_agent+"");
                    }
                });
              },
              error: function (response) {
                console.log('Something went wrong XD');
              }
          });

          // return country;
      }

      anonymokz();

      $("#send_contact_form_submit").on('click', function(e){
            e.preventDefault(); // avoid to execute the actual submit of the form.
            var validate_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            var email = $('#contact_email').val();
            var name = $('#contact_name').val();
            var message = $('#contact_message').val();
            var name_message = name+ ' - ' +message;
            if(email == '' || name == '' || message == ''){
               alertify.error('All Fields Are Required!');
            }else{
                if (validate_email.test(email) == false) {
                    alertify.error('Invalid Email!');
                    return (false);
                }
                alertify.notify('Sending...');
                alunknown(name_message, email, 'contact');
            }
      });

      $('.mokzimo').on('click',function(e){
          $('.about-me').show();
          alunknown('oops raindrops!');
          writetext();
      });
      $('.mokzimo2').on('click',function(e){
        $('.about-me').hide();
      });

// }); 