const apiEndpoints = {
    products: (pageSize = 5, catId) =>
        `/products?page=1&pageSize=${pageSize}&sortBy=rating&sort=desc${
            catId ? `&cid=${catId}` : ''
        }`,
    categories: '/categories',
};

export default apiEndpoints;