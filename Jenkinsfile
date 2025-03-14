pipeline {
    agent any

    stages {
        stage('Build & Deploy') {
            steps {
                dir('app') {
                    sh 'docker-compose --version'
                    sh 'docker-compose down'
                    sh 'docker-compose up -d --build'
                }
            }
        }
    }
}