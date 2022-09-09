# Comandos base para apagar o container após ester ser utilizado pois é necessário a 
# criação de um novo a partir do 0 para subir as atualizações recém feitas 

# Comando que para o container
sudo docker stop container-unibook-app

# Comando que apaga o container após ele parar
sudo docker rm container-unibook-app

# Comando que apaga a imagem
sudo docker rmi unibook/app 

sudo docker build -t unibook/app .

sudo docker run -it --name container-unibook-app -d -p 3000:3000 unibook/app 