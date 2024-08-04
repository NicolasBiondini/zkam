
include .env

build:
	forge build

deploy:
	forge script --chain sepolia script/zkamStorage.s.sol:zkamStorageScript --rpc-url "https://scroll-public.scroll-testnet.quiknode.pro" --broadcast -vvvv 
# --verify
# 	--verifier-url https://api-sepolia.scrollscan.com/api \
#   --etherscan-api-key <your Scrollscan API key>