// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {zkamStorage} from "../zkamStorage.sol";

contract CounterScript is zkamStorage, Script {
    function setUp() public {}

    function run() public {
        vm.broadcast();
    }
}
