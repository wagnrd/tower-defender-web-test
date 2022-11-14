import React, { ReactElement, useContext, useMemo, useState } from "react";

interface AppContextProps {
    isMobile: boolean;
    setMobile: (value: boolean) => void;
}

interface AppProviderProps {
    children?: ReactElement | ReactElement[];
}

const appProps: AppContextProps = {
    isMobile: false,
    setMobile: stub
};

const AppContext = React.createContext<AppContextProps>(appProps);

/* eslint-disable @typescript-eslint/no-empty-function */
function stub(...args: any) {
}

function setMobile(value: boolean) {
    appProps.isMobile = value;
}

function AppProvider({ children }: AppProviderProps): ReactElement {
    const [isMobile, setMobile] = useState(false);

    const contextValue = useMemo(() => {
        return {
            isMobile,
            setMobile
        };
    }, [isMobile, setMobile]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}

function useApp(): AppContextProps {
    return useContext(AppContext) as AppContextProps;
}

export default AppProvider;
export { useApp };