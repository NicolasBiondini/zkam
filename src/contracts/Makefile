
include .env

build:
	forge build

deploy:
	forge script --chain sepolia script/zkamStorage.s.sol:zkamStorageScript --rpc-url $SEPOLIA_RPC_URL --broadcast --verify -vvvv
