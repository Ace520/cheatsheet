module.exports = {
    title: 'CheatSheet',
    base: '/cheatsheet/',
    description: 'cheatsheet',
    themeConfig: {
        gh: {
            owner: 'Ace520',
            repo: 'cheatsheet',
            branch:'master',
        },
    },
    markdown: {
        anchor: { permalink: false },
        toc: { includeLevel: [1, 2] },
        extendMarkdown: md => {
            // 使用更多的 markdown-it 插件!
            // md.use(require('markdown-it-xxx'))
        }
    },
    plugins: [
        ['container', {
            type: 'card',
            before: info => `<div class="masonry-card"><div class="masonry-card-box"><div class="masonry-card-content"><div class="title">${info}</div>`,
            after: '</div></div></div>',
        }],
    ]
}