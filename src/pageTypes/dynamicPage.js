import Frontpage from "./frontpage";
import Textpage from './textpage';

export default function DynamicPage({ page }) {
    const pageTypes = {
        frontpage: Frontpage,
        textpage: Textpage
    }

    var PageType = pageTypes[page.contentTypeAlias];

    if (PageType !== undefined) {
        return (
            <PageType page={page} />
        )
    } else {
        return (
            <div>No page type defined</div>
        )
    }
}