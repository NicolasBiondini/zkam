// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.24;

import "../Ownable.sol";

contract zkamStorage is Ownable {

    mapping(address => mapping(bytes32 => bool)) public userSignature;
    mapping(bytes32 => address) public signatureUser;

    constructor() Ownable(msg.sender) {}

    function signHash(bytes32 _signature, address _user) public onlyOwner {
        userSignature[_user][_signature] = true;
        signatureUser[_signature] = _user;
    }

    function didUserSign(bytes32 _signature, address _user) public view returns (bool) {
        return userSignature[_user][_signature];
    }

    function getUserFromHash(bytes32 _signature) public view returns (address) {
        return signatureUser[_signature];
    }

    function removeSignature(bytes32 _signature, address _user) public onlyOwner {
        userSignature[_user][_signature] = false;
        signatureUser[_signature] = address(0);
    }
}