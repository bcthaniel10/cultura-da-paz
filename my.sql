-- ============================================================
-- BANCO DE DADOS: web_pela_convivencia
-- TEMA: Cultura da Paz
-- ============================================================

CREATE DATABASE IF NOT EXISTS web_pela_convivencia
DEFAULT CHARACTER SET utf8mb4
DEFAULT COLLATE utf8mb4_unicode_ci;

USE web_pela_convivencia;

-- ------------------------------------------------------------
-- Tabela 1: avaliacoes
-- Armazena os dados vindos do formulário de avaliação da página.
-- ------------------------------------------------------------
CREATE TABLE avaliacoes (
    id_avaliacao INT AUTO_INCREMENT PRIMARY KEY,
    clareza ENUM('sim', 'parcialmente', 'nao') NOT NULL,
    nota TINYINT NOT NULL CHECK (nota BETWEEN 1 AND 5),
    sugestao VARCHAR(500) NULL,
    data_envio DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------
-- Tabela 2: relatos
-- Armazena os relatos anônimos de testes/situações de convivência.
-- ------------------------------------------------------------
CREATE TABLE relatos (
    id_relato INT AUTO_INCREMENT PRIMARY KEY,
    categoria ENUM('convivencia', 'ambiente-digital') NOT NULL,
    descricao TEXT NOT NULL,
    sugestao VARCHAR(500) NULL,
    status_moderacao ENUM('pendente', 'aprovado', 'rejeitado') DEFAULT 'pendente',
    data_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------
-- Tabela 3: dados_estatisticos
-- Armazena os dados quantitativos com fontes reais (item 7 do guia).
-- ------------------------------------------------------------
CREATE TABLE dados_estatisticos (
    id_dado INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descricao_dado TEXT NOT NULL,
    instituicao VARCHAR(100) NOT NULL,
    ano_fonte YEAR NOT NULL,
    url_fonte VARCHAR(255) NULL
);

-- ============================================================
-- INSERÇÃO DE DADOS INICIAIS (MOCK / TESTES)
-- ============================================================

-- Inserindo um dado quantitativo de teste (exemplo)
INSERT INTO dados_estatisticos (titulo, descricao_dado, instituicao, ano_fonte) 
VALUES (
    'Violência nas Escolas e Ambiente Digital',
    '8 a cada 10 estudantes já presenciaram episódios de cyberbullying ou conflitos online.',
    'Pesquisa Fictícia / Fonte Oficial',
    2024

    CREATE TABLE mensagens_inspiracao (
    id_mensagem INT AUTO_INCREMENT PRIMARY KEY,
    texto TEXT NOT NULL,
    autor VARCHAR(100) NOT NULL,
    curtidas INT DEFAULT 0
);

INSERT INTO mensagens_inspiracao (texto, autor, curtidas) VALUES
('A paz começa com um sorriso.', 'Santa Teresa de Calcutá', 200),
('A paz é a única batalha que vale a pena ser travada.', 'Albert Camus', 150),
('Se queremos ensinar a verdadeira paz neste mundo, devemos começar pelas crianças.', 'Mahatma Gandhi', 320);
);