import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import imagem from './imagem/imagem.jpeg';

// Componentes de página
const PaginaInicial = () => {
  return (
    <View style={styles.pagina}>
      <Image source={imagem} style={{ width: 620, height: 465 }}/>
      <Text style={styles.textoPagina}>Diego Queiroz</Text>
    </View>
  );
};

const Pagina1 = () => {
  return (
    <View style={styles.pagina}>
      <Text><h1>SOBRE</h1></Text>
      <Text style={styles.textoPagina}>NASCIMENTO: 16/06/1984</Text>
      <Text style={styles.textoPagina}>CIDADE: Recife, PE - BRASIL</Text>
      <Text style={styles.textoPagina}>IDADE: 39</Text>
      <Text style={styles.textoPagina}>EMAIL: diegoqn@gmail.com</Text>
    </View>
  );
};

const Pagina2 = () => {
  return (
    <View style={styles.pagina}>
      <Text><h1>EXPERIÊNCIA</h1></Text>
      <Text><h2>Programador com foco em Análise e Gestão de Banco de Dados.</h2></Text>
      <Text style={styles.textoPagina}>Desenvolvimento em HTML, CSS, JavaScript, Python, análise e gestão de dados utilizando SQL Server, MySQL e MariaDB. Tenho facilidade em aprender novos conteúdos, compartilhar conhecimento, trabalhar em equipe, liderar equipes e projetos, e outras softskills.</Text>
    </View>
  );
};

const Pagina3 = () => {
  return (
    <View style={styles.pagina}>
      <Text><h1>FORMAÇÃO</h1></Text>
      <Text><h2>Bacharel em Ciências Contábeis</h2></Text>
      <Text style={styles.textoPagina}>2002 - 2007 - Faculdade Boa Viagem - Recife, PE, Brasil</Text>
      <Text><h2>Pós-Graduado em Contabilidade e Controladoria Governamental</h2></Text>
      <Text style={styles.textoPagina}>2010 - 2011 - FADE-UFPE - Recife, PE, Brasil</Text>
      <Text><h2>Tecnólogo em Análise e Desenvolvimento de Sistemas - EM CURSO</h2></Text>
      <Text style={styles.textoPagina}>2023 - 2025 - Faculdade SENAC - Recife, PE, Brasil</Text>
    </View>
  );
};

const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  // Renderização condicional da página atual
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Página 1':
        return <Pagina1 />;
      case 'Página 2':
        return <Pagina2 />;
      case 'Página 3':
        return <Pagina3 />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Meu App</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
            <Text style={styles.menuItemText}>Página Inicial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 1')}>
            <Text style={styles.menuItemText}>Página 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 2')}>
            <Text style={styles.menuItemText}>Página 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 3')}>
            <Text style={styles.menuItemText}>Página 3</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo */}
      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuIcon: {
    padding: 10,
  },
  menu: {
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoPagina: {
    fontSize: 18,
  },
});

export default App;
