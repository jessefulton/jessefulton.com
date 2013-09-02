in=./
out=build
bin=node_modules/wintersmith/bin

all: build

build: clean
	$(bin)/wintersmith build --output ../$(out)

preview:
	$(bin)/wintersmith preview