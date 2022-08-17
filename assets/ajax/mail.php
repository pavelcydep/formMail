<?php
$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$message="Имя:$name 
Номер телефона:$phone
Email:$email
Ссылка на резюме:https://kazan.hh.ru/resume/e382d950ff092c76730039ed1f74494f4c5232
Затраченное время на тест:2часа";

$subject="=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";
$headers="From: $email\r\nReply-to: $email\r\nContent-type:text/html; charset=utf-8\r\n";
$succes=mail("info@qupe.ru",$subject,$message,$headers);
echo $succes;

?>