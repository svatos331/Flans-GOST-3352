<?php
    // Подключаем библиотеку PHPMailer
    use PHPMailer\PHPMailer\PHPMailer;
    require_once "PHPMailer/PHPMailer.php";
    require_once "PHPMailer/SMTP.php";
    require_once "PHPMailer/Exception.php";

    // Создаем письмо


        $contennForm = $_POST;


        $newItemMY1 = serialize($contennForm);
        $newTitle = substr($newItemMY1, strpos($newItemMY1, 'З'));

        $newTitleformat1 = str_replace('\\','',$newTitle);
        $newTitleformat2 = str_replace('"','',$newTitleformat1);
        $newTitleformat3 = str_replace('_',' ',$newTitleformat2);
        $newTitleformat4 = preg_replace('/{/', ' ', $newTitleformat3);
        $newTitleformat5 = preg_replace('/}/', ' ', $newTitleformat4);

        

        $mail = new PHPMailer();
        $mail->CharSet = 'UTF-8';
        $mail->isSMTP();                   // Отправка через SMTP
        $mail->Host   = 'ssl://smtp.mail.ru';  // Адрес SMTP сервера
        $mail->SMTPAuth   = true;          // Enable SMTP authentication
        $mail->Username   = 'zakazngo@mail.ru';       // пиши тут маил от коготорого будешь отправлять
        $mail->Password   = 'Jra4RbVoUg8FBxsa';    // ваш пароль
        $mail->Port   = 465;               // порт подключения
    
        // $mail->SMTPSecure = 'ssl';         // шифрование ssl
        $mail->isHTML(true);   
        $mail->setFrom('zakazngo@mail.ru', 'Отдел Рекламы');    // от кого
        $mail->addAddress('zakazngo@mail.ru', 'Жилин Святослав'); // кому
        $mail->Subject = 'От рекламы';
        $mail->Body   .=  serialize(substr($newTitleformat4, 0, -8));
    
        $text = $contennForm;
     
        // открываем файл, если файл не существует,
        //делается попытка создать его
        $fp = fopen("file.txt", "w");
        
        // записываем в файл текст
        fwrite($fp, serialize(substr($newTitleformat4, 0, -8)));
        
        // закрываем
        fclose($fp);
    
    
        if($mail->send()){
            echo 'Норм';
        }else{
            echo 'Не Норм';
        }

    ?>
