import { Client } from "@umbraco/headless-client";

const UMB_PROJECT_ALIAS = 'pentiase-heartcore';
const client = new Client({
    projectAlias: UMB_PROJECT_ALIAS,
    language: 'en-US',
});

export async function root() {
    const rootContent = await client.delivery.content.root();

    return rootContent[0];
}

export async function getAllPages() {
    const root = await client.delivery.content.root();
    const home = root[0];
    const descendants = await client.delivery.content.descendants(home._id);
    const homeUrl = [home];
    const urls = [...homeUrl, ...descendants.items].map(descendant => descendant._url.replace('/home', ''));
    return urls;
}

export async function getPageFromUrl(url) {
    const page = await client.delivery.content.byUrl('/home' + url);
    return page;
}