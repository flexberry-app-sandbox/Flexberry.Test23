docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t test2/app ../..
