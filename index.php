<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "web_pela_convivencia";

$conn = new mysqli($servidor, $usuario, $senha, $banco);
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>

<?php
include 'conexao.php';

$clareza = $_POST['clareza'];
$nota = $_POST['nota'];
$sugestao = $_POST['sugestao'];

$stmt = $conn->prepare("INSERT INTO avaliacoes (clareza, nota, sugestao) VALUES (?, ?, ?)");
$stmt->bind_param("sis", $clareza, $nota, $sugestao);
$stmt->execute();

header("Location: index.php#avaliacao");
?>