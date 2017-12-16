// @flow

export type withRouterType = {|
    match: {
        params: any
    },
    location: any,
    history: {
        push: Function,
        replace: Function,
    },
|}
