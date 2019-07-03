export const SKIP_INTRO = 'mercavus/app/SKIP_INTRO';


const initialState = {
    SkippIntro: false,
    user: {},
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SKIP_INTRO:
            return {
                ...state,
                SkippIntro: true
            };
        default:
            return state;
    }
}


export function skipIntro() {
    return {
        type: SKIP_INTRO,
    };
}
