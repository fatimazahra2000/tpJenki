pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/fatimazahra2000/tpJenki.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm start'
            }
        }

    }
}