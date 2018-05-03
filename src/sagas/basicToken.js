import { all, call, take, fork } from 'redux-saga/effects'

import {createEnitityPut} from './shared'
import * as actions from 'actions/basicToken'
import web3, {onWeb3Ready} from 'services/web3'
import { contract } from 'osseus-wallet'
import addresses from 'constants/addresses'
import * as api from 'services/api'

const entityPut = createEnitityPut('basicToken')

export function * name (contractAddress) {
  try {
    const ColuLocalNetworkContract = contract.getContract({abiName: 'ColuLocalNetwork', address: contractAddress})
    const name = yield call(ColuLocalNetworkContract.methods.name().call)
    yield entityPut({type: actions.NAME.SUCCESS,
      contractAddress,
      response: {
        name
      }})
  } catch (error) {
    yield entityPut({type: actions.NAME.FAILURE, error})
  }
}

export function * symbol (contractAddress) {
  try {
    const ColuLocalNetworkContract = contract.getContract({abiName: 'ColuLocalNetwork', address: contractAddress})
    const symbol = yield call(ColuLocalNetworkContract.methods.symbol().call)
    yield entityPut({type: actions.SYMBOL.SUCCESS,
      contractAddress,
      response: {
        symbol
      }})
  } catch (error) {
    yield entityPut({type: actions.SYMBOL.FAILURE, error})
  }
}

export function * totalSupply (contractAddress) {
  try {
    const ColuLocalNetworkContract = contract.getContract({abiName: 'ColuLocalNetwork', address: contractAddress})
    const totalSupply = yield call(ColuLocalNetworkContract.methods.totalSupply().call)
    yield entityPut({type: actions.TOTAL_SUPPLY.SUCCESS,
      contractAddress,
      response: {
        totalSupply
      }})
  } catch (error) {
    yield entityPut({type: actions.TOTAL_SUPPLY.FAILURE, error})
  }
}

export function * tokenURI (contractAddress) {
  try {
    const ColuLocalNetworkContract = contract.getContract({abiName: 'ColuLocalCurrency', address: contractAddress})
    const tokenURI = yield call(ColuLocalNetworkContract.methods.tokenURI().call)
    yield entityPut({type: actions.TOKEN_URI.SUCCESS,
      contractAddress,
      response: {
        tokenURI
      }})
  } catch (error) {
    yield entityPut({type: actions.TOKEN_URI.FAILURE, error})
  }
}

export function * setTokenURI (contractAddress, tokenURI) {
  try {
    const ColuLocalNetworkContract = contract.getContract({abiName: 'ColuLocalCurrency', address: contractAddress})
    yield ColuLocalNetworkContract.methods.setTokenURI(tokenURI).send({
      from: web3.eth.defaultAccount
    })
    yield entityPut({type: actions.SET_TOKEN_URI.SUCCESS,
      contractAddress,
      response: {
        tokenURI
      }})
  } catch (error) {
    yield entityPut({type: actions.SET_TOKEN_URI.FAILURE, error})
  }
}

export function * owner (contractAddress) {
  try {
    const ColuLocalNetworkContract = contract.getContract({abiName: 'ColuLocalCurrency', address: contractAddress})
    const owner = yield call(ColuLocalNetworkContract.methods.owner().call)
    yield entityPut({type: actions.OWNER.SUCCESS,
      contractAddress,
      response: {
        owner
      }})
  } catch (error) {
    yield entityPut({type: actions.OWNER.FAILURE, error})
  }
}

export function * balanceOf (contractAddress, address) {
  try {
    const ColuLocalNetworkContract = contract.getContract({abiName: 'ColuLocalNetwork', address: contractAddress})
    const balanceOf = yield call(ColuLocalNetworkContract.methods.balanceOf(address).call)
    yield entityPut({type: actions.BALANCE_OF.SUCCESS,
      contractAddress,
      response: {
        balanceOf
      }})
  } catch (error) {
    yield entityPut({type: actions.BALANCE_OF.FAILURE, error})
  }
}

