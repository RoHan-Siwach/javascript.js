// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NFTContract {
    // Create a variable to hold NFT's
    struct NFT {
        string name;
        string eyeColor;
        string shirtType;
        string bling;
    }

    // Array to store NFTs
    NFT[] public nfts;

    // Function to mint an NFT
    function mintNFT(string memory _name, string memory _eyeColor, string memory _shirtType, string memory _bling) public {
        NFT memory newNFT = NFT({
            name: _name,
            eyeColor: _eyeColor,
            shirtType: _shirtType,
            bling: _bling
        });

        nfts.push(newNFT);
        // Optionally emit an event here if you want to track minting events.
    }

    // Function to list all NFTs
    function listNFTs() public view returns (NFT[] memory) {
        return nfts;
    }

    // Function to get the total supply of NFTs
    function getTotalSupply() public view returns (uint256) {
        return nfts.length;
    }
}
