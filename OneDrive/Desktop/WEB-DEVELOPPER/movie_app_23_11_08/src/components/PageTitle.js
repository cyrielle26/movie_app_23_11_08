import { Helmet } from "react-helmet"

export const PageTitle = ({ titleName }) => {
    return <Helmet>
        <title>PNFLIX | {titleName}</title>
    </Helmet>
}