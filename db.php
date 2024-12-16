<?php
$host = 'fdb1027.biz.nf'; // Сервер бази даних
$dbname = '4555136_chatdb'; // Назва вашої бази даних
$username = '4555136_chatdb'; // Ім'я користувача MySQL
$password = 'Vova_123321'; // Пароль 

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Помилка підключення до бази даних: " . $e->getMessage());
}
?>
