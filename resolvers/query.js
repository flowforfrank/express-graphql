const categories = [
    { id: 0, name: 'HTML' },
    { id: 1, name: 'CSS' },
    { id: 2, name: 'JavaScript' }
];

const articles = [
    { id: 0, title: '10 Best Practices for HTML', category: 1 },
    { id: 1, title: 'How to Get Started With GraphQL', category: 3 },
    { id: 2, title: 'How to Use Express to Build a REST API', category: 3 },
    { id: 3, title: 'How to Create Skeleton Loaders in CSS', category: 2 },
    { id: 4, title: 'What are Tuples and Records in JavaScript?', category: 3 }
];

export default {
    articles: (obj, args) => {
        if (args.categoryId) {
            return articles.filter(article => article.category === args.categoryId);
        }

        return articles;
    },
    article: (obj, args) => {
        const article = articles.find(article => article.id === args.id);
        const categoryName = categories.find(category => category.id === article.id).name;

        return {
            ...article,
            categoryName
        }
    },
    categories: () => categories,
    category: (obj, args) => categories.find(category => category.id === args.id)
}