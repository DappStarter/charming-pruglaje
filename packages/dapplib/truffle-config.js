require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remind atom install derive blue stamp'; 
let testAccounts = [
"0xf1d43bc60f3241888f3dce88f9f98db0460e0a96952769a43550caa2fa8c177c",
"0xeb7225615eeb2520fb8e27b1d72e6defff03514c9f019897ea1823f9dd3ce474",
"0xe60cb6d24c0de36074a88f257c363ec6b6bfea2cd445fefd3420b938a7325d7b",
"0x622feb865650d51b2e814a5b6a5212f4f08b3947a4429164d41e1c656348d033",
"0xbbb0f3edbcc98d770c3faf94a15555328b369a89247792e3de6ce5ada47f9df2",
"0x047b976af5fd26dc29c3c9655a8665547f0aa7f16c31dfd0a6d010ced86a1ff4",
"0x9cad38527d02d412c49318d6dcce307dbfa6bd90fc60a16f149e05b6635c247d",
"0x824a28852255492752a667f25d08dab709235406981d75b8cb5c835979ac0236",
"0xdce30ce82167bbe6b2af32bab29cc1742fd5803f6a684b6e21925ca8962e9212",
"0x23554c173ecec0a42bc529be0d78337248abee947cee22630e0cf4d4221fe717"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
