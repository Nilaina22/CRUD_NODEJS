pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Checkout the code from your version control system (e.g., Git)
                // Adjust the repository URL accordingly
                git branch: 'master', url: 'https://github.com/Nilaina22/CRUD_NODEJS.git'

                // Build the Docker image
                sh 'docker build -t crud_api_expressjs .'
            }
        }

        stage('Test') {
            steps {
                // Run tests inside the Docker container
                sh 'docker run crud_api_expressjs npm test'
            }
        }

        stage('Push Image to Registry') {
            steps {
                // Push the Docker image to a container registry (e.g., Docker Hub)
                // You need to login to the registry first
                sh 'docker login -u nilaina -p Nilaina@23'
                //sh 'docker tag your-image-name your-docker-hub-username/your-image-name:latest'
                sh 'docker tag crud_api_expressjs nilaina/crud_api_expressjs:latest'
                //sh 'docker push your-docker-hub-username/your-image-name:latest'
                sh 'docker push nilaina/crud_api_expressjs:latest'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the Docker image using Docker Compose
                // Ensure you have Docker Compose installed on the deployment machine
                sh 'docker compose down'
                sh 'docker compose pull'
                sh 'docker compose up -d'
            }
        }
    }

    post {
        always {
            // Clean up by removing Docker images and containers
            sh 'docker compose down'
            sh 'docker rmi crud_api_expressjs'
        }
    }
}
