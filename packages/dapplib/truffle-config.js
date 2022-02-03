require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth meadow comic hunt nation bottom tray'; 
let testAccounts = [
"0xe08523a31eac602c9dfdca67694d6aa7e0ba26eb7d3b5ec7c1523ff87d1504ad",
"0xf59572608f49dd366f00e4eb9d9216e8327a5b76bfb28677de3e2958107fe296",
"0xb1b46e8a4286c75d6d3cb64be589b28dfe96e7291dc19ad6329837bfee6a7057",
"0x0d2b48daa57acd8d79a7436aa82e17d897964820068594f175e279bdd92e4896",
"0x80811c971df2c37a60ea777ce8cb8df71af252949f1f000dab70b513f42106d2",
"0x1e0398765c86ce8c3b0dc2a94779727f9b4ddb7712ffe5a63f0335cc00485d71",
"0xa49423df4b4448ae99875dbf6e81d9cb4219e82087f73c00b2a040ad12c767d4",
"0x961e94659ae42a4caa8cde98cf269d25ec2b4c8eb4b64164d3b7ce121d0b1ff3",
"0x022dbbeec262a275b07e97c1f748b1d1051b5face4a395ee6e012197106d8079",
"0xddf37ffc6aa88853b0e4c9c1192143099ef5fa1e524189be1a69b3a920e7bcce"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

