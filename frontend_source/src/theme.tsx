
export interface Theme {
    background: string,
    contentBackground: string,
    foreground: string,
    primaryAccent: string,
    secondaryAccent: string,
}

export enum ThemeName {
    light = 'light',
    dark = 'dark'
}

const themes: Record<ThemeName, Theme> = {
    [ThemeName.light]: {
        background: '#F0F0F0',
        contentBackground: '#FFFFFF',
        foreground: '#010B13',
        primaryAccent: '#306998',
        secondaryAccent: '#FFD43B',
    },
    [ThemeName.dark]: {
        background: '#121212',
        contentBackground: '#1E1E1E',
        foreground: '#FFFFFF',
        primaryAccent: '#FFD43B',
        secondaryAccent: '#306998',
    }
}

export default themes;