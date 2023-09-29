Desktop application will be built in Rust Tauri

Docker Setup for postgres:
 docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres

Then go open the postgres container using:
docker exec -it some-postgres psql -U postgres

env file DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/weaverdb"