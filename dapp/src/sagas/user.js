import { all, call, put, select } from 'redux-saga/effects'

import { apiCall, tryTakeEvery } from './utils'
import * as actions from 'actions/user'
import { getAccountAddress } from 'selectors/accounts'
import web3 from 'services/web3'
import * as api from 'services/api/user'
import { generateSignatureData } from 'utils/web3'

export function * login () {
  const accountAddress = yield select(getAccountAddress)
  const chainId = yield select(state => state.network.networkId)

  const date = new Date().toUTCString()

  const signatureData = generateSignatureData({ accountAddress, date, chainId })
  const promise = new Promise((resolve, reject) => {
    web3.currentProvider.sendAsync(
      {
        method: 'eth_signTypedData_v3',
        params: [accountAddress, JSON.stringify(signatureData)],
        from: accountAddress
      },
      (error, { result }) => {
        if (error) {
          return reject(error)
        }
        return resolve(result)
      }
    )
  })
  const signature = yield promise
  if (signature) {
    const response = yield apiCall(api.login, { accountAddress, signature, date })
    yield put({
      type: actions.LOGIN.SUCCESS,
      accountAddress,
      response: {
        authToken: response.token
      }
    })
  }
}

function * addUser ({ user, tokenAddress }) {
  yield call(login)

  const accountAddress = yield select(getAccountAddress)
  const response = yield apiCall(api.addUser,
    { user: { ...user, accountAddress }, tokenAddress }, { auth: true })

  const { data } = response
  yield put({
    type: actions.ADD_USER.SUCCESS,
    user,
    tokenAddress,
    response: {
      data
    }
  })
}

function * isUserExists ({ accountAddress }) {
  const response = yield apiCall(api.isUserExists, { accountAddress })

  yield put({
    type: actions.IS_USER_EXISTS.SUCCESS,
    accountAddress,
    response
  })
}

export default function * userSaga () {
  yield all([
    tryTakeEvery(actions.LOGIN, login, 1),
    tryTakeEvery(actions.ADD_USER, addUser, 1),
    tryTakeEvery(actions.IS_USER_EXISTS, isUserExists, 1)
  ])
}
