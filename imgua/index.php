<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userId = $_POST['userId']; 
    $targetDir = "uploads/{$userId}/";
    $targetFile = $targetDir . $userId . ".jpg"; 

    if (!file_exists($targetDir) && !is_dir($targetDir)) {
        if (!mkdir($targetDir, 0777, true)) {
            die('Error al crear el directorio para el usuario.');
        }
    }
    $check = getimagesize($_FILES["file"]["tmp_name"]);
    if ($check !== false) {
        echo "El archivo es una imagen - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "El archivo no es una imagen.";
        $uploadOk = 0;
    }
    if ($_FILES["file"]["size"] > 500000) {
        echo "Lo siento, el archivo es demasiado grande.";
        $uploadOk = 0;
    }
    if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif") {
    echo "Lo siento, solo se permiten archivos JPG, JPEG, PNG y GIF.";
    $uploadOk = 0;
}
    if (file_exists($targetFile)) {
        unlink($targetFile);
    }

    if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
        $_SESSION['image_path'] = $targetFile;
        echo "El archivo " . htmlspecialchars(basename($_FILES["file"]["name"])) . " ha sido subido.";
    } else {
        echo "Lo siento, hubo un error al subir tu archivo.";
    }
}
?>