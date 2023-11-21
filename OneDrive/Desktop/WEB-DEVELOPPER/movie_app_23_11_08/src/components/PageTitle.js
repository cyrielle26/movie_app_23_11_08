import { HelmetProvider } from "react-helmet-async";

export const PageTitle = ({ titleName }) => {
    return <HelmetProvider>
        <title>PNFLIX | {titleName}</title>
    </HelmetProvider>
}