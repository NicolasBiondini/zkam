
include .env

build:
	forge build

deploy:
	forge script --chain sepolia script/zkamStorage.s.sol:zkamStorageScript --rpc-url "https://scroll-public.scroll-testnet.quiknode.pro" --broadcast -vvvv
