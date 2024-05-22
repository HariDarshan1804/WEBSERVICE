<?php
$weather=42;
$json_response = json_encode(['weather' => $weather]);
header('Content Type: appication/json');
echo $json_response;


?>