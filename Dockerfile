# Użyj oficjalnego obrazu Node jako bazy
FROM node:18

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Skopiuj package.json i package-lock.json
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj cały projekt do kontenera
COPY . .

# Domyślny port aplikacji (jeśli masz serwer)
EXPOSE 3000

# Domyślna komenda startowa (jeśli masz serwer) — można zmienić na 'npm start' jeśli dodasz w package.json
CMD [ "node", "index.js" ]