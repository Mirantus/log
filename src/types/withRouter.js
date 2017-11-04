// @flow

export type withRouterType = {|
    match: {
        params: any
    },
    location: {},
    history: {
        push: Function
    },
|}