export function * transfer (contractAddress, to, value) {
  try {
    const ColuLocalNetworkContract = contract.getContract({abiName: 'ColuLocalNetwork', address: contractAddress})
    const receipt = yield ColuLocalNetworkContract.methods.transfer(to, value).send({
      from: web3.eth.defaultAccount
    })
    yield entityPut({type: actions.BALANCE_OF.REQUEST, address: receipt.from})
    yield entityPut({type: actions.TRANSFER.SUCCESS, receipt})
  } catch (error) {
    yield entityPut({type: actions.TRANSFER.FAILURE, error})
  }
}

export function * fetchContractData (contractAddress) {
  try {
    const ColuLocalNetworkContract = contract.getContract({abiName: 'ColuLocalCurrency', address: contractAddress})

    const calls = {
      name: call(ColuLocalNetworkContract.methods.name().call),
      symbol: call(ColuLocalNetworkContract.methods.symbol().call),
      totalSupply: call(ColuLocalNetworkContract.methods.totalSupply().call),
      owner: call(ColuLocalNetworkContract.methods.owner().call)
    }

    // wait untill web3 is ready
    yield onWeb3Ready
    if (web3.eth.defaultAccount) {
      calls.balanceOf = call(ColuLocalNetworkContract.methods.balanceOf(web3.eth.defaultAccount).call)
    }

    if (contractAddress !== addresses.ColuLocalNetwork) {
      calls.tokenURI = call(ColuLocalNetworkContract.methods.tokenURI().call)
    }

    const response = yield all(calls)

    if (response.tokenURI) {
      const [protocol, hash] = response.tokenURI.split('://')
      const {data} = yield api.fetchMetadata(protocol, hash)
      response.metadata = data.data
    }

    yield entityPut({type: actions.FETCH_CONTRACT_DATA.SUCCESS,
      contractAddress,
      response
    })
  } catch (error) {
    console.error(error)
    yield entityPut({type: actions.FETCH_CONTRACT_DATA.FAILURE, contractAddress, error})
  }
}

export function * watchBalanceOf () {
  while (true) {
    const {contractAddress, address} = yield take(actions.BALANCE_OF.REQUEST)
    yield fork(balanceOf, contractAddress, address)
  }
}

export function * watchName () {
  while (true) {
    const {contractAddress} = yield take(actions.NAME.REQUEST)
    yield fork(name, contractAddress)
  }
}

export function * watchSymbol () {
  while (true) {
    const {contractAddress} = yield take(actions.SYMBOL.REQUEST)
    yield fork(symbol, contractAddress)
  }
}

export function * watchTotalSupply () {
  while (true) {
    const {contractAddress} = yield take(actions.TOTAL_SUPPLY.REQUEST)
    yield fork(totalSupply, contractAddress)
  }
}

export function * watchTransfer () {
  while (true) {
    const {contractAddress, to, value} = yield take(actions.TRANSFER.REQUEST)
    yield fork(transfer, contractAddress, to, value)
  }
}

export function * watchTokenURI () {
  while (true) {
    const {contractAddress} = yield take(actions.TOKEN_URI.REQUEST)
    yield fork(tokenURI, contractAddress)
  }
}

export function * watchSetTokenURI () {
  while (true) {
    const {contractAddress, tokenURI} = yield take(actions.SET_TOKEN_URI.REQUEST)
    yield fork(setTokenURI, contractAddress, tokenURI)
  }
}

export function * watchOwner () {
  while (true) {
    const {contractAddress} = yield take(actions.OWNER.REQUEST)
    yield fork(owner, contractAddress)
  }
}

export function * watchTransferSuccess () {
  while (true) {
    const {receipt} = yield take(actions.TRANSFER.SUCCESS)
    yield entityPut({type: actions.BALANCE_OF.REQUEST, address: receipt.from})
  }
}

export function * watchFetchContractData () {
  while (true) {
    const {contractAddress} = yield take(actions.FETCH_CONTRACT_DATA.REQUEST)
    yield fork(fetchContractData, contractAddress)
  }
}

export default function * rootSaga () {
  yield all([
    fork(watchName),
    fork(watchSymbol),
    fork(watchTotalSupply),
    fork(watchTokenURI),
    fork(watchSetTokenURI),
    fork(watchOwner),
    fork(watchBalanceOf),
    fork(watchTransfer),
    fork(watchFetchContractData)
  ])
}
