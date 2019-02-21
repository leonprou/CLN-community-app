module.exports = [
  {
    'constant': true,
    'inputs': [],
    'name': 'owner',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'newOwner',
        'type': 'address'
      }
    ],
    'name': 'transferOwnership',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': '_homeBridge',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': '_homeValidators',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': '_token',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': '_blockNumber',
        'type': 'uint256'
      }
    ],
    'name': 'HomeBridgeDeployed',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'previousOwner',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'newOwner',
        'type': 'address'
      }
    ],
    'name': 'OwnershipTransferred',
    'type': 'event'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'getBridgeFactoryVersion',
    'outputs': [
      {
        'name': 'major',
        'type': 'uint64'
      },
      {
        'name': 'minor',
        'type': 'uint64'
      },
      {
        'name': 'patch',
        'type': 'uint64'
      }
    ],
    'payable': false,
    'stateMutability': 'pure',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_owner',
        'type': 'address'
      },
      {
        'name': '_bridgeValidatorsImplementation',
        'type': 'address'
      },
      {
        'name': '_requiredSignatures',
        'type': 'uint256'
      },
      {
        'name': '_initialValidators',
        'type': 'address[]'
      },
      {
        'name': '_bridgeValidatorsOwner',
        'type': 'address'
      },
      {
        'name': '_homeBridgeErcToErcImplementation',
        'type': 'address'
      },
      {
        'name': '_requiredBlockConfirmations',
        'type': 'uint256'
      },
      {
        'name': '_gasPrice',
        'type': 'uint256'
      },
      {
        'name': '_dailyLimit',
        'type': 'uint256'
      },
      {
        'name': '_maxPerTx',
        'type': 'uint256'
      },
      {
        'name': '_minPerTx',
        'type': 'uint256'
      },
      {
        'name': '_foreignDailyLimit',
        'type': 'uint256'
      },
      {
        'name': '_foreignMaxPerTx',
        'type': 'uint256'
      },
      {
        'name': '_homeBridgeOwner',
        'type': 'address'
      },
      {
        'name': '_homeProxyOwner',
        'type': 'address'
      }
    ],
    'name': 'initialize',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_tokenName',
        'type': 'string'
      },
      {
        'name': '_tokenSymbol',
        'type': 'string'
      },
      {
        'name': '_tokenDecimals',
        'type': 'uint8'
      }
    ],
    'name': 'deployHomeBridge',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'bridgeValidatorsImplementation',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_bridgeValidatorsImplementation',
        'type': 'address'
      }
    ],
    'name': 'setBridgeValidatorsImplementation',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'requiredSignatures',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_requiredSignatures',
        'type': 'uint256'
      }
    ],
    'name': 'setRequiredSignatures',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'initialValidators',
    'outputs': [
      {
        'name': '',
        'type': 'address[]'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_initialValidators',
        'type': 'address[]'
      }
    ],
    'name': 'setInitialValidators',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'bridgeValidatorsOwner',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_bridgeValidatorsOwner',
        'type': 'address'
      }
    ],
    'name': 'setBridgeValidatorsOwner',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'bridgeValidatorsProxyOwner',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_bridgeValidatorsProxyOwner',
        'type': 'address'
      }
    ],
    'name': 'setBridgeValidatorsProxyOwner',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'homeBridgeErcToErcImplementation',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_homeBridgeErcToErcImplementation',
        'type': 'address'
      }
    ],
    'name': 'setHomeBridgeErcToErcImplementation',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'requiredBlockConfirmations',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_requiredBlockConfirmations',
        'type': 'uint256'
      }
    ],
    'name': 'setRequiredBlockConfirmations',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'gasPrice',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_gasPrice',
        'type': 'uint256'
      }
    ],
    'name': 'setGasPrice',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'dailyLimit',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_dailyLimit',
        'type': 'uint256'
      }
    ],
    'name': 'setDailyLimit',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'maxPerTx',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_maxPerTx',
        'type': 'uint256'
      }
    ],
    'name': 'setMaxPerTx',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'minPerTx',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_minPerTx',
        'type': 'uint256'
      }
    ],
    'name': 'setMinPerTx',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'foreignDailyLimit',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_foreignDailyLimit',
        'type': 'uint256'
      }
    ],
    'name': 'setForeignDailyLimit',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'foreignMaxPerTx',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_foreignMaxPerTx',
        'type': 'uint256'
      }
    ],
    'name': 'setForeignMaxPerTx',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'homeBridgeOwner',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_homeBridgeOwner',
        'type': 'address'
      }
    ],
    'name': 'setHomeBridgeOwner',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'homeBridgeProxyOwner',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_homeBridgeProxyOwner',
        'type': 'address'
      }
    ],
    'name': 'setHomeBridgeProxyOwner',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }
]