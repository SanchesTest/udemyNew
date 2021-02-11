<?php
// получаем JSON анные средствами php
$_POST = json_decode(file_get_contents("php://input"), true);

// берет данные которые пришли с клиена и превращает в строку и показывает обратно на клиенте
echo var_dump($_POST);
