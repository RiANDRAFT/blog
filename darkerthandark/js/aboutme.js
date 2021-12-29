msg = new Array(); //strings written in screen

msg[0] = "<font face='Courier' color='#00FFFF'> <p> <span style='color: #00ff08;'>charoot@rian</span>&nbsp; <span style='color: #c020d4;'>MINGW64 </span> <span style='color: #ffeb00cf;'> ~/Desktop/MyChan</span>&nbsp; <span style='color: #20d8d8;'>(master)</span> </p><p><span style='color: #9e9e9e;'>ssh rian@127.0.0.1 -p 5201314</span></p><p><span style='color: #9e9e9e;'>rian@127.0.0.1's password:</span></p></font><br>";

msg[1] = "<font face='Courier' color='#00FFFF'> <p><span style='color: #00ff08; font-size: 20px;'>Access Granted!</span>&nbsp;<span style='color: #9e9e9e;'>Welcome Boss!</span></p><p><span style='color: #9e9e9e;'>{{Prevail, Precisely Patience}}</span></p></font><br>";

msg[2] = "<font face='Courier' color='#9e9e9e'> <p><span style='color: #00ff08;'>rian@rian</span>:<span style='color: #20d8d8;'>~</span>$ sudo su&nbsp;</p><p><span style='color: #9e9e9e;'>rian@rian's password:</span></p><p><span style='color: #9e9e9e;'>root@rian:/home/rian# cd /var/www/alhanan</span></p></font>";  

msg[3] = "<font face='Courier' color='#00FFFF'> <p><span style='color: #9e9e9e;'>root@rian:/var/www/alhanan# php artisan al</span></p></font>";   

text1 = ""; //the same as text2, only the last character is highlighted

text2 = ""; //current string, which will be written

count = 0; //char index in string text

count2 = 0; //number of strings

text = msg[0].split(""); //text - string written

function writetext() { //show strings above on screen

text1 = text2 + "<font color='#00FFFF'>" + text[count] + "</font>";

text2 += text[count];

document.getElementById('about-rian').innerHTML = text1;

if (count < text.length-1){
    count++;
    setTimeout('writetext()', 20);
}

else { //if this string is written, get the new string
    count = 0;

    if (count2 != 15) { //write 15 strings
    
        count2++;
        
        text2 += ""; //a new line
        
        text = eval('msg['+count2+'].split("")'); //get the new string to text
        
        setTimeout('writetext()', 1);
    
    }
}

}
