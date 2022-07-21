<?php

return [
    'network_id' => env('NETWORK_ID', '4'),
    'network_name' => env('NETWORK_NAME', 'Rinkeby Testnet'),
    'rpc_url' => env('RPC_URL', 'https://rinkeby.infura.io/v3/b8e7a65f07574f89a1424b075a31f605'),
    'wss_url' => env('WSS_URL', 'wss://rinkeby.infura.io/ws/v3/b8e7a65f07574f89a1424b075a31f605'),
    'block_explorer_url' => env('BLOCK_EXPLORER_URL', 'https://rinkeby.etherscan.io'),
];
