const initState = {
    themeId: 1,
}
type ActionType = ReturnType<typeof changeThemeId>
export const themeReducer = (state = initState, action: ActionType): typeof state => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({type: 'SET_THEME_ID', id}) // fix any
