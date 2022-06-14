import NullComponent from '../nullComponent/nullComponent';
import TextAndImage from '../textAndImage/textAndImage';
import PageTeaser from '../pageTeaser/pageTeaser';
import shortid from 'shortid';

const Components = {
    textAndImage: TextAndImage,
    pageTeaser: PageTeaser
}

export default function PageElements({ pageElements, preview = true }) {
    return (
        <>
        {pageElements.map(component => {
            if (Components[component.contentTypeAlias] !== undefined) {
                const Component = Components[component.contentTypeAlias];
                return (
                    <Component key={shortid.generate()} component={component} />
                )
            }

            return (
                <NullComponent key={shortid.generate()} preview={preview} componentName={component.contentTypeAlias} componentData={component} />
            )
        })}
        </>
    )
}