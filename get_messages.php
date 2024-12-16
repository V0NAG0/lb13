<?php
require 'db.php';

$stmt = $pdo->query("SELECT * FROM messages ORDER BY timestamp DESC LIMIT 50");
$messages = $stmt->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');
echo json_encode(array_reverse($messages));
?>
