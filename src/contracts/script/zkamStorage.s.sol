// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {zkamStorage} from "../zkamStorage.sol";

contract zkamStorageScript is zkamStorage, Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        zkamStorage kam = new zkamStorage();

        vm.stopBroadcast();
    }
}
