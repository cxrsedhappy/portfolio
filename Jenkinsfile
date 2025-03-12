pipeline {
    agent any

    stages {
        stage('Build & Deploy') {
            steps {
                dir('app') {
                    sh 'docker-compose down'
                    sh 'docker-compose up -d --build'
                }
            }
        }
    }
}