
export interface Theme {
    background: string,
    contentBackground: string,
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
        contentBackground: '#FFFFFF',
        foreground: '#010B13',
        altForeground: '#FFFFFF',
        primaryAccent: '#306998',
        secondaryAccent: '#FFD43B',
        shadow: '#00000055',

        titleFont: 'Orbitron',
        bodyFont: 'Roboto',
    },
    [ThemeName.dark]: {
        background: '#1F1F1F',
        contentBackground: '#181818',
        foreground: '#FFFFFF',
        altForeground: '#010B13',
        primaryAccent: '#FFD43B',
        secondaryAccent: '#306998',
        shadow: '#00000088',

        titleFont: 'Orbitron',
        bodyFont: 'Roboto',
    }
}
