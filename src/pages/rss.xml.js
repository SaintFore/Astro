import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context){
    return rss({
        title: 'Soleil\'s Blog',
        description: '我的又一次尝试',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>zh-CN</language>`,
    });
}