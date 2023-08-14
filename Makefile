clean:
	rm -rf node_modules
	rm -rf build

build:
	yarn install
	yarn build

refresh:
	make clean
	make build