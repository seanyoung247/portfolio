
export interface Theme {
    background: string,
    altBackground: string,
    contentBackground: string,
    header: string,
    foreground: string,
    altForeground: string,
    primaryAccent: string,
    secondaryAccent: string,
    shadow: string,

    titleFont: string,
    bodyFont: string,
}

export enum ThemeName {
    light = 'light',
    dark = 'dark'
}

export const themes: Record<ThemeName, Theme> = {
    [ThemeName.light]: {
        background: '#F0F0F0',
        altBackground: '#E0E0E0',
        contentBackground: '#FFFFFF',
        header: '#D6E4F0',
        foreground: '#010B13',
        altForeground: '#FFFFFF',
        primaryAccent: '#306998',
        secondaryAccent: '#FFD43B',
        shadow: '#00000055',

        titleFont: 'Orbitron',
        bodyFont: 'Roboto',
    },
    [ThemeName.dark]: {
        background: '#3E3E3E',
        altBackground: '#2E2E2E',
        contentBackground: '#1E1E1E',
        header: '#1B1A17',
        foreground: '#FFFFFF',
        altForeground: '#010B13',
        primaryAccent: '#FFD43B',
        secondaryAccent: '#306998',
        shadow: '#00000088',

        titleFont: 'Orbitron',
        bodyFont: 'Roboto',
    }
}
