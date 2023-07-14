pipeline {
    agent any

    stages {
    stage('Clonar o repositório') {
        steps {
            git branch: 'main', url: 'https://github.com/halttere/Teste_Web_e2e.git'
        }
    }
    stage('Limpar cache npm') {
        steps {
            bat 'npm cache clean --force'
        }
    }
    stage('Instalar dependências') {
        steps {
            bat 'npm ci'
        }
    }
   
    stage('Executar testes') {
        steps {
            bat 'npm run cy:run'
        }
    }
}

}
