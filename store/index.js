/*
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Auth from '@/store/auth'

const initializer = (store: Store<any>) => initializeStores(store)


let AuthStore: Auth

function initializeStores(store: Store<any>): void {
  AuthStore = getModule(Auth,store)
}

export { initializeStores, AuthStore }
*/


export const actions = {
  nuxtServerInit() {}
}