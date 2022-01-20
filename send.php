<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['mail'];
$message = $_POST['message'];

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();   
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;
  // $mail->SMTPDebug = 2;
  // $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

  // Настройки почты
  $mail->Host       = 'mail.hosting.reg.ru'; // SMTP сервера почты
  $mail->Username   = 'info@nikitavakula.com'; // Логин на почте
  $mail->Password   = 'W0p4M2j9'; // Пароль на почте
  $mail->SMTPSecure = 'tls';
  $mail->Port       = 587; // 587 на reg.ru
  $mail->setFrom('info@nikitavakula.com', 'nikita vakula'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('r8w4@mail.ru');  

  // Формирование самого письма
  $title = "Новая заявка";
  $body = "
    <b>Имя:</b> $name<br>
    <b>Почта:</b> $email<br>
    <b>Сообщение:</b> $message<br>
  ";
  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  // Проверяем отравленность сообщения
  if ($mail->send()) {$result = "success";} 
  else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

echo "<script>document.location.href='index.html';</script>";

?>