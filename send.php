<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Проверка на пустые поля
    if (!$name || !$email || !$message) {
        echo "Пожалуйста, заполните все поля.";
        exit;
    }

    // Настройки письма
    $to = "programmisthoma@gmail.com"; // ← сюда придут письма
    $subject = "Новая заявка с сайта";
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $body = "
        <h2>Новая заявка с сайта</h2>
        <p><b>Имя:</b> {$name}</p>
        <p><b>Email:</b> {$email}</p>
        <p><b>Сообщение:</b><br>{$message}</p>
    ";

    // Отправка письма
    if (mail($to, $subject, $body, $headers)) {
        echo "Спасибо! Ваша заявка отправлена.";
    } else {
        echo "❌ Ошибка при отправке. Попробуйте ещё раз.";
    }
} else {
    echo "Неправильный метод запроса.";
}
?>
