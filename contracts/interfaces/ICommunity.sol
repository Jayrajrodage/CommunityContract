// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

interface ICommunity {
    
    function initialize(
        address implState,
        address implView,
        address hook, 
        address costManager, 
        string memory name, 
        string memory symbol,
        string memory contractUri
    ) external;
    
    function addressesCount(uint8 roleIndex) external view returns(uint256);
    function getRoles(address[] calldata accounts)external view returns(uint8[][] memory);
    function getAddresses(uint8[] calldata rolesIndexes) external view returns(address[][] memory);
    function hasRole(address account, uint8 roleIndex) external view returns(bool);
    function grantRoles(address[] memory accounts, uint8[] memory roleIndexes) external;
    function revokeRoles(address[] memory accounts, uint8[] memory roleIndexes) external;
}